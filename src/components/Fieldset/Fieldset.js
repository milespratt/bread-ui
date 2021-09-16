import React from "react";

import FieldsetStyles from "./Fieldset.styles";
import { Input } from "../";

export default function Fieldset({
  fields,
  legend,
  values,
  handleChange,
  errors,
}) {
  return (
    <FieldsetStyles>
      <legend className="fieldset__legend">{legend}</legend>
      {fields.map((field) => {
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
      })}
    </FieldsetStyles>
  );
}
