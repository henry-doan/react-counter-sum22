import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { countValue: 0 }
  // this.inc = this.inc.bind(this)
  // }

  state = { countValue: 0 }

  inc = () => {
    this.setState({ countValue: this.state.countValue + 1})
  }

  dec = () => {
    this.setState({ countValue: this.state.countValue - 1})
  }

  render() {
    return(
      <>
        <h1>Counter Example</h1>
        <p>{this.state.countValue}</p>
        {this.props.color}
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }
}

export default App;