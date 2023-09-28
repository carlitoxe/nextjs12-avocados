import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Link from 'next/link';
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
                <thead>
                  <tr className='text-xl md:text-xl'>
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
                      <td><Link href={`/product/${item.id}`}><img src={`${item.image}`} alt="" className='max-w-[80px] rounded-xl'/>  </Link></td>
                      <td><Link href={`/product/${item.id}`} className='font-bold text-lg text-lime-400'>{item.name}</Link></td>
                      <td>{item.quantity}</td>
                      <td>{item.price} $</td>
                      <td>{(item.quantity * item.price).toFixed(2)} $</td>
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
                    
                  >
                    <td className='text-xl font-medium'>Total</td>
                    <td></td>
                    <td>{count}</td>
                    <td></td>
                    <td>{subTotal.toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

            </article>
          </>
        ) : (<div className='bg-orange-200 text-orange-800 rounded-xl p-4 font-medium'>
              <h1 className={styles.title}>🥑 Your cart is empty 🥑</h1>
              <p className='text-lg mt-1'>You will need to add some items before you can checkout</p>
            </div>
        )}
      </section>
    )
}