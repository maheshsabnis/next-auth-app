import { useSession, signIn, signOut } from "next-auth/react"

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from "next/router"

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button className="btn btn-warning" onClick={() => {
            signOut();
            router.push("/loggedout");
        }}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-warning" onClick={() => signIn()}>Sign in</button>
    </>
  )
}