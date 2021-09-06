import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

import { Flex } from "@chakra-ui/layout";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const Field: React.FC<FieldProps> = ({
  label,
  size: _,
  textarea,
  ...props
}) => {
  let InputOrTextArea: any = Input;
  if (textarea) {
    InputOrTextArea = Textarea;
  }
  const [field, { error }] = useField(props);

  return (
    <>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <InputOrTextArea {...field} {...props} id={field.name} />
        {error ? (
          <>
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <FormErrorMessage>{error}</FormErrorMessage>{" "}
            </Flex>
          </>
        ) : null}
      </FormControl>
    </>
  );
};
export default Field;
