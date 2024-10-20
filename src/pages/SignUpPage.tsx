import FormSignUp from '@/components/Fragments/FormSignUp';
import AuthLayout from '@/components/Layouts/AuthLayout';
import React from 'react'

const SignUpPage:React.FC = () => {
  return (
    <>
        <AuthLayout type='sign-up'>
            <FormSignUp />
        </AuthLayout>
    </>
  )
}

export default SignUpPage;