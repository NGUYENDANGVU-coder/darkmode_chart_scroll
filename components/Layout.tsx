import Head from 'next/head'
import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}:any) {
  return (
    <div>
      <>
          <Head>
            <title>Nextjs-Dev Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="min-h-screen mx-auto">
            <Header />
            <main className="">
              {children}
            </main>
            <Footer />
          </div>
        </>
    </div>
  )
}
