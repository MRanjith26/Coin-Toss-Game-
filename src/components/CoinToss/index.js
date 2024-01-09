// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {Total: 0, Head: 0, Tail: 0, isHeads: true}

  onResultChange = () => {
    this.setState(prevState => ({Total: prevState.Total + 1}))
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({isHeads: prevState.isHeads}))
      this.setState(prevState => ({Head: prevState.Head + 1}))
      console.log('Heads')
    } else {
      this.setState(prevState => ({isHeads: !prevState.isHeads}))
      this.setState(prevState => ({Tail: prevState.Tail + 1}))
      console.log('Tails')
    }
  }

  render() {
    const {Total, Head, Tail, isHeads} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="content-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="para">Heads (or) Tails</p>
            {isHeads ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="img"
              />
            )}
            <button
              className="button"
              type="button"
              onClick={this.onResultChange}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count">Total: {Total}</p>
              <p className="count">Heads: {Head}</p>
              <p className="count">Tails: {Tail}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
