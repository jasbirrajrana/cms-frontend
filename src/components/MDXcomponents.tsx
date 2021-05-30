// @jsx
import {
  Box,
  Alert,
  Code,
  Heading,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link to={href}>
        <Link color={color[colorMode]} {...props} />
      </Link>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

interface QuoteProps {}

const Quote: React.FC<QuoteProps> = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};
interface DocsHeadingProps {
  id: any;
}
const DocsHeading: React.FC<DocsHeadingProps> = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);
interface HrProps {
  id: any;
}
const Hr: React.FC<HrProps> = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};
const MDXComponents = {
  // @ts-ignore

  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  // @ts-ignore

  h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  // @ts-ignore

  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  // @ts-ignore

  h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  // @ts-ignore

  h5: (props) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  // @ts-ignore

  h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  // @ts-ignore

  // inlineCode: (props) => (
  //   <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  // ),
  // @ts-ignore

  br: (props) => <Box height="24px" {...props} />,
  // @ts-ignore

  hr: Hr,
  // @ts-ignore

  a: CustomLink,
  // @ts-ignore

  p: (props) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  // @ts-ignore

  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  // @ts-ignore

  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  // @ts-ignore

  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};

export default MDXComponents;
