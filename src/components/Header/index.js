// Write your JS code here
import {Component} from 'react'
import './index.css'
import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="fast">
        <div className="firm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="image1"
          />
        </div>
        <ul className="slow">
          <li className="lists">
            <Link to="/">
              <p className="paras">Home</p>
            </Link>
          </li>
          <li className="lists">
            <Link to="/products">
              <p className="paras">Products</p>
            </Link>
          </li>
          <li className="lists">
            <Link to="/cart">
              <p className="paras">Cart</p>
            </Link>
          </li>
          <li className="lists">
            <Link to="/logout">
              <button className="but">Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
export default withRouter(Header)
