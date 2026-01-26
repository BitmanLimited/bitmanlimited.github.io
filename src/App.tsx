import { Mail } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center border-y-[20px] border-black bg-white">
      <div className="text-center p-[30px]">
        <h1 className="text-[50pt] leading-tight font-bold text-black m-0">
          Bitman Limited
        </h1>
        <p className="text-[20pt] leading-[31pt] text-black mt-2">
          Software Development and Consulting
        </p>
        <a href="mailto:bitmanlimited@gmail.com" className="inline-block mt-6 text-black hover:opacity-70">
          <Mail size={28} strokeWidth={1.5} />
        </a>
      </div>
    </main>
  )
}
