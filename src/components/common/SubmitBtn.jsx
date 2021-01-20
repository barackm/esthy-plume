import { useFormikContext } from "formik";
import React from "react";
import { Button } from "reactstrap";

export default function SubmitBtn({ label, className }) {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="update ml-auto mr-auto">
      <Button
        className={className ? className : `btn-round`}
        color="primary"
        onClick={handleSubmit}
      >
        {label}
      </Button>
    </div>
  );
}
