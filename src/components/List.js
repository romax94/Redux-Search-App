import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.state.users = data;
                this.setState(this.state)
            })
    }
    render() {
        console.log(this.state)
        return (
            <main className="app_list">
                <ul>
                    {this.state.users.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.list.filter(item => item.name.includes(state.filter))
    }
};

export default connect(mapStateToProps)(List);
