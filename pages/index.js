import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <p className="text-3xl">Welcome to Nextjs</p>
    </Layout>
  )
}
