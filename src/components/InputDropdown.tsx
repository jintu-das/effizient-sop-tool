import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./SopForm";

const options = [
  {
    label: "Grade 12",
    value: "grade12",
  },
  {
    label: "Diploma",
    value: "diploma",
  },
  {
    label: "Bachelor Degree",
    value: "bachelorDegree",
  },
  {
    label: "Masters Degree",
    value: "mastersDegree",
  },
  {
    label: "PhD",
    value: "phd",
  },
];

export default function InputDropdown({
  name,
  control,
  label,
  required,
}: FormInputProps) {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
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
      <FormControl size={"small"} variant="outlined">
        <Controller
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              onChange={onChange}
              value={value}
              variant="outlined"
              error={!!error}
            >
              <MenuItem value="" disabled>
                <em>Choose</em>
              </MenuItem>
              {generateSingleOptions()}
            </Select>
          )}
          control={control}
          name={name}
        />
      </FormControl>
    </Stack>
  );
}
