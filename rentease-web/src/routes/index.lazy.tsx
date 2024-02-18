import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </div>
  );
}
