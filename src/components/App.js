import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import Sidebar from './Sidebar';
import List from './List';
import '../App.css';

export default class APP extends Component {
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
