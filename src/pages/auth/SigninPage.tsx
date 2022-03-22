import Navbar from "components/common/navbar/Navbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";
import {
  EmailInput,
  PasswordInput,
  SigninButton,
  SigninForm,
  SigninSection,
} from "./SigninPage.styled";

interface ILoginFormData {
  email: string;
  password: string;
}

const SigninPage = () => {

 


  return (
    <>
      <Navbar />
      <SigninSection>
        <SigninForm>
          <EmailInput type="email" name="email"/>
          <PasswordInput
            type="password"
            name="password"
      
          />
          <SigninButton >
            Sign In
          </SigninButton>
        </SigninForm>
      </SigninSection>
    </>
  );
};

export default SigninPage;
