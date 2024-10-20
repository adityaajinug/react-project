import FormSignIn from '@/components/Fragments/FormSignIn';
import AuthLayout from '@/components/Layouts/AuthLayout';
import React from 'react'

const SignInPage:React.FC = () => {
  return (
    <>
        <AuthLayout type='sign-in'>
            <FormSignIn />
        </AuthLayout>
    </>
  )
}

export default SignInPage;