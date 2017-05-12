import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToolBar extends Component {
    sortByName() {
        this.props.onSortByName();
    }
    render() {
        return(
            <div className="app_sortByName" onClick={this.sortByName.bind(this)}>
                Sort By Name
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSortByName: () => {
            dispatch({
                type: 'SORT',
                payload: {
                    name: 'roma'
                }
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(ToolBar);
