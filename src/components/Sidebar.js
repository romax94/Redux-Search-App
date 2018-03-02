import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderActiveUser: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.user !== nextProps.user) {
            this.setState({
                renderActiveUser: true
            });
        }
    }
    
    renderActiveUser() {
        return (
            <p>{this.props.user.name}</p>
        )
    }

    render() {
        console.log(this.props.user)
        return (
            <aside className="app_sidebar">
                {this.state.renderActiveUser ? this.renderActiveUser() : 'nAn'}
            </aside>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.reducer.users[0]
    }
}

export default connect(mapStateToProps)(Sidebar);