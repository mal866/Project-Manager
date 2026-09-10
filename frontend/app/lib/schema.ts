import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(100, "Password must not exceed 100 characters"),
})
