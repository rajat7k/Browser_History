import React, { Component } from 'react'
import './index.css'
export default class HistoryList extends Component {
    render() {

        const item = this.props.item;
        const deleteItem = this.props.onclick;
        // console.log(this.props)
        // console.log(deleteItem)
        return (
            < div className="single-history-item" >
                <p className='item-time'>{item.timeAccessed}</p>
                <div className="item-main-container">
                    <div >
                        <img className="item-logo" src={item.logoUrl} alt="" />
                    </div>
                    <div className="item-name">
                        <p className='item-description'> <span className='item-heading' >{item.title} </span> {item.domainUrl}</p>
                    </div>
                </div>
                <button onClick={deleteItem} className='item-delete-icon' > <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="" /> </button>
            </div>
        )
    }
}
