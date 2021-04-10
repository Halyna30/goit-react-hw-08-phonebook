import React from 'react';
import { connect } from 'react-redux';
import operations from './Redux/operations';
import { getFilter } from './Redux/contacts-selectors';
import { changeFilter } from './Redux/actions';
import FormContacts from './components/FormContacts/FormContacts';
import Filter from './components/Filter/Filter';
import ListContacts from './components/ListContacts/ListContacts';

const App = ({ filter, onAddContact, onChangeFilter }) => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <FormContacts onSubmit={onAddContact} />

      <h2 className="title">Contacts</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
