import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./SopForm";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const InputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options,
  required,
}) => {
  const generateRadioOptions = () => {
    return options?.map((singleOption, index: number) => (
      <FormControlLabel
        key={index}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Stack gap={1}>
      <Typography>
        {label}{" "}
        {required && (
          <Typography component="span" color="error">
            *
          </Typography>
        )}
      </Typography>
      <FormControl component="fieldset">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <RadioGroup value={value} onChange={onChange}>
                {generateRadioOptions()}
              </RadioGroup>{" "}
              {!!error && (
                <Typography
                  variant="caption"
                  color="error.main"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <ErrorOutlineOutlinedIcon fontSize="small" /> {error?.message}
                </Typography>
              )}
            </>
          )}
        />
      </FormControl>
    </Stack>
  );
};

export default InputRadio;
