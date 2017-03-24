import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import List from './List';
import '../App.css';

export default class APP extends Component {
    render() {
        return (
            <div className="app_wrapper">
                <SearchBar />
                <section className="app_content">
                    <Sidebar />
                    <List />
                </section>
            </div>
        )
    }
}
