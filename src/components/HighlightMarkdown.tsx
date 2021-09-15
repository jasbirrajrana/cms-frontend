import React, { useRef, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Prism from "prismjs";
import {
  Alert,
  Box,
  chakra,
  Code,
  Kbd,
  useColorModeValue,
  Link as ChakraLink,
  AspectRatio,
} from "@chakra-ui/react";
import {
  H_1,
  H_2,
  H_3,
  H_4,
  H_5,
  H_6,
  P,
  Hr,
  Quote,
  ImageC,
} from "./md/MDXcomponents";
import Codeblock from "./code/CodeBlock";

interface HighlightedMarkdownProps {
  children: string;
}
const Pre = (props: any) => (
  <chakra.div my="2em" borderRadius="sm" {...props} />
);
const HighlightedMarkdown = ({ children }: HighlightedMarkdownProps) => {
  return (
    <div>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: H_1,
            },
            h2: {
              component: H_2,
            },
            h3: {
              component: H_3,
            },
            h4: {
              component: H_4,
            },
            h5: {
              component: H_5,
            },
            h6: {
              component: H_6,
            },
            code: {
              component: Codeblock,
            },
            p: { component: P },
            hr: { component: Hr },
            blockquote: { component: Quote },
            img: { component: ImageC },
            pre: { component: Pre },
            kbd: { component: Kbd },
          },
        }}>
        {children}
      </Markdown>
    </div>
  );
};
export default HighlightedMarkdown;
