import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { LinkBox, useDisclosure, useMergeRefs } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Field from "../components/Field";
import HelmetSeo from "../components/HelmetSeo";
import { AuthContext } from "../context/auth";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { toMapError } from "../utils/toErrorMap";
import { validationSchema } from "../utils/yupSchema";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface LoginScreenProps extends RouteComponentProps<any> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ history }) => {
  const [isSmallThan490] = useMediaQuery("(max-width: 490px)");
  const [login, { loading }] = useLoginMutation();
  const { setUser } = useContext(AuthContext);

  return (
    <>
      <Center
        mt="70px"
        display="flex"
        flexDirection="column"
        height="90vh"
        alignItems="center"
        justifyContent="center">
        <HelmetSeo
          title="Login | jasbirrajrana"
          content="Login with Email Id @jasbirrajrana"
        />
        <Box w={["100%", 420]} padding={isSmallThan490 ? "30px" : "0px"}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async ({ email, password }, { setErrors }) => {
              const response = await login({
                variables: { email, password },
                update: (store, { data }) => {
                  if (!data) {
                    return null;
                  }
                  store.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      // me: data.login.user,
                    },
                  });
                },
              });
              if (response.data?.login.errors) {
                setErrors(toMapError(response.data.login.errors));
              } else if (response.data?.login.user) {
                setUser(response.data?.login.user);
                history.push("/");
              }
            }}>
            {() => (
              <>
                <Form>
                  <Stack spacing="6">
                    <Heading
                      textAlign="center"
                      size="xl"
                      fontWeight="extrabold">
                      Sign in to your account
                    </Heading>
                    <Field name="email" label="Email" placeholder="email" />
                    <Field
                      name="password"
                      type="password"
                      label="Password"
                      required={true}
                      placeholder="password"
                    />

                    <Button
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      fontSize="md"
                      isFullWidth
                      isLoading={loading}
                      isDisabled={loading}>
                      Login
                    </Button>
                    <Box display="flex" mt="10px">
                      <Text mr="10px">Not have an account?</Text>
                      <LinkBox
                        fontWeight="bold"
                        color="orange"
                        textDecoration="underline">
                        <Link to="/register">Register</Link>
                      </LinkBox>
                    </Box>
                  </Stack>
                </Form>
              </>
            )}
          </Formik>
        </Box>
      </Center>
    </>
  );
};
export default LoginScreen;
