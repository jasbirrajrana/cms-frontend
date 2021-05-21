import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Form, Formik } from "formik";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Field from "../components/Field";
import { useRegisterMutation } from "../generated/graphql";
import { toMapError } from "../utils/toErrorMap";
import { validationSchema } from "../utils/yupSchema";

interface RegisterProps extends RouteComponentProps<any> {}

const RegisterScreen: React.FC<RegisterProps> = ({ history }) => {
  const [isSmallThan490] = useMediaQuery("(max-width: 490px)");
  const [register, { loading }] = useRegisterMutation();
  return (
    <>
      <Center minH="100vh">
        <Box w={["100%", 400]} padding={isSmallThan490 ? "30px" : "0px"}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={async ({ username, email, password }, { setErrors }) => {
              const response = await register({
                variables: { username, email, password },
              });
              if (response.data?.register.errors) {
                setErrors(toMapError(response.data.register.errors));
              } else if (response.data?.register.user) {
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
