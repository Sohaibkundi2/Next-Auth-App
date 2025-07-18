import { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm'; // Move form logic into a child component

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}