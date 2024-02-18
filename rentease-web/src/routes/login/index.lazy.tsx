import { createLazyFileRoute } from "@tanstack/react-router";
import AuthLayout from "../../components/layout/auth-layout";
import LoginPage from "../../components/common/pages/login-page";

export const Route = createLazyFileRoute("/login/")({
  component: Login,
});

function Login() {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
}
