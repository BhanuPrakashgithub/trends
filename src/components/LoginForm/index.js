// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', active: false, error: ''}

  user = event => this.setState({username: event.target.value})

  pass = event => {
    this.setState({password: event.target.value})
  }

  submitvalue = async event => {
    event.preventDefault()
    const {user, pass} = this.state
    const userdetails = {user, pass}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({active: true, error: response.error_msg})
    }
  }

  render() {
    const {username, password, active, error} = this.state
    return (
      <div className="megastar">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="file2"
          />
        </div>
        <form className="powerstar" onSubmit={this.submitvalue}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="image5"
          />
          <label htmlFor="root1">USERNAME</label>
          <input
            type="text"
            id="root1"
            value={username}
            placeholder="Username"
            onChange={this.user}
          />
          <label htmlFor="root2">PASSWORD</label>
          <input
            type="password"
            id="root2"
            value={password}
            placeholder="Password"
            onChange={this.pass}
          />
          <button className="but" type="submit">
            Login
          </button>
        </form>
        {active && <p>*{error}</p>}
      </div>
    )
  }
}
export default LoginForm
