import { useEffect } from 'react';
import { connect } from 'react-redux';
import operations from '../../Redux/operations';
import ContactItem from '../ContactItem';
import { getVisibleContacts } from '../../Redux/contacts-selectors';
import PropTypes from 'prop-types';

const ListContacts = ({ contacts, onDelete, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className="container list">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
  onDelete: id => dispatch(operations.deleteContact(id)),
});

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);
