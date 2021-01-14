import { Formik } from "formik";
import React from "react";

export default function InputForm({
  children,
  validationSchema,
  initialValues,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <> {children} </>}
    </Formik>
  );
}
