import { Box, Button, Container, Input } from "@chakra-ui/react";
import { React, useState } from "react";
import Link from "next/link";
import { firebase, auth } from "../component/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function index() {

  return (
    <Container mt={220}>
      <Box fontSize={40}>
        Enter Your Mobile Number
        <Box fontSize={15}>We will send you the 4 digit verification code.</Box>
      </Box>
      <Box mt={10}>
        <Input
          placeholder="Enter your phone number"
          size="lg"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </Box>
      <Box mt={5}>
        <Link href="/code">
          <Button
            bgColor="#F56565"
            size="lg"
            width={200}
          >
            Send Code
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default index;
