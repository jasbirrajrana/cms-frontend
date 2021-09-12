// @ts-nocheck
import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Field from "../components/Field";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useUploadMutation,
} from "../generated/graphql";
import { Form, Formik } from "formik";
import { Button } from "@chakra-ui/button";
interface EditPostProps extends RouteComponentProps<any> {}

const EditPost: React.FC<EditPostProps> = ({ history }) => {
  // let initialValues = {
  //   title: "",
  //   body: "",
  //   description: "",
  //   subtitle: "",
  //   featureImage: "",
  //   tag: "",
  // };

  const [initialValuesState, setInitialValuesState] = useState();
  const [updatePost, { loading: updateDataLoading }] = useUpdatePostMutation();
  //@ts-ignore
  const { id } = useParams();
  const [upload, { loading: updateLoading }] = useUploadMutation();
  const {
    data,
    loading: getDataLoading,
    error: getDataError,
  } = useGetPostByIdQuery({
    variables: { post_id: id },
    fetchPolicy: "network-only",
  });
  const [uploadFile, setUploadFile] = useState();
  const handleReadImage = (e: any) => {
    setUploadFile(e.target.files[0]);
  };
  useEffect(() => {
    if (!getDataLoading) {
      // initialValues.title = data?.getPostById.title;
      // initialValues.body = data?.getPostById.body;
      // initialValues.description = data?.getPostById.description;
      // initialValues.subtitle = data?.getPostById.subtitle;
      // initialValues.tag = data?.getPostById.tag;
      setInitialValuesState(data);
    }
  }, [data]);
  console.log("state", initialValuesState?.getPostById.title);

  return (
    <>
      {updateDataLoading && <Loader />}
      {updateLoading && <Loader />}
      {getDataLoading ? (
        <Loader />
      ) : (
        <>
          <Heading ml="25px" mt="25px">
            New Article
          </Heading>
          <Flex flexDirection="column" alignItems="center" mt="34px">
            <Box w={["100%", 800]}>
              <Container maxW="-moz-fit-content">
                <Formik
                  enableReinitialize
                  initialValues={{
                    title: initialValuesState?.getPostById.title,
                    body: initialValuesState?.getPostById.body,
                    description: initialValuesState?.getPostById.description,
                    tag: initialValuesState?.getPostById.tag,
                    subtitle: initialValuesState?.getPostById.subtitle,
                  }}
                  onSubmit={async ({
                    title,
                    body,
                    description,
                    subtitle,
                    tag,
                  }) => {
                    let uploadResponse;
                    if (uploadFile) {
                      uploadResponse = await upload({
                        variables: { file: uploadFile },
                      });
                    }
                    console.log("upload response", uploadResponse);
                    const response = await updatePost({
                      variables: {
                        title,
                        body,
                        id,
                        description,
                        subtitle,
                        tag,
                        featureImage:
                          uploadResponse !== undefined
                            ? uploadResponse.data?.upload
                            : "",
                      },
                    });
                    if (response?.data?.updatePost) {
                      history.push("/myposts");
                    }
                  }}>
                  {() => (
                    <Form>
                      <Stack spacing={6}>
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
                          rows={65}
                          cols={66}
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
      )}
    </>
  );
};
export default EditPost;
