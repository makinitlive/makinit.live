import tw from "twin.macro"
import { jsx, css, keyframes } from '@emotion/react'
import { Seo } from './../components/'
import Link from 'next/link'

const spin = keyframes`
  0% {
    transform: scale(2.1) rotate(0deg)
  }

  100% {
    transform: scale(2.1) rotate(360deg)
  }
`

const ErrorPage = () => (
  <>
    <Seo
        title="Streaming experiments in design and code – makinit.live"
        description="Streaming experiments in design and code"
      />
    <div tw="h-screen relative overflow-hidden flex justify-center items-center background-image[radial-gradient(100.69% 260.8% at 100.69% 0%, #32C5FF 0%, #B620E0 50.52%, #F7B500 100%)]">
      <div tw="relative z-50 text-white text-center">
        <div tw="space-y-4 mb-8">
          <h1 tw="text-9xl font-bold font-display">404</h1>
          <h2 tw="text-2xl">The page was not found</h2>
        </div>
        
        <Link href="/">
          <a tw="cursor-pointer inline-block text-xl px-8 py-4 bg-white border-white bg-opacity-10 text-white font-bold rounded-xl backdrop-blur-3xl bg-blend-overlay shadow-lg transition hover:(bg-opacity-20)">← Home</a>
        </Link>
      </div>
      <div
        tw="absolute z-0 inset-0 transform origin-center background-image[radial-gradient(100.69% 260.8% at 100.69% 0%, #32C5FF 0%, #B620E0 50.52%, #F7B500 100%)]"
        css={css`
          animation: ${spin} 100s ease infinite;
        `}/>
    </div>
  </>
)

export default ErrorPage
