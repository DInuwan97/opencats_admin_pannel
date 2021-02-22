import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios';

import UserList from './UserList';


const $ = require('jquery');
$.DataTable = require('datatables.net');


export default class UserFunctions extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList:[]
        }
    }

    componentDidMount(){

        setTimeout(()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/api/users'
        })
        .then((res)=>{
            this.setState({
                userList:res.data
            })
            console.log(this.state.userList)
        })
    },100)

    }


 


    render() {
        return (
           <UserList users={this.state.userList} /> 
        )
    }
}
