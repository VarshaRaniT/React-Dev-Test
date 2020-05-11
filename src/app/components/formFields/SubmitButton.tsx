import * as React from "react";

import { FieldProps } from "./../../models/FieldModel";
import { CircularProgress, Button } from "@material-ui/core";

export interface SubmitButtonProps extends FieldProps {
  submitting: boolean;
  variant?: any;
  fullWidth?: boolean;
}

export interface SubmitButtonState {}

class SubmitButton extends React.Component<
  SubmitButtonProps,
  SubmitButtonState
> {
  render() {
    let { submitting, label, ...rest } = this.props;
    if (label == undefined) {
      label = "Save";
    }

    return (
      <Button type="submit" color="primary" disabled={submitting} {...rest}>
        {label}
        {submitting ? <CircularProgress size={18} color="inherit" /> : " "}
      </Button>
    );
  }
}

export default SubmitButton;
