import { Fragment } from 'react'

import styles from './Header.module.css'

import foodImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food Order</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={foodImage} alt='A table full of delicius food!' />
            </div>
        </Fragment>
    )
}

export default Header