import { useState } from "react"
import { GetStaticProps } from 'next'
import ProductSummary from "@components/ProductSummary/ProductSummary"

export const getStaticPaths = async () => {
    const response = await fetch('https://avocados-nextjs-two.vercel.app/api/avo/')
    const { data: productList }: TAPIAvoResponse = await response.json();

    const paths = productList.map(({id}) => ({ params: { id } })) 

    return {
        paths,
        // incremental static generation
        // 404 for everything else
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const response = await fetch(`https://avocados-nextjs-two.vercel.app/api/avo/${id}`) 
    const { data: product }: { data: TProduct } = await response.json();

  return {
    props: {
      product,
    }
  }
}

export default function ProductPage({ product }: { product: TProduct }) {
    // const [, setProduct] = useState('');
    const [loading, setLoading] = useState(false);
    
    // const {
    //     query: {id}
    // } = useRouter()

    // useEffect(() => {
    //     setLoading(true);
    //     if (id) {
    //         fetch(`../api/avo/${id}`)
    //         .then((response) => response.json())
    //         .then(( avo ) => {
    //           setProduct(avo)
    //         })
    //         .catch(err => console.error(err))
    //         .finally(() => setLoading(false))
    //     }
    // }, [id])

    return (
        <ProductSummary product={product} />
    )
}