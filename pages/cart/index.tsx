import Link from 'next/link';
import Image from 'next/image';
import styles from './Cart.module.css';
import { useCart, useCartMutations } from '@store/Cart'

export default function Cart() {
    const { items, count, subTotal } = useCart()
    const { removeFromCart } = useCartMutations()
    console.log(items);
      
    
    return (
        <section className={styles.mainContainer}>
        {items.length !== 0 ? (
          <>
            <h1 className={styles.title}>🥑 Shopping Cart 🥑</h1>
            <article>
              <table className={styles.contentTable}>
                <thead className=''>
                  <tr className='text-lg'>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price Unit.</th>
                    <th>Price Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.name}>
                      <td><Link href={`/product/${item.id}`}><Image src={item.image} alt={item.name} width={80} height={80} className='rounded-xl'/></Link></td>
                      <td><Link href={`/product/${item.id}`} className='font-bold text-lg text-lime-400'>{item.name}</Link></td>
                      <td>{item.quantity}</td>
                      <td>${item.price}</td>
                      <td>${(item.quantity * item.price).toFixed(2)}</td>
                      <td>
                        {/* <button
                          className={styles.action}
                          onClick={() => handleAdd(item.productName, 1)}
                        >
                          <img
                            className={styles.actionIcon}
                            src="/images/add.svg"
                            alt="add"
                          />
                        </button>
                         */}
                        <button
                          className={styles.action}
                          onClick={() => removeFromCart(item)}                        
                        >
                          <img
                            className={styles.actionIcon}
                            src="/images/remove.png"
                            alt="remove"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr
                    className='border-y border-slate-400'
                  >
                    <td className='text-xl font-medium'>Subtotal:</td>
                    <td className='font-bold text-lg'>${subTotal.toFixed(2)} ({count} items)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className=''>
              <button 
                type="button" 
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Checkout
              </button>

              </div>
            </article>
          </>
        ) : (<div className='bg-orange-200 text-orange-800 rounded-xl p-4 font-medium mt-8'>
              <h1 className={styles.title}>🥑 Your cart is empty 🥑</h1>
              <p className='text-lg mt-1'>You will need to add some items before you can checkout</p>
            </div>
        )}
      </section>
    )
}