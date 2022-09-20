import {
  Box,
  Button,
  Container,
  Input,
  PinInput,
  PinInputField,
  HStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Link1 from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function code() {
  return (
    <Container mt={220}>
      <Link1 href="/">
        <ChevronLeftIcon boxSize={10} mr={10} />
      </Link1>
      <Box fontSize={40} mt={5}>
        OTP Verification
        <Box fontSize={15}>
          Enter the verification code we just sent on your Mobile Number
        </Box>
      </Box>
      <Box mt={10}>
        <HStack spacing={5}>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Box>
      <Box mt={5}>
        <Link1 href="/discover">
          <Button bgColor="#F56565" size="lg" width={220}>
            Verify
          </Button>
        </Link1>
      </Box>
      <Box mt={5} fontSize={15}>
        Didn't recieved code?
        <HStack>
          <Link>Resend</Link>
        </HStack>
      </Box>
    </Container>
  );
}

export default code;
