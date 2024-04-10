// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}
  onClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }
  render() {
    const {isDarkMode} = this.state
    const buttonText = isDarkMode ? 'Light mode' : 'Dark Mode'
    const cardMode = isDarkMode ? 'dark-mode' : 'light-mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${cardMode}`}>
          <h1 className="header">Click To Change Mode</h1>
          <button className="button" onClick={this.onClickBtn}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
