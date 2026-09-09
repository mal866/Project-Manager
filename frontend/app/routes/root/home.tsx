import React from 'react'
import type { Route } from "../../+types/root";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Manager" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Link to="/sign-in">
            <Button className="bg-blue-500 text-white">Login</Button>
        </Link>
        <Link to="/sign-up">
            <Button variant="outline" className="bg-blue-500 text-white">Sign Up</Button>
        </Link>
    </div>
  )
}
export default HomePage