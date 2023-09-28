import React, { useContext, useState } from 'react'
import { useCartMutations, useCart } from '@store/Cart'
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

  return error
}
const AddToCart = ({ product }: AddToCartProps) => {
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  // const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()
  const { items, itemsById } = useCart();
  

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
        try {
          addToCart(product, quantity)
          setQuantity(quantity)
          console.log(product);
          console.log(itemsById);
          console.log(items);
        } catch (err) {
            setError(`Error: ${err}` || 'Something went wrong')
            console.log(error);
            
      }
    }

          // setLoading(false)
          // setVisible(true)
          // toggleMessage()
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

    
    return (
      <div className={styles.form}>
        <input
          className={styles.quantityInput}
          value={quantity}
          onChange={handleChange}
          min={1}
          max={99}
          type="number"
        />
        <button onClick={handleSubmit} className={styles.formBtn}>
          Add to Cart
        </button>
      </div>
    )
}

export default AddToCart;