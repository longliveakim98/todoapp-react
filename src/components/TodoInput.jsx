import PropTypes, { string } from "prop-types";

const TodoInput = ({ handleAddToDo, input, setInput }) => {
  const handleSubmit = () => {
    if (input) {
      handleAddToDo(input);
    }
    setInput("");
  };
  return (
    <header>
      <input
        placeholder="What you're going to do"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button onClick={handleSubmit}>+</button>
    </header>
  );
};

TodoInput.propTypes = {
  handleAddToDo: PropTypes.func.isRequired,
  input: string,
  setInput: PropTypes.func.isRequired,
};

export default TodoInput;
