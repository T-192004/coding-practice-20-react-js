// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  startTimer = () => {
    const {sec} = this.state
    let count = sec
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({sec: prevState.sec + 1}))
      count += 1
      console.log(count)
      if (count === 59) {
        this.setState(prevState => ({min: prevState.min + 1, sec: 0}))
      }
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({sec: 0, min: 0})
  }

  render() {
    const {min, sec} = this.state
    const stringfiedMin = min > 9 ? min : `0${min}`
    const stringfiedSec = sec > 9 ? sec : `0${sec}`
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="card-title">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="stopwatch-header">
              <img
                className="stopwatch-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="stopwatch-label">Timer</p>
            </div>
            <h1 className="stopwatch-timer">
              {stringfiedMin}:{stringfiedSec}
            </h1>
            <div className="stopwatch-btn-container">
              <button
                className="start-btn btn"
                type="button"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                className="stop-btn btn"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="reset-btn btn"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
          alt="Corner"
          className="corner-image"
        />
      </div>
    )
  }
}

export default Stopwatch
