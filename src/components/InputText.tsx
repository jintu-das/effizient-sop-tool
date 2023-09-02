import { Controller } from "react-hook-form";
import { FormInputProps } from "./SopForm";
import { Typography, Stack, TextField } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default function FormInputText({
  name,
  control,
  label,
  type = "text",
  placeholder,
  required = false,
  otherDetail,
}: FormInputProps) {
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
      {otherDetail}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type={type}
            helperText={
              error ? (
                <Typography
                  variant="caption"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <ErrorOutlineOutlinedIcon fontSize="small" />
                  {error.message}
                </Typography>
              ) : null
            }
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            variant="standard"
            sx={{
              minWidth: 400,
            }}
          />
        )}
      />
    </Stack>
  );
}
