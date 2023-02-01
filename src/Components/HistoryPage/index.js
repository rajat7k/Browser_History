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
    }

    handleInput = (value) => {
        const newList = this.state.historyList;
        this.setState({
            listToShow: newList.filter(obj => {
                return obj.title.includes(value);
            })
        });
    }

    render() {
        return (
            <div className="main-container">

                <SearchBar handleInput={this.handleInput} />

                <div className="history-list-container">

                    {this.state.listToShow.length > 0 && this.state.listToShow.map((item) => (

                        <HistoryList onclick={() => this.deleteItem(item.id)} item={item} />
                    ))
                    }
                </div>
                {this.state.listToShow.length === 0 && <EmptyPage />
                }
            </div>
        )
    }
}
