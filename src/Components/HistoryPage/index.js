import React, { Component } from 'react'
import EmptyPage from '../EmptyPage';
import HistoryList from '../HistoryItem';
import SearchBar from '../SearchBar';
import './index.css'

export default class HistoryPage extends Component {

    state = {
        listToShow: this.props.historyList,
        historyList: this.props.historyList
    };

    deleteItem = (id) => {
        this.setState({ listToShow: this.state.listToShow.filter((obj) => obj.id !== id) });
        this.setState({historyList:this.state.listToShow});
    }

    handleInput = (value) => {
        const newList = this.state.historyList;
        this.setState({
            listToShow: newList.filter(obj => {
                return obj.title.toLowerCase().includes(value.toLowerCase());
            })
        });
    }

    render() {
        return (
            <div className="main-container">

                <SearchBar handleInput={this.handleInput} />
                {this.state.listToShow.length===0
                ?<EmptyPage />
                :<div className="history-list-container">{this.state.listToShow.map((item) => (
                        <HistoryList onclick={() => this.deleteItem(item.id)} item={item} />
                    ))}</div>}

            </div>
        )
    }
}
