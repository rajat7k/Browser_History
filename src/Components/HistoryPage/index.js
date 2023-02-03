import React, { Component } from 'react'
import EmptyPage from '../EmptyPage';
import HistoryList from '../HistoryItem';
import SearchBar from '../SearchBar';
import './index.css'

export default class HistoryPage extends Component {

    constructor(props){
        super(props)
        this.listToShow= this.props.historyList
        this.state = {
            historyList: this.props.historyList
        }
    }


    deleteItem = (id) => {
        this.listToShow=this.state.historyList.filter((obj) => obj.id !== id)
        this.setState({historyList:this.listToShow});
        console.log(id,this.listToShow,"<<<<delete>>>>")
    }

    handleInput = (value) => {

        console.log(value,this.listToShow,"<<<<handle input>>>>")
        const newList = this.listToShow;
        const currentUpdatedList=newList.filter(obj => {
            return obj.title.toLowerCase().includes(value.toLowerCase());
        })
        this.setState({historyList: currentUpdatedList});
    }

    render() {
        console.log(this.state.historyList,"render")
        return (
            <div className="main-container">

                <SearchBar handleInput={this.handleInput} />
                {this.state.historyList.length===0
                ?<EmptyPage />
                :<div className="history-list-container">{this.state.historyList.map((item) => (
                        <HistoryList onclick={() => this.deleteItem(item.id)} item={item} />
                    ))}</div>}

            </div>
        )
    }
}
