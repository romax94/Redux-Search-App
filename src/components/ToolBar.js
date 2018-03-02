import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToolBar extends Component {
    sortByName() {
        this.props.onSortById();
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
        onSortById: () => {
            dispatch({
                type: 'SORT_BY_ID'
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(ToolBar);
