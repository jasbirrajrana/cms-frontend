import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Field: React.FC<FieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input {...field} {...props} id={field.name} />
        {error ? (
          <>
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormErrorIcon />
              <FormErrorMessage>{error}</FormErrorMessage>{" "}
            </Flex>
          </>
        ) : null}
      </FormControl>
    </>
  );
};
export default Field;
