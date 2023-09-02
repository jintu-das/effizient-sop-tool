import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../data/sop-schema";
import InputDropdown from "./InputDropdown";
import FormInputText from "./InputText";
import InputRadio from "./InputRadio";
import { enqueueSnackbar } from "notistack";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@mui/lab";

type FormValues = {
  email: string;
  fullName: string;
  age: number;
  education: string;
  institute: string;
  study: string;
  experience: string;
  canadaInstitute: string;
  canadaStudy: string;
  country: string;
  listening: string;
  reading: string;
  goals: string;
  speaking: string;
  writing: string;
  firstYearTution: string;
  tutionFee: string;
  gic: string;
  gicAmount: string;
};

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  otherDetail?: React.ReactNode;
  options?: {
    label: string;
    value: string;
  }[];
}

export default function SopForm() {
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      age: 20,
      fullName: "",
      institute: "",
      education: "",
      experience: "",
      canadaInstitute: "",
      canadaStudy: "",
      country: "",
      goals: "",
      listening: "",
      reading: "",
      speaking: "",
      writing: "",
      firstYearTution: "",
      tutionFee: "",
      gic: "",
      gicAmount: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: "Effizient",
          to_name: data.fullName,
          reply_to: "jintudas047@gmail.com",
          to_mail: data.email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      enqueueSnackbar("Email send successfully! Please check your inbox.");
    } catch (error) {
      console.log(data);
      enqueueSnackbar("Email not send! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack gap={4} py={2} justifyContent="flex-start" alignItems="flex-start">
      <FormInputText
        name="email"
        control={control}
        required
        label="Email"
        placeholder="Your Email"
      />

      <FormInputText
        name="fullName"
        control={control}
        required
        label="Fulll Name"
        placeholder="Your answer"
      />

      <FormInputText
        name="age"
        control={control}
        type="number"
        required
        label="Age"
        placeholder="Your answer"
      />

      <InputDropdown
        name="education"
        required
        control={control}
        label="Highest Level of Education"
      />

      <FormInputText
        name="institute"
        control={control}
        required
        label="Institute where you completed your highest level of education"
        placeholder="Your answer"
      />

      <FormInputText
        name="study"
        control={control}
        required
        label="What did you study"
        placeholder="Your answer"
      />

      <FormInputText
        name="experience"
        control={control}
        required
        label="Do you have any relevant work experience?"
        placeholder="Your answer"
        otherDetail={
          <Stack gap={1}>
            <Typography variant="body2">
              Write None if no work experience. Provide the following details if
              yes:
            </Typography>
            <Typography variant="body2" pl={4}>
              1. Job Title <br /> 2. Company Name <br /> 3.Job duties
            </Typography>
            <Typography variant="body2">
              Sample Answer: I worked as a Sales Manager at Effizient
              Immigration Inc from Jan 2022 till Feb 2023. In this role, I
              managed sales operations, reaching out to leads, lead the outreach
              program, ensured meeting monthly targets.
            </Typography>
          </Stack>
        }
      />

      <FormInputText
        name="canadaInstitute"
        control={control}
        required
        label="What institute did you get admitted to in Canada?"
        placeholder="Your answer"
      />

      <FormInputText
        name="canadaStudy"
        control={control}
        required
        label="What is your program of study in Canada?"
        placeholder="Your answer"
      />

      <FormInputText
        name="country"
        control={control}
        required
        label="Which country are you applying from?"
        placeholder="Your answer"
      />

      <FormInputText
        name="goals"
        control={control}
        required
        label="What are your future goals?"
        placeholder="Your answer"
      />

      <FormInputText
        name="listening"
        control={control}
        required
        label="English Scores - Listening"
        placeholder="Your answer"
      />

      <FormInputText
        name="reading"
        control={control}
        required
        label="English Scores - Reading"
        placeholder="Your answer"
      />

      <FormInputText
        name="speaking"
        control={control}
        required
        label="English Scores - Speaking"
        placeholder="Your answer"
      />

      <FormInputText
        name="writing"
        control={control}
        required
        label="English Scores - Writing"
        placeholder="Your answer"
      />

      <InputRadio
        name="firstYearTution"
        control={control}
        label="Did you pay your first year tuition?"
        options={[
          {
            label: "Yes",
            value: "yes",
          },
          {
            label: "No",
            value: "no",
          },
        ]}
      />

      <FormInputText
        name="tutionFee"
        control={control}
        required
        label="How much tuition fee did you pay?"
        placeholder="Your answer"
      />

      <InputRadio
        name="gic"
        control={control}
        label="Did you do a GIC?"
        options={[
          {
            label: "Yes",
            value: "yes",
          },
          {
            label: "No",
            value: "no",
          },
        ]}
      />

      <FormInputText
        name="gicAmount"
        control={control}
        required
        label="How much did you pay towards GIC?"
        placeholder="Your answer"
      />

      <Stack direction="row" gap={2} alignItems="center" pt={2}>
        <LoadingButton
          loading={loading}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
        >
          Submit
        </LoadingButton>
        <Button onClick={() => reset()}>Clear Form</Button>
      </Stack>
    </Stack>
  );
}
