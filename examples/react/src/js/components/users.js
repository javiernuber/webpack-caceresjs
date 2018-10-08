import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.data.users.map((dataUser) => {
          return (
            <li>
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