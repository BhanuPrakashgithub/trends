// Write your JS code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <div className="back">
            <h1 className="head1">Clothes That Get YOU Noticed</h1>
            <p className="para1">Fashion is part of the daily air </p>
            <button className="but" type="button">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="image"
            />
          </div>
        </div>
      </>
    )
  }
}
export default Home
