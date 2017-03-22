import React, { Component } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import './App.css';

export default class APP extends Component {
    render() {
        return (
            <div className="app_wrapper">
                <SearchBar />
                <section className="app_content">
                    <aside className="app_sidebar">
                    </aside>
                    <main className="app_list">
                        <List />
                    </main>
                </section>
            </div>
        )
    }
}
