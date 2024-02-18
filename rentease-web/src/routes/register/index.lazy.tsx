import { createLazyFileRoute } from "@tanstack/react-router";
import AuthLayout from "../../components/layout/auth-layout";

export const Route = createLazyFileRoute("/register/")({
  component: Register,
});

function Register() {
  return (
    <AuthLayout>
      <h1>Register</h1>
    </AuthLayout>
  );
}
