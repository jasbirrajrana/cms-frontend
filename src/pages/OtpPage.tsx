import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Heading, HStack, Stack } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

interface OtpPageProps {}

const OtpPage: React.FC<OtpPageProps> = () => {
  const [value, setValue] = useState("");
  const handleComplete = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <Center minH="67vh">
        <Box
          maxW="md"
          mt="23"
          mx="auto"
          p="10"
          bg={useColorModeValue("gray.50", "inherit")}
        >
          <Heading
            textAlign="center"
            fontSize="3xl"
            textTransform="uppercase"
            mb="10"
          >
            Enter Otp
          </Heading>
          <Card>
            <HStack>
              <PinInput
                otp
                value={value}
                onChange={(value: string) => setValue(value)}
                size="lg"
                autoFocus={true}
                type="number"
                variant="filled"
                onComplete={handleComplete}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Box
              color={useColorModeValue("blue.600", "blue.200")}
              fontWeight="semibold"
              fontSize="sm"
              mt="5"
            >
              <Link to="&">Resend Otp?</Link>
            </Box>
          </Card>
        </Box>
      </Center>
    </>
  );
};
export default OtpPage;
