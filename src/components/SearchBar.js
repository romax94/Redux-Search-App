import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    searchList() {
        this.props.onSearchList(this.searchInput.value);
    }
    render() {
        return (
            <div className="app_searchBar_wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    ref={input => this.searchInput = input}
                    className="app_searchBar_input"
                    onChange={this.searchList.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchList: (name) => {
            dispatch({
                type: 'FILTER',
                payload: name
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
