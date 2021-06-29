import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';
import {motion} from "framer-motion"

class Contacts extends Component {

  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props; 
    return (
      <React.Fragment>
              <motion.h1
        style={{  color: '#e1ebfd'}}
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1.0 }}
        whileHover={{ scale: 1.1 }}>
          Contact List
        </motion.h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});


export default connect(mapStateToProps, {getContacts})(Contacts);
