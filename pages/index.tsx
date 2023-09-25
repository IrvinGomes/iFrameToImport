import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1>Main Page</h1>
        <iframe src="https://iframetobeimported.netlify.app/iframe" width="400" height="300" title="Embedded Page"></iframe>
      </div>
    </main>
  )
}
