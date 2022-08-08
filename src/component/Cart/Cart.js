import React from 'react'

import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
    const cartItem = (
        <ul className={styles['cart-item']}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart