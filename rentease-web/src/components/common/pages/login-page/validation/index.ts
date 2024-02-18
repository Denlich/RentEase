import { z } from "zod";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "Specify username" })
    .min(3, "Username must have at least 3 characters")
    .max(30, "Username must be at most 30 characters"),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});
