import React, { Component } from 'react';
import '../../css/users.scss';

class Users extends Component {
  render() {
    return (
      <ul className="users">
        {this.props.data.users.map((dataUser, index) => {
          return (
            <li key={index}>
              {dataUser.name}
            </li>
          )
        })
        }
      </ul>
    )
  }
}

export default Users