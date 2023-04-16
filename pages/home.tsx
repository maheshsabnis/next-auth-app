import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
const HomePage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading"
  return (
    <div className='container'>
      {!session && (
            <>
              <span>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {
            session?.user && (
              <div>
                <h4>The Home Page</h4>
              </div>
            )
          }
    </div>
  )
}

export default HomePage
