import { NavLink } from 'react-router-dom'

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

const NavigationBar = () => {

  return (
    <nav className='navbar navbar-expand-sm'>
      <div className='container'>
        <NavLink className='navbar-brand' exact to='/'>Super Store</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'><i className='fa fa-bars fa-lg hamburger' aria-hidden="true"></i></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {navbarLinks.map(linkObj => {
              return (
                <li className='nav-item' key={linkObj.name}>
                  <NavLink
                    className={'nav-link'}
                    exact to={linkObj.link}
                    activeStyle={{
                      fontWeight: 'bold',
                      color: '#f35f1c'
                    }}
                  >
                    {linkObj.name}
                  </NavLink>
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