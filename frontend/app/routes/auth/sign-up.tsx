import React from 'react'
import { signupSchema } from '@/lib/schema'
import {useForm } from 'react-hook-form'
import type { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {  Form, FormControl, FormItem, FormLabel, FormField, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

type SignUpFormData = z.infer<typeof signupSchema>

export const SignUp = () => {
    const form = useForm<SignUpFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            confirmPassword: ""
        }
    })

    const handleOnSubmit = (values: SignUpFormData) => {
        console.log(values)
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4"
    >
        <Card className="max-w-md w-full shadow-xl">
            <CardHeader className="text-center mb-5">
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                     Create an account to continue 
                     </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4">

                        {/* name field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2" type="text" placeholder="Jane Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* email field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2" type="email" placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* password field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2" type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* confirm password field */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2" type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>

                    </form>
                </Form>

                <CardFooter className="flex items-center justify-center mt-3">
                    <div className="flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link to="/sign-in" className="text-sm text-blue-500 hover:underline ml-auto">Sign in</Link>
                        </p>
                    </div>
                </CardFooter>

            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp