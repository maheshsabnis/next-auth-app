import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div className='container'>
       <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>
              <Link href="/home">Home</Link>
            </th>
          </tr>
        </thead>
       </table>
     </div>
  )
}
