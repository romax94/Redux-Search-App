import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        return (
            <main className="app_list">
                <ul>
                    {this.props.users.map(item =>
                        <li className="app_list_item" key={item.id}>
                            <span className="app_item_id">{item.id}</span>
                            <span>{item.name}</span>
                        </li>
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

export default connect(mapStateToProps)(List);
