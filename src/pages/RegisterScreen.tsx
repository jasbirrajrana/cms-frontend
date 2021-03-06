import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { LinkBox } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Field from "../components/Field";
import HelmetSeo from "../components/HelmetSeo";
import { AuthContext } from "../context/auth";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { toMapError } from "../utils/toErrorMap";
import { validationSchema } from "../utils/yupSchema";

interface RegisterProps extends RouteComponentProps<any> {}

const RegisterScreen: React.FC<RegisterProps> = ({ history }) => {
  const [isSmallThan490] = useMediaQuery("(max-width: 490px)");
  const [register, { loading }] = useRegisterMutation();
  const toast = useToast();
  // const { setUser } = useContext(AuthContext);
  return (
    <>
      <Center minH="80vh" mt="70px">
        <HelmetSeo
          title="Register | jasbirrajrana"
          content="Register with Email Id @jasbirrajrana"
        />
        <Box w={["100%", 450]} padding={isSmallThan490 ? "30px" : "0px"}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={async ({ username, email, password }, { setErrors }) => {
              const response = await register({
                variables: { username, email, password },
              });
              if (response.data?.register.errors) {
                console.log(response.data.register.errors);
                setErrors(toMapError(response.data.register.errors));
              } else if (response.data?.register.user) {
                // do the things which you want after successfull submisson of the form
                toast({
                  title: "Account created.",
                  description:
                    "Verification Email has been sent Please verify that!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}>
            {() => (
              <>
                <Form>
                  <Stack spacing={6}>
                    <Heading
                      textAlign="center"
                      size="xl"
                      fontWeight="extrabold">
                      Sign in to your account
                    </Heading>
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
                      isDisabled={loading}>
                      Register
                    </Button>
                    <Box display="flex" mt="10px">
                      <Text mr="10px">Already have an account?</Text>
                      <LinkBox
                        fontWeight="bold"
                        color="orange"
                        textDecoration="underline">
                        <Link to="/login">Login</Link>
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
export default RegisterScreen;
