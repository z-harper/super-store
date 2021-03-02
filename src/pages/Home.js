import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'

const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'

const Home = () => {

  const [items, setItems] = useState([])

  const getItems = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setItems(products.items)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='container overflow-hidden'>
      <h1>Home Page</h1>
      <ItemList items={items} />
    </div>
  )
}

export default Home
