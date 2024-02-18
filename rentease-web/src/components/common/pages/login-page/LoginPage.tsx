import { Link } from "@tanstack/react-router";
import Button from "../../ui/button";
import Input from "../../ui/input";
import styles from "./LoginPage.module.css";
import Typography from "../../ui/typography";

const LoginPage = () => {
  return (
    <div className={styles.stack}>
      <form>
        <Input placeholder="Type username" name="username" label="Username" />
        <Input
          placeholder="Password"
          name="password"
          label="Password"
          type="password"
        />
        <Button>Login</Button>
      </form>
      <Typography>
        Don't have an account? <Link to="/register">Register here</Link>
      </Typography>
    </div>
  );
};

export default LoginPage;
