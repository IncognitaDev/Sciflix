import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles';

function FormField({ value, name, type, onChange }) {
  const fieldId = `${name}`;
  const isTextarea = type === 'textarea';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={isTextarea ? type : `input`}
          id={fieldId}
          type={type}
          value={value}
          onChange={onChange}
        />
      </Label>
      <Label.Text>{name}</Label.Text>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  onChange: () => {},
  value: '',
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormField;
