import TodoCard from "./TodoCard";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="main">
      {todos.map((todo, i) => {
        return (
          <li className="todoItem" key={i}>
            <TodoCard
              handleDelete={() => handleDelete(i)}
              handleEdit={() => handleEdit(i)}
            >
              <p>{todo}</p>
            </TodoCard>
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TodoList;
