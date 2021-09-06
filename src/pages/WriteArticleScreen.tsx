import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Input,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import Field from "../components/Field";
import { useDropzone } from "react-dropzone";
import { useCreatePostMutation, useUploadMutation } from "../generated/graphql";
import Loader from "../components/Loader/Loader";
import { RouteComponentProps } from "react-router-dom";
interface WriteArticleScreenProps extends RouteComponentProps<any> {}

const WriteArticleScreen: React.FC<WriteArticleScreenProps> = ({ history }) => {
  const [createPost, { loading }] = useCreatePostMutation();
  const [upload, { error }] = useUploadMutation();
  const [uploadFile, setUploadFile] = useState();
  const handleReadImage = (e: any) => {
    // let reader = new FileReader();
    setUploadFile(e.target.files[0]);
  };

  console.log(uploadFile);
  const uploadImage = async () => {
    const response = await upload({ variables: { file: uploadFile } });
    console.log(response);
    console.log(error);
  };
  return (
    <>
      {loading && <Loader />}
      <Heading ml="25px" mt="25px">
        New Article
      </Heading>
      <Flex flexDirection="column" alignItems="center" mt="34px">
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
                if (uploadFile) {
                  const uploadResponse = await upload({
                    variables: { file: uploadFile },
                  });
                  const response = await createPost({
                    variables: {
                      title,
                      body,
                      description,
                      subtitle,
                      tag,
                      featureImage: uploadResponse.data?.upload as string,
                    },
                  });
                  if (response.data?.createPost) {
                    history.push("/");
                  }
                }
              }}>
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
                    {/* <Field
                      name="featureImage"
                      label="Feature Image"
                      placeholder="url of image.."
                    /> */}
                    <input
                      style={{
                        fontFamily: "Ubuntu",
                        fontSize: "16px",
                        outline: "none",
                        border: "none",
                      }}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleReadImage}
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
