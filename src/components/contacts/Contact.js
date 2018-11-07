import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';


class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3">
              <h4>
              {/*  use 'this' keyword because it's going to refer to a method that's in this class. */}
              {name}
              <i className="fas fa-sort-down" onClick={()=>this.setState({ showContactInfo: !this.state.showContactInfo })} style={{cursor:'pointer'}}/>
              <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor: 'pointer', color: 'red', float:'right'}}></i>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
              </ul>): null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
}

export default Contact;
