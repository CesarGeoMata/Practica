import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout';


export default function index() {
  return (
    <Layout>index
      
        <Image
            src="/img/214-536x354.jpg"
            height={400}
            width={400}
            alt="mi imagen de perfil"
        ></Image>



      <button>
          <Link href="/">
          <a>Inicio</a>
          </Link>
      </button>
    </Layout>
    
  )
}
