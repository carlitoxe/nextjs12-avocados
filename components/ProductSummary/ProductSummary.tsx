import AddToCart from "@components/AddToCart/AddToCart";

type ProductSummaryProps = {
    product: TProduct
  }
  

const ProductSummary = ({ product }: ProductSummaryProps) => {
    return (
        <>
                 <section className="flex justify-center pt-8 px-4 ">
            <div className="container-image flex justify-center w-fit">
                <img className="w-[300px] rounded-lg" src={product.image} alt={product.name} />  
            </div>
            <div className="flex flex-col justify-center ml-2 md:ml-4">
                <p className="text-2xl font-medium text-left">{product.name}</p>
                <p className="text-left mt-2 text-lime-500 text-lg font-medium">{product.price}</p>
                <label className="text-left bg-neutral-300 w-fit rounded-lg px-2 text-amber-700 text-sm mt-2">SKU: {product.sku}</label>
                <AddToCart product={product} />
            </div>
            
        
        </section>
        <div className="px-4 md:px-14 pb-12">
        <p className="mt-8 text-xl font-medium text-center">About this avocado</p>
        <p className="text-left mt-2 md:px-20">{product.attributes?.description}</p>

        <table className="border border-neutral-400 mt-8 mx-auto border-separate border-spacing-0 rounded-lg w-[300px]">
            <thead>
                <tr>
                    <th colSpan={2} className="p-2 bg-lime-700 rounded-t-lg border-b border-neutral-300">
                        Attributes
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td className="border-b border-r border-neutral-400 p-2">Shape</td>
                    <td className="border-b border-neutral-400 p-2">{product.attributes?.shape}</td>
                </tr>
                <tr>
                    <td className="border-b border-r border-neutral-400 p-2">Hardiness</td>
                    <td className="border-b border-neutral-400 p-2">{product.attributes?.hardiness}</td>
                </tr>
                <tr>
                    <td className="border-r border-neutral-400 p-2">Taste</td>
                    <td className="border-neutral-400 p-2">{product.attributes?.taste}</td>
                </tr>
            </tbody>    
        </table> 

    </div>
        </>
    )
}

export default ProductSummary;