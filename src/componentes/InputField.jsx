import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function InputField({ value, fieldName, setValue }) {
  return (
      <TextField
        id="outlined-basic"
        type="text"
        label={fieldName}
        name={fieldName}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        required
        variant="standard"
      />
  );
}

InputField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
