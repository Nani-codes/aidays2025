import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const RegisterButton = () => {
  return (
    <Link href="/register">
      <Button className="background-animate
        text-md
         rounded
         bg-gradient-to-r
         from-blue-500
         via-indigo-500
         to-blue-500
         px-10
         py-5
      font-bold uppercase text-white subpixel-antialiased ">Register</Button>
    </Link>
  )
}

export default RegisterButton