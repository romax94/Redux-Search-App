import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import Sidebar from './Sidebar';
import List from './List';
import { fetchData } from '../actions/index';

class APP extends Component {
    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }
    render() {
        return (
            <div className="app_wrapper">
                <SearchBar />
                <section className="app_toolBar_wrapper">
                    <ToolBar />
                </section>
                <section className="app_content">
                    <Sidebar />
                    <List />
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {
            dispatch(fetchData(url))
        }
    }
};

export default connect(null, mapDispatchToProps)(APP);