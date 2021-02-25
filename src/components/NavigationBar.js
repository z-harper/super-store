import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {

  // navbar linknames and paths
  const navbarLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Deals',
      link: '/deals'
    },
    {
      name: 'Cart',
      link: '/cart'
    }
  ]
  // add active class to current button
  const [active, setActive] = useState('')


  return (
    <nav className='navbar navbar-expand-sm'>
      <div className='container'>
        <Link className='navbar-brand' to='/' onClick={() => setActive('Home')}>Super Store</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'><i className='fa fa-bars fa-lg hamburger' aria-hidden="true"></i></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {navbarLinks.map(linkObj => {
              return (
                <li className='nav-item' key={linkObj.name}>
                  <Link
                    className={active === linkObj.name ? 'nav-link active' : 'nav-link'}
                    to={linkObj.link}
                    onClick={() => setActive(linkObj.name)}
                  >
                    {linkObj.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar