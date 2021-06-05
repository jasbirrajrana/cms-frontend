import { Heading } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import HelmetSeo from "../components/HelmetSeo";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../context/auth";
import {
  MeDocument,
  MeQuery,
  useConfirmUserMutation,
} from "../generated/graphql";
interface UserConfirmProps extends RouteComponentProps<any> {}

const UserConfirm: React.FC<UserConfirmProps> = ({ history }) => {
  const paramsObject: any = useParams();
  const { setUser } = useContext(AuthContext);
  const toast = useToast();

  const [confirmUser, { loading }] = useConfirmUserMutation();
  useEffect(() => {
    (async () => {
      const response = await confirmUser({
        variables: { token: paramsObject.token },
        update: (store, { data }) => {
          if (!data) {
            return null;
          }
          store.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data.confirmUser.user,
            },
          });
        },
      });
      if (response.data?.confirmUser.errors) {
        toast({
          title: "Already verified!",
          description: "Verification Email has been Already verified!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        history.push("/");
      } else if (response.data?.confirmUser.user) {
        setUser(response.data.confirmUser.user);
        history.push("/");
      }
    })();
  }, []);

  return (
    <>
      <HelmetSeo
        title="Confirm Page | jasbirrajrana"
        content="Confirmation page / @jasbirrajrana"
      />
      {loading && <Loader />}
      <Heading>Confirm user screen</Heading>
    </>
  );
};
export default UserConfirm;
