import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must not exceed 50 characters"),
})

export const signupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must not exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must not exceed 50 characters"),
    confirmPassword: z.string().min(8, "Password must be 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
})