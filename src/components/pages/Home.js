import { useState, useEffect } from 'react'

const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'

const Home = () => {

  // const [items, setItems] = useState([])

  // const getItems = async () => {
  //   const response = await fetch(url)
  //   const items = await response.json()
  //   console.log(items)
  //   setItems(items)
  // }

  // useEffect(() => {
  //   getItems()
  // }, [])

  return (
    <div className='container'>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
