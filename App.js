import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  
}

// const Slider = (props) => {
//     return (
//         <input type="range" min="0" max="255" onChange={props.autobind}/>
//     )
// };

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input type="range" ref="inp" min="0" max="255" onChange={this.props.autobind}/>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
// const App = () => <h1> Manchester United will win tonight!</h1>

export default App