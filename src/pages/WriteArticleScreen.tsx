import { Box, Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import Field from "../components/Field";
import { useDropzone } from "react-dropzone";
import { useCreatePostMutation } from "../generated/graphql";
import Loader from "../components/Loader/Loader";
import { RouteComponentProps } from "react-router-dom";
interface WriteArticleScreenProps extends RouteComponentProps<any> {}

const WriteArticleScreen: React.FC<WriteArticleScreenProps> = ({ history }) => {
  const [createPost, { loading }] = useCreatePostMutation();
  // const onDrop = useCallback(
  //   ([file]) => {

  //   },
  //   [file]
  // );

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {loading && <Loader />}
      <Heading ml="25px" mt="25px">
        New Article
      </Heading>
      <Flex flexDirection="column" alignItems="center">
        <Box w={["100%", 500]}>
          <Container maxW="-moz-fit-content">
            <Formik
              initialValues={{
                title: "",
                body: "",
                description: "",
                subtitle: "",
                featureImage: "",
                tag: "",
              }}
              onSubmit={async ({
                title,
                body,
                description,
                subtitle,
                tag,
                featureImage,
              }) => {
                const response = await createPost({
                  variables: {
                    title,
                    body,
                    description,
                    subtitle,
                    tag,
                    featureImage,
                  },
                });
                if (response.data?.createPost) {
                  history.push("/");
                }
              }}
            >
              {() => (
                <Form>
                  <Stack spacing={4}>
                    <Field name="title" label="Title" placeholder="Title" />
                    <Field
                      name="subtitle"
                      label="subtitle"
                      placeholder="subtitle"
                    />
                    <Field
                      name="description"
                      label="Description"
                      placeholder="description"
                    />
                    <Field
                      name="featureImage"
                      label="Feature Image"
                      placeholder="url of image.."
                    />

                    <Field name="tag" label="Tag" placeholder="tag" />
                    <Field
                      name="body"
                      label="Body"
                      placeholder="Body"
                      textarea={true}
                    />
                    <Button colorScheme="red" type="submit" isFullWidth>
                      Create
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      </Flex>
    </>
  );
};
export default WriteArticleScreen;
