import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../ui/button";
import Input from "../../ui/input";
import Typography from "../../ui/typography";

import { validationSchema } from "./validation";
import AuthAPI from "../../../../lib/api/auth/AuthAPI";
import getErrorMessage from "../../../../lib/utils/getErrorMessage";

import styles from "./LoginPage.module.css";

import { LoginFormFields } from "./types";

const LoginPage = () => {
  const [isSent, setIsSent] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSent(true);
      await AuthAPI.login(data);
    } catch (error) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
  });

  return (
    <div className={styles.stack}>
      <form className={styles.stack} onSubmit={onSubmit}>
        <Input
          placeholder="Type username"
          label="Username"
          errorMessage={errors.username?.message}
          {...register("username")}
        />
        <Input
          placeholder="Password"
          label="Password"
          type="password"
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" disabled={isSent}>
          Login
        </Button>
      </form>
      <Typography>
        Don't have an account? <Link to="/register">Register here</Link>
      </Typography>
      {errors.root?.message && (
        <Typography color="error">{errors.root.message}</Typography>
      )}
    </div>
  );
};

export default LoginPage;
