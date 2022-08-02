import './SignupPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import SignupForm from '../../components/SignupForm/SignupForm';

export default function SignUpPage() {
    return (
        <>
            <Header />
            <main className='signUpPage'>
                <SignupForm />
            </main>
        </>
    );
}