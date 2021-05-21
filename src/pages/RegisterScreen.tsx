import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Field from "../components/Field";
import { AuthContext } from "../context/auth";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { toMapError } from "../utils/toErrorMap";
import { validationSchema } from "../utils/yupSchema";

interface RegisterProps extends RouteComponentProps<any> {}

const RegisterScreen: React.FC<RegisterProps> = ({ history }) => {
  const [isSmallThan490] = useMediaQuery("(max-width: 490px)");
  const [register, { loading }] = useRegisterMutation();
  const { setUser } = useContext(AuthContext);
  return (
    <>
      <Center minH="80vh">
        <Box w={["100%", 400]} padding={isSmallThan490 ? "30px" : "0px"}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={async ({ username, email, password }, { setErrors }) => {
              const response = await register({
                variables: { username, email, password },
                update: (store, { data }) => {
                  if (!data) {
                    return null;
                  }
                  store.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data.register.user,
                    },
                  });
                },
              });
              if (response.data?.register.errors) {
                setErrors(toMapError(response.data.register.errors));
              } else if (response.data?.register.user) {
                setUser(response.data?.register.user);
                history.push("/");
              }
            }}
          >
            {() => (
              <>
                <Form>
                  <Stack spacing={2}>
                    <Heading>Register</Heading>
                    <Field
                      name="username"
                      label="username"
                      placeholder="username"
                    />
                    <Field name="email" label="Email" placeholder="email" />
                    <Field
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="password"
                    />

                    <Button
                      colorScheme="purple"
                      type="submit"
                      isFullWidth
                      isLoading={loading}
                      isDisabled={loading}
                    >
                      Register
                    </Button>
                    <Box display="flex" mt="10px">
                      <Text mr="10px">Already have an account?</Text>
                      <Link to="/login">Login</Link>
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
export default RegisterScreen;
