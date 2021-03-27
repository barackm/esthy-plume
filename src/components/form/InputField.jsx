import React from "react";
import ErrorMessage from "./ErrorMessage";
import { FormGroup, Input } from "reactstrap";
import { useFormikContext } from "formik";
import { useEffect } from "react";

export default function InputField({
  name,
  label,
  type,
  placeholder,
  className,
  rest,
  fieldValue = "",
}) {
  const {
    handleChange,
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();
  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line
      if (fieldValue.trim().length > 0) {
        setFieldValue(name, fieldValue, true);
      } else {
        // eslint-disable-next-line
        setFieldValue(name, "", true);
      }
    });
  });
  return (
    <div>
      <FormGroup>
        <label>{label}</label>
        <Input
          {...rest}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          type={type}
          placeholder={placeholder}
          className={className}
          value={values[name]}
        />
      </FormGroup>
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </div>
  );
}
