import React, { useRef, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import Prism from "prismjs";
// import "highlight.js/styles/atom-one-dark.css";
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
  InlineCode,
} from "./md/MDXcomponents";

interface HighlightedMarkdownProps {
  children: string;
}

const HighlightedMarkdown = ({ children }: HighlightedMarkdownProps) => {
  const rootRef: any = useRef<HTMLDivElement>();

  useEffect(() => {
    rootRef.current.querySelectorAll("pre code").forEach((block: any) => {
      //   hljs.highlightBlock(block);
      Prism.highlightElement(block);
    });
  }, [children]);

  return (
    <div ref={rootRef}>
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
            p: { component: P },
            hr: { component: Hr },
            blockquote: { component: Quote },
            img: { component: ImageC },
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
};
export default HighlightedMarkdown;
