import React, { useState } from "react";

import FormStyles from "./Form.styles.js";

import { Input, Button, Fieldset, LoadingIndicator } from "../";

export default function Form(props) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(
    Object.fromEntries(
      props.fields
        .filter(
          (fieldToFilter) =>
            fieldToFilter.checked === true || fieldToFilter.type !== "checkbox"
        )
        .map((field) => {
          if (field.fieldset) {
            return field.fields.flatMap((fieldsetField) => [
              fieldsetField.name,
              fieldsetField.type === "radio" ? null : fieldsetField.value,
            ]);
          } else {
            return [field.name, field.type === "radio" ? null : field.value];
          }
        })
    )
  );
  const [errors, setErrors] = useState(
    Object.fromEntries(
      props.fields.map((field) => {
        if (field.fieldset) {
          return field.fields.flatMap((fieldsetField) => [
            fieldsetField.name,
            null,
          ]);
        } else {
          return [field.name, null];
        }
      })
    )
  );
  function handleChange(e) {
    const { type, name, checked, value } = e.target;
    const newValues = Object.assign({}, values);
    if (type === "checkbox" && !checked) {
      delete newValues[name];
    } else {
      newValues[name] = value;
    }
    setValues(newValues);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // set random errors for testing
    setTimeout(() => {
      setLoading(false);
      setErrors(
        Object.fromEntries(
          props.fields.map((field) => {
            if (field.fieldset) {
              return field.fields.flatMap((fieldsetField) => [
                fieldsetField.name,
                Math.random() > 0.5 ? "error" : null,
              ]);
            } else {
              return [field.name, Math.random() > 0.5 ? "error" : null];
            }
          })
          )
          );
        }, 2000);
  }
  return (
    <FormStyles onSubmit={handleSubmit}>
      <div className={loading ? "form__loader" : "form__loader form__loader--hidden"}><LoadingIndicator /></div>
      {(props.title || props.description) && (
        <header className="form__header">
          {props.title && <h2 className="form__heading">{props.title}</h2>}
          {props.description && (
            <p className="form__description">{props.description}</p>
          )}
        </header>
      )}
      {props.fields.map((field) => {
        if (field.fieldset) {
          return (
            <Fieldset
              key={field.legend}
              {...field}
              errors={errors}
              values={values}
              handleChange={handleChange}
            />
          );
        } else {
          return (
            <Input
              key={field.label}
              label={field.label}
              name={field.name}
              type={field.type}
              value={
                field.type === "radio" || field.type === "checkbox"
                  ? field.value
                  : values[field.name]
              }
              onChange={handleChange}
              error={errors[field.name]}
              placeholder={field.placeholder}
            />
          );
        }
      })}
      <Button text={"SUBMIT"} onClick={handleSubmit} />
    </FormStyles>
  );
}
