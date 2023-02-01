import React, { Component } from 'react'
import './index.css'

export default class SearchBar extends Component {
    
    inputChangeHandler=(event)=>{
        console.log(event.target.value)
        this.props.handleInput(event.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <div className="search-bar-logo"> <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png " alt="history-icon" /> </div>
                <div className="search-input-container">
                    <div className="search-icon"> <img src="https://assets.ccbp.in/frontend/react-js/search-img.png " alt="search-icon" /> </div>

                    <input onChange={this.inputChangeHandler} className='search-bar-input' type="text" placeholder='Search History' />

                </div>
            </div>
        )
    }
}
