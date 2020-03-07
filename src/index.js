import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Index extends React.Component {
	componentDidMount() {
		document.querySelector("#text-input").focus();
	}

	constructor(props) {
		super(props);
		this.state = {
			array: [],
			newItem: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	handleChange(e) {
		this.setState({ newItem: e.target.value });
	}

	handleClick() {
		if(this.state.newItem) {
			var newItemObject = {
				id: 1 + Math.random(),
				value: this.state.newItem
			}
			var arrayCopy = [...this.state.array];
			arrayCopy.push(newItemObject);
			this.setState({ 
				array: arrayCopy,
				newItem: ""
			});
			document.querySelector("#text-input").focus();
		}
	}

	deleteItem(id) {
		var arrayCopy = [...this.state.array];
		var updatedArray = arrayCopy.filter(item => item.id !== id)
		this.setState({ array: updatedArray });
	}

	render() {
		return <App array={this.state.array} onChange={this.handleChange} onClick={this.handleClick} newItem={this.state.newItem} deleteItem={this.deleteItem}/>
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
