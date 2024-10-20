import FormForgotPassword from '@/components/Fragments/FormForgotPassword';
import AuthLayout from '@/components/Layouts/AuthLayout';
import React from 'react'

const ForgotPasswordPage:React.FC = () => {
  return (
    <>
        <AuthLayout type='forgot-password'>
            <FormForgotPassword />
        </AuthLayout>
    </>
  )
}

export default ForgotPasswordPage;