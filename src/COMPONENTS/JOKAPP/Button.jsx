import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  return <button onClick={props.callApi}>Click to generate a joke.</button>;
};

Button.propTypes = {
  callApi: PropTypes.func.isRequired,
};

export default Button;
