import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <h2>Bye</h2>
      <h2>:D</h2>
    </div>
  )
}
