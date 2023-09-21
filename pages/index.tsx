import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from "next/link"
import ProductList from '@components/ProductList/ProductList';

export const getStaticProps = async () => {
    const response = await fetch('https://avocados-nextjs-two.vercel.app/api/avo/')
    const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    }
  }
}

export default function Home({ productList }: { productList: TProduct[] }) {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
 
  }, [])

  return (
    <div>
      <Head>
        <title>Avocados App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-3xl text-lime-400 pt-5'>Avocados</h1>
        <ProductList 
          productList={productList} 
          loading={loading}
        />
      </main>
    </div>
  )
}
