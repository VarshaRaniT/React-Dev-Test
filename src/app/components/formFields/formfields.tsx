import * as React from "react";
import { FormControl, TextField, FormControlLabel } from "@material-ui/core";
// import AutoSuggestSelect from "./AutoSuggestSelect";
import Switch from "@material-ui/core/Switch";
// import className from "classnames";

const createRenderer = (render: any) => ({
  input,
  meta,
  label,
  ...rest
}: any) => (
  <div
    className={[
      meta.error && meta.touched ? "" : "",
      meta.active ? "active" : ""
    ].join(" ")}
  >
    {render(input, label, rest, meta)}
    {meta.error && meta.touched && (
      <div
        className={
          rest.icon ? "form-text-error has-icon-error" : "form-text-error"
        }
      >
        {meta.error}{" "}
      </div>
    )}
  </div>
);

// const createSelectFieldRenderer = (render: any) => ({
//   input,
//   meta,
//   label,
//   value,
//   ...rest
// }: any) => {
//   return (
//     <React.Fragment>
//       {render(input, label, rest, meta)}
//       {meta.error && meta.touched && (
//         <span
//           className={
//             rest.icon
//               ? "form-text-error d-block has-icon-error"
//               : "form-text-error d-block"
//           }
//         >
//           {meta.error}
//         </span>
//       )}
//     </React.Fragment>
//   );
// };

export const kmInput = createRenderer(
  (input: any, label: string, rest: any, meta: any) => {
    let error = false;
    if (meta.error && meta.touched) {
      error = true;
    }
    return (
      <FormControl margin="normal" required fullWidth>
        <TextField
          error={error}
          variant="outlined"
          label={label}
          {...input}
          {...rest}
        />
      </FormControl>
    );
  }
);

export const kmInputNonOutlined = createRenderer(
  (input: any, label: string, rest: any, meta: any) => {
    let error = false;
    if (meta.error && meta.touched) {
      error = true;
    }
    return (
      <FormControl margin="normal" required fullWidth className="mt-1 mb-1">
        <TextField
          error={error}
          label={label}
          {...input}
          {...rest}
          InputProps={{
            className: "text-field-input"
          }}
          InputLabelProps={{
            className: "text-field-label"
          }}
        />
      </FormControl>
    );
  }
);

// export const TtAutoSuggestSelect = createSelectFieldRenderer(
//   (input: any, label: string, rest: any, meta: any) => {
//     return (
//       <React.Fragment>
//         <FormControl
//           className={"select-list mt-1 mb-1"}
//           style={{ width: "100%" }}
//         >
//           <AutoSuggestSelect
//             {...input}
//             value={rest.selectvalue}
//             onBlur={() => {}}
//             error={meta.error && meta.touched ? true : false}
//             {...rest}
//             label={label}
//           />
//         </FormControl>
//       </React.Fragment>
//     );
//   }
// );

export const TtHiddenField = createRenderer(
  (input: any, label: string, rest: any) => {
    return (
      <React.Fragment>
        <input type="hidden" label={label} {...input} {...rest} />
      </React.Fragment>
    );
  }
);

export const kmCheckboxField = createRenderer(
  (input: any, label: string, rest: any) => {
    return (
      <FormControlLabel
        control={<Switch {...input} {...rest} />}
        label={label}
        className="ml-0"
        labelPlacement="start"
      />
    );
  }
);
