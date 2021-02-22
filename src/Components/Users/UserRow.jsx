import React from 'react';
const dateFormat = require('dateformat');
export default function UserRow({users}) {

  return (
    <tr>
        <td>{users.firstName}</td>
        <td>{users.email}</td>
        <td></td>
        <td>
           {users.regDate}
        </td>
        
        <td>
              <button class="btn btn-success btn-sm mr-1">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
        </td>

    </tr>
  );
}
