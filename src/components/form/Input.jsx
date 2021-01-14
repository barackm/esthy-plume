import React from "react";
import { FormGroup, Input } from "reactstrap";
export default function Input() {
  return (
    <FormGroup>
      <label>Mot de pass</label>
      <Input defaultValue="" placeholder="" type="password" />
    </FormGroup>
  );
}
