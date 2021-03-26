import React from "react";
import { useFormikContext } from "formik";
import { FormGroup, Label, Input } from "reactstrap";
import ErrorMessage from "./ErrorMessage";

export default function SelectInputField({
  categories,
  name,
  label,
  placeholder,
  className,
  rest,
}) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <div>
      <FormGroup>
        <Label for="exampleSelect">{label}</Label>
        <Input
          {...rest}
          type="select"
          onBlur={() => setFieldTouched(name)}
          name={name}
          id="exampleSelect"
          onChange={handleChange(name)}
          placeholder={placeholder}
          className={className}
        >
          <option>{placeholder}</option>
          {categories.map((category, index) => (
            <option value={category._id} key={index}>
              {category.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </div>
  );
}
