import { useState, useEffect } from 'react'

const url = 'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'

const formatCurrency = (price) => {
  let priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  return priceFormatted
}


const Home = () => {

  const [items, setItems] = useState([])

  const getItems = async () => {
    const response = await fetch(url)
    const items = await response.json()
    setItems(items.items)
  }

  useEffect(() => {
    getItems()
  }, [])


  const starRating = (rating) => {
    const maxStarRating = 5
    let itemStarRating = []
    let starKey = 0

    let fullStars = Math.floor(rating)
    let halfStars = Math.ceil(rating - fullStars)
    let emptyStars = Math.floor(maxStarRating - rating)

    while (fullStars > 0) {
      itemStarRating.push(<i className="fas fa-star" key={starKey++}></i>)
      fullStars--
    }

    while (halfStars > 0) {
      itemStarRating.push(<i className="fas fa-star-half-alt" key={starKey++}></i>)
      halfStars--
    }

    while (emptyStars > 0) {
      itemStarRating.push(<i className="far fa-star" key={starKey++}></i>)
      emptyStars--
    }

    return itemStarRating
  }


  return (
    <div className='container overflow-hidden'>
      <h1>Home Page</h1>

      <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-4'>
        {items.map(item => {
          // should be able to put into item grid component 
          return (
            <div key={item._id}>
              <div className='col'>
                <div className='card border-0'>
                  <img src={item.imageUrl} className='card-img-top' width='100%' height='185px' />
                  <div className='card-body pt-0 px-0'>
                    <p className='mt-3 font-weight-bold'>{item.name}</p>
                    <hr className='mt-2' />
                    <div className='d-flex flex-row justify-content-between mb-2 px-2'>
                      <h6 className='text-muted'>{formatCurrency(item.price)}</h6>
                      {item.isOnSale && <small className='p-1 font-weight-bold item-on-sale'>On Sale</small>}
                    </div>
                    <div className='d-flex flex-row justify-content-between px-2 pb-3'>
                      <p>{starRating(item.avgRating)}</p>
                      {/* <button type='button' className='mb-0 quick-add-btn'><small>Quick Add</small></button> */}
                    </div>
                    <div className='mt-1 mb-2'>
                      <button type='button' className='btn btn-block view-item-btn'>
                        <small>View Item</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          // end of item grid component???
        })}
      </div>

    </div>
  )
}

export default Home
