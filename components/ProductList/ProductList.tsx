import ProductCard from "@components/ProductCard/ProductCard"

type ProductListPros = {
    productList: TProduct[]
}

export default function ProductList({ productList, loading }) {
    return (
        !loading ? 
            <ul className='mt-4 flex flex-wrap justify-center gap-4 px-5 min-h-[1100px]'>
            {productList.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
  
          </ul> : <div className='mt-4 min-h-[1100px]'>Loading...</div>
    
    )
}