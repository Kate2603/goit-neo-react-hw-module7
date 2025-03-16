import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
