import React, { Component } from 'react'
import  UserRow from './UserRow';
import axios from 'axios';
const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList:[
                //{"_id":"602cd3e6334d442c307f3c5f","firstName":"DInuwan","lastName":"Kalubowila","email":"dinuwan@gmail.com","password":"$2a$10$xK1e2lIIQTRQBdsx9yxoQ.nDMEqdTgvyS9DnGlam7fmLyJhUzcOHq","userType":"Client","regDate":"1613550566841","__v":0},
                //{"_id":"602cd3e6334d442c307f3c5f","firstName":"DInuwan","lastName":"Kalubowila","email":"dinuwan@gmail.com","password":"$2a$10$xK1e2lIIQTRQBdsx9yxoQ.nDMEqdTgvyS9DnGlam7fmLyJhUzcOHq","userType":"Client","regDate":"1613550566841","__v":0}
            ]

      
        }



    }

    componentDidMount(){
        setTimeout(()=>{
            $('#userlist-table').DataTable()
        },100)
     }

  


   



    render() {
        return (
            <div className="col">
                
    <div className="card card-info">
        <div className="card-header">
            <h3 className="card-title">Current Courses</h3>
        </div>

            <div className="card-body">

                <table id="userlist-table" className="table table-bordered table-striped">             
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Registerd date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    

        
                        {(this.props.users).map((userDetails) =>(
                            <UserRow users={userDetails}/>
                        ))}
               
           

                    </tbody>
                </table>
</div>

</div>




        </div>
        )
    }
}
