import { useEffect, useContext } from 'react'
import { API_KEY, API_URL } from '../config'

import { ShopContext } from '../Context/context'

import Alert from './Alert'
import BasketList from './BasketList'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloader from './Preloader'

const Shop = () => {
    const { loading, order, isBasketShow, alertName, setGoods } = useContext(
        ShopContext
    );

    useEffect(() => {
        if (localStorage.getItem('orders')) {
            order.push(...JSON.parse(localStorage.getItem('orders')))
        }
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => setGoods(data.shop))
            .catch(error => alert(error))
            // eslint-disable-next-line
    }, [])

    return (
        <main className='container content'>
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow && <BasketList />}
        {alertName && <Alert />}
    </main>
    )
}

export default Shop
