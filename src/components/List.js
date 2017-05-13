import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class List extends Component {
    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }
    render() {
        return (
            <main className="app_list">
                <ul>
                    {this.props.users.map(item =>
                        <li className="app_list_item" key={item.id}>{item.name}</li>
                    )}
                </ul>
            </main>
        )
    }
}

List.PropTypes = {
    fetchData: PropTypes.func.isRequered
}

const mapStateToProps = state => {
    return {
        users: state.reducer.users.filter(item => item.name.toLowerCase().includes(state.reducer.filterText.toLowerCase()))
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {
            dispatch(fetchData(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
