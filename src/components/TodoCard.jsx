import PropTypes from "prop-types";

const TodoCard = ({ children, handleDelete, handleEdit }) => {
  return (
    <>
      {children}
      <div className="actionsContainer">
        <button onClick={handleEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={handleDelete}>
          <i
            className="fa-regular fa-trash-can"
            style={{ color: "#d91212" }}
          ></i>
        </button>
      </div>
    </>
  );
};

TodoCard.propTypes = {
  children: PropTypes.node.isRequired,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default TodoCard;
