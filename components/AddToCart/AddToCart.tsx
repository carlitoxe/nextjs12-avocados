import React, { useState } from 'react'
import { useCartMutations } from '@store/Cart'
import styles from './AddToCart.module.css'

type AddToCartProps = {
  product: TProduct
}
// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"
  if (quantity > 100) error = 'Too many avocados'
  return error
}
const AddToCart = ({ product }: AddToCartProps) => {
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  // const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()
  

  // const toggleMessage = () => {
  //   setTimeout(() => {
  //     setVisible(false)
  //   }, 1000)
  // }

  const handleSubmit = () => {
    // e.preventDefault()
    const error = validate(quantity)
    setError(error)
      // setLoading(true)
      if (!error) {
          addToCart(product, quantity)
          setQuantity(quantity)
      }
      setError(`Error: ${error}` || 'Something went wrong')
      console.error(error);
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

    
    return (
      <div className={styles.form}>
            <input 
              type="number" 
              className="max-w-[70px] max-h-[35px] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="1" 
              value={quantity} 
              onChange={handleChange} 
              min={1} 
              max={100} 
            />

            {/* <input
          className={styles.quantityInput}
          value={quantity}
          onChange={handleChange}
          min={1}
          max={99}
          type="number"
        /> */}
      <button 
        onClick={handleSubmit} 
        type="button" 
        className="focus:outline-none text-white bg-green-100 hover:bg-green-800 font-medium rounded-lg text-base px-5 py-1.5 ml-1 dark:bg-green-700 dark:hover:bg-green-800 "
      >
        Add To Cart
      </button>

      </div>
    )
}

export default AddToCart;