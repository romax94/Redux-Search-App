import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        fetch('./data.json', {method: 'GET'}).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });
    }
    render() {
        return (
            <main className="app_list">
                <ul>
                    {this.props.store.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state.list.filter(item => item.name.includes(state.filter))
    }
};

export default connect(mapStateToProps)(List);
