import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

 class UserHeader extends Component {
     componentDidMount(){
         this.props.fetchUser();
     }
    render() {
        return (
            <div>
                User Header
            </div>
        )
    }
}

export default connect(null,{fetchUser}) (UserHeader);