import Link from "next/link"

export default function ProductCard({product}) {
    return (
        <li key={product.id} className='border border-gray-500 rounded-lg pb-2'>
        <Link href={`/product/${product.id}`}>
          <img src={product.image} className='w-[300px] rounded-t-lg' alt={product.name}/>
          <p className='mt-3 font-medium text-lg leading-5'>{product.name}</p>
          <div className='text-lime-400'>{product.price}</div>
        </Link>
      </li>
    )
}