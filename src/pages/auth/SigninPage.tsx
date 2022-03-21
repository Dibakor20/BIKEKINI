import Navbar from 'components/common/navbar/Navbar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/actionCreator/AuthActionCreator';
import { AppState } from 'redux/store';
import { EmailInput, PasswordInput, SigninButton, SigninForm, SigninSection } from './SigninPage.styled';

interface ILoginFormData{
    email: string,
    password:string
}

const SigninPage = () => {
    const [formData, setFormData] = useState<ILoginFormData>({
        email: '',
        password:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const data = useSelector((state: AppState) => state.auth)
    console.log(data)
    const dispatch = useDispatch()
    
    return (
        <>
            <Navbar/>
            <SigninSection>
                <SigninForm>
                    <EmailInput type='email' name='email' onChange={handleChange} />
                    <PasswordInput type='password' name='password' onChange={handleChange} />
                    <SigninButton onClick={()=>dispatch(login(formData))}>Sign In</SigninButton>
                </SigninForm>
            </SigninSection>
        </>
    );
};

export default SigninPage;