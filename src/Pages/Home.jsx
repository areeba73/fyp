import React from 'react'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import ScanMethods from '../Component/emodetect'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <ScanMethods />
        <Footer />

    </div>
  )
}

export default Home