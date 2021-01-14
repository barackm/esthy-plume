import React from "react";
import ErrorMessage from "./ErrorMessage";
import { FormGroup, Input } from "reactstrap";
import { useFormikContext } from "formik";

export default function InputField({ name, label, type, rest }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <div>
      <FormGroup>
        <label>{label}</label>
        <Input
          {...rest}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          type={type}
        />
      </FormGroup>
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </div>
  );
}
