import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Field from "../components/Field";
import { validationSchema } from "../utils/yupSchema";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [isSmallThan490] = useMediaQuery("(max-width: 490px)");

  return (
    <>
      <Center minH="100vh">
        <Box w={["100%", 400]} padding={isSmallThan490 ? "30px" : "0px"}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {}}
          >
            {({ isSubmitting }) => (
              <>
                <Form>
                  <Stack spacing={2}>
                    <Heading>Login</Heading>

                    <Field name="email" label="Email" placeholder="email" />
                    <Field
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="password"
                    />

                    <Button
                      colorScheme="red"
                      type="submit"
                      isFullWidth
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
                    >
                      Login
                    </Button>
                    <Box display="flex" mt="10px">
                      <Text mr="10px">Not have an account?</Text>
                      <Link to="/register">Register</Link>
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
