import {  TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({
  type,
  // placeholder,
  // name,
  // className,
  value,
  onChange,
  variant,
  children,
  label,
  // textLabel,
}) => {
  return (
    <div>
      
      <TextField
         variant={ variant}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        fullWidth
      />
      {children}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.node,
  name: PropTypes.node,
  variant: PropTypes.node,
  label: PropTypes.node,
  value: PropTypes.node,
};


export default Input;
