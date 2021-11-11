import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
      
		}
  
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

 
	render() {
		const { number, size } = this.state
    const target = document.getElementById('số lượng');
    
		return (
			<div>
				<form onSubmit={this.submitHandler}>
          <select name="number" id="category" value={number} onChange={this.changeHandler} >
             <option value="default">Số Lượng:</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="100">10</option>
         </select>

         <select name="size" id="size" value={size} onChange={this.changeHandler} >
            <option value="default">Size</option>
            <option value="S">S</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
            <option value="3XL">3XL</option>
        
         </select>

         <button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}



export default PostForm