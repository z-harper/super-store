import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

const formatCurrency = (price) => {
  let priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  return priceFormatted
}

const ItemList = ({ items }) => {

  return (
    <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-4'>
      {items.map(item => {
        return (
          <div key={item._id}>
            <div className='col'>
              <div className='card border-0'>
                <img src={item.imageUrl} className='card-img-top' width='100%' height='185px' />
                <div className='card-body pt-0 px-0'>
                  <p className='mt-3 font-weight-bold'>
                    <Link className='item-title' to={`/item/${item._id}`}>
                      {item.name}
                    </Link>
                  </p>
                  <hr className='mt-2' />
                  <div className='d-flex flex-row justify-content-between mb-2 px-2'>
                    <h6 className='text-muted'>{formatCurrency(item.price)}</h6>
                    {item.isOnSale && <small className='p-1 font-weight-bold item-on-sale'>On Sale</small>}
                  </div>
                  <div className='d-flex flex-row justify-content-between px-2 pb-3'>
                    <StarRating rating={item.avgRating} />
                  </div>
                  <div className='mt-2 mb-1'>
                    <button
                      type='button'
                      className='btn btn-block'
                      onClick={(e) => console.log(item.name)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ItemList.defaultProps = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isOnSale: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired
  })
}

export default ItemList
