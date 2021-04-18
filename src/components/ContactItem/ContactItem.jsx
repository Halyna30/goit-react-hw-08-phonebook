import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ContactItem = ({ contact, onDelete }) => {
  const { id, number, name } = contact;

  const handleDelete = id => onDelete(id);

  return (
    <li key={id} id={id} className="contact">
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        className="btn"
        onClick={() => handleDelete(id)}
        variant="contained"
        color="primary"
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
