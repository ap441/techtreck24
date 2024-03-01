import { useState } from 'react'
import './Navbar.css'
import { RiSearchLine, RiUserFill, RiHeartFill, RiShoppingCartFill, RiMenu3Fill, RiCloseFill } from 'react-icons/ri'


const Navbar = ({ cart }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);

  const toggleCart = () => {
    setCartOpened(!cartOpened);
  };
  return (
    <header>
      <nav>
        <div className='tn-container container'>
          <a href="" className="logo">Vastra Village</a>
          <div className="search-box">
            <input type="search" name="search" id="" placeholder='Search for Products...' />
            <div className="search-icon"><RiSearchLine/></div>
          </div>
          <div className="tn-icons">
            <a href=''><RiUserFill size={25}/></a>
            <a className="fav-icon" href=''><RiHeartFill size={25}/><span className='count'>0</span></a>
            <div className="cart-icon"></div>
            <a className="cart-icon" href='' onClick={toggleCart}><RiShoppingCartFill size={25}/><span className='count'>0</span></a>
          </div>
        </div>
        <hr />
        <div className="bn-container container">
          <ul className='navlist'>
            <li><a href='#home'>home</a></li>
            <li><a href='#categories'>categories</a></li>
            <li><a href='#shop'>shop</a></li>
            <li><a href='#deal'>deal</a></li>
            <li><a href='#testimonial'>testimonial</a></li>
            <li><a href='#blog'>blog</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
        </div>
        <div className="nm-nav">
          <div className="nm-container container">
            <a href="" className="logo">Speedwagon Foundation</a>
            <ul className='nav-menu' style={{ transform: menuOpened && "translate(0%)"}}>
            <li><a href='#home'>home</a></li>
            <li><a href='#categories'>categories</a></li>
            <li><a href='#shop'>shop</a></li>
            <li><a href='#deal'>deal</a></li>
            <li><a href='#testimonial'>testimonial</a></li>
            <li><a href='#blog'>blog</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
          <div className="menu-btn">
            {!menuOpened ? 
            <RiMenu3Fill size={30} onClick={() => setMenuOpened(true)}/> :
            <RiCloseFill size={30} onClick={() => setMenuOpened(false)}/>
            }
          </div>
          </div>
        </div>
      </nav>
      {cartOpened && (
        <div className="cart-menu">
          {cart.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name}</li>
                // Add other details as needed
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar