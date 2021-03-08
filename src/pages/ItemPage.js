import { useState, useEffect } from 'react'
import StarRating from '../components/StarRating'

const formatCurrency = (price) => {
  let priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  return priceFormatted
}

const ItemPage = (props) => {

  let url = `https://gp-super-store-api.herokuapp.com/item/${props.match.params.id}`

  const [item, setItem] = useState({})

  const getItem = async () => {
    const response = await fetch(url)
    const product = await response.json()
    console.log(product)
    setItem(product)
  }

  useEffect(() => {
    getItem()
  }, [])

  const [quantitySelected, setQuantitySelected] = useState(0);
  const minQuantity = 0;
  const maxQuantity = item.stockCount;


  const handleQuantity = (val) => {
    switch (val) {
      case 'addOne':
        if (quantitySelected < maxQuantity) {
          setQuantitySelected(quantitySelected + 1)
        }
        break;
      case 'subOne':
        if (quantitySelected > minQuantity) {
          setQuantitySelected(quantitySelected - 1)
        }
        break;
    }
  }


  return (
    <div className='container'>
      <h1>{item.name}</h1>
      <div className='row m-0 item-page-display'>
        <div className='col-12 col-md-6 col-lg-8 py-0'>
          <img src={item.imageUrl} className='img-fluid' />
          <div className='d-flex flex-row justify-content-around mt-2 mb-3'>
            <div>
              <h4>{formatCurrency(item.price)}</h4>
              {item.isOnSale && <small className='p-1 font-weight-bold item-on-sale'>On Sale</small>}
            </div>
            <StarRating rating={item.avgRating} />
          </div>
          <p className='px-2'>{item.description}</p>
        </div>
        <div className='col-12 col-md-6 col-lg-4 py-0 d-flex align-items-center'>
          <div className='w-100'>
            <div className='my-2 d-flex align-items-center justify-content-between'>
              <span className='pr-2'>Total Cost:</span>
              <span className='pr-2'>{formatCurrency(quantitySelected * item.price)}</span>
            </div>
            <hr />
            <div className='my-2 d-flex align-items-center justify-content-between'>
              <span className='pr-2'>Quantity Available: {maxQuantity}</span>
              <div className='my-2 d-flex align-items-center justify-content-around'>
                <button className='stock-btn' onClick={() => handleQuantity('subOne')}>-</button>
                <span className='px-2 fs-1'>{quantitySelected}</span>
                <button className='stock-btn' onClick={() => handleQuantity('addOne')}>+</button>
              </div>
            </div>
            <button type='button' className='add-to-cart'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemPage
