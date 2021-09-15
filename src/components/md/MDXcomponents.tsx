// @ts-nocheck

import { Alert } from "@chakra-ui/alert";
import { useColorMode } from "@chakra-ui/color-mode";
import { Code, Divider, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

export const H_1 = ({ children, ...props }) => (
  <Heading {...props} as="h1" size="xl" my={5}>
    {children}
  </Heading>
);

export const H_2 = ({ children, ...props }) => (
  <Heading {...props} as="h2" size="lg" fontWeight="bold" my={4}>
    {children}
  </Heading>
);
export const H_3 = ({ children, ...props }) => (
  <Heading {...props} as="h3" size="md" fontWeight="bold" my={3}>
    {children}
  </Heading>
);
export const H_4 = ({ children, ...props }) => (
  <Heading {...props} as="h4" size="sm" fontWeight="bold" my={2}>
    {children}
  </Heading>
);
export const H_5 = ({ children, ...props }) => (
  <Heading {...props} as="h5" size="sm" fontWeight="bold" my={2}>
    {children}
  </Heading>
);
export const H_6 = ({ children, ...props }) => (
  <Heading {...props} as="h6" size="xs" fontWeight="bold" my={1}>
    {children}
  </Heading>
);

export const P = ({ children, ...props }) => (
  <Text {...props} as="p" mt={0} lineHeight="tall">
    {children}
  </Text>
);

export const Hr = (props) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return (
    <Divider borderColor={borderColor[colorMode]} my={4} w="100%" {...props} />
  );
};

export const ImageC = (props) => <Image py={8} {...props} />;
export const Quote = (props) => {
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
export const InlineCode = (props) => (
  <Code colorScheme="yellow" fontSize="0.84em" {...props} />
);
