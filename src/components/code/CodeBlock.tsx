//@ts-nocheck
import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Button,
  useClipboard,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
// import Highlight from "./Highlight";
import { Check, DuplicateOutline } from "heroicons-react";
import Highlight from "./Highlight";

const Codeblock = (props) => {
  const showLines = true;

  const { className, children, viewlines, metastring, ln, ...rest } = props;
  console.log("props", props);
  const [editorCode] = useState(children);

  const { hasCopied, onCopy } = useClipboard(editorCode);

  const language = className?.replace(/lang-/, "");
  let subString = className.split("-")[1].split("");
  let codeLabel = "";
  for (let i = 1; i < subString.length - 1; i++) {
    codeLabel += subString[i];
  }
  console.log(codeLabel);
  return (
    <Box
      rounded="md"
      overflow="hidden"
      bg={useColorModeValue("white", "gray.800")}
      // my={4}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}>
      {codeLabel ? (
        <HStack
          px={4}
          py={1}
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth="1px"
          // eslint-disable-next-line react-hooks/rules-of-hooks
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}>
          <Text
            fontSize="sm"
            fontWeight="500"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.500", "gray.300")}>
            {codeLabel}
          </Text>
          <IconButton
            size="sm"
            colorScheme="blue"
            onClick={onCopy}
            variant="ghost"
            color={
              hasCopied
                ? // eslint-disable-next-line react-hooks/rules-of-hooks
                  useColorModeValue("green.600", "green.100")
                : // eslint-disable-next-line react-hooks/rules-of-hooks
                  useColorModeValue("gray.500", "gray.300")
            }
            bg={
              // eslint-disable-next-line react-hooks/rules-of-hooks
              hasCopied ? useColorModeValue("green.50", "green.800") : undefined
            }
            icon={
              hasCopied ? <Check size={18} /> : <DuplicateOutline size={18} />
            }
          />
        </HStack>
      ) : undefined}
      <Highlight
        codeString={editorCode}
        language={language}
        metastring={metastring}
        showLines={showLines}
        ln={ln}
      />
    </Box>
  );
};

export default Codeblock;
