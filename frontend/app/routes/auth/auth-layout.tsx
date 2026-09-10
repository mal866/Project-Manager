import React from 'react'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Outlet />
    </div>
  )
}
