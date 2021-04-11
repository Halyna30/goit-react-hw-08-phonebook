import React from 'react';
import { connect } from 'react-redux';
import operations from '../Redux/contacts/operations';
import { getFilter } from '../Redux/contacts/contacts-selectors';
import { changeFilter } from '../Redux/contacts/actions';
import FormContacts from '../components/FormContacts';
import Filter from '../components/Filter';
import ListContacts from '../components/ListContacts';

const Contacts = ({ filter, onAddContact, onChangeFilter }) => {
  return (
    <>
      <h2 className="title">Add contact</h2>
      <FormContacts onSubmit={onAddContact} />

      <h2 className="title">Contacts list</h2>
      <Filter value={filter} onChange={onChangeFilter} />

      <ListContacts />
    </>
  );
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(operations.addContact(contact)),
  onChangeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
