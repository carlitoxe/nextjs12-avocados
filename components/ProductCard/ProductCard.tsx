import Link from "next/link"
import Image from "next/image"

export default function ProductCard({product}) {
  
    return (
        <li key={product.id} className='border border-gray-500 rounded-lg pb-2 hover:shadow-md hover:shadow-zinc-600 hover:-translate-y-1 duration-200'>
        <Link href={`/product/${product.id}`}>
          <div className="rounded-t-lg overflow-hidden">
            <Image src={product.image} alt={product.name} width={300} height={300} />

          </div>
          {/* <img src={product.image} className='w-[300px] rounded-t-lg' alt={product.name}/> */}
          <p className='mt-3 font-medium text-lg leading-5'>{product.name}</p>
          <div className='text-lime-400'>{product.price}</div>
        </Link>
      </li>
    )
}