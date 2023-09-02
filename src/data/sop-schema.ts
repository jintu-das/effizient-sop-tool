import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Not a valid email")
      .required("This is a required question"),
      fullName: yup.string().required("This is a required question"),
      age: yup.number().required().positive().integer().required("This is a required question"),
      education: yup.string().required("This is a required question"),
      institute: yup.string().required("This is a required question"),
      study: yup.string().required("This is a required question"), 
      experience:  yup.string().required("This is a required question"),
      canadaInstitute:  yup.string().required("This is a required question"),
      canadaStudy: yup.string().required("This is a required question"),
      country: yup.string().required("This is a required question"),
      listening: yup.string().required("This is a required question"),
      reading: yup.string().required("This is a required question"),
      speaking: yup.string().required("This is a required question"),
      writing: yup.string().required("This is a required question"),
      goals: yup.string().required("This is a required question"),
      firstYearTution: yup.string().required("This is a required question"), 
      tutionFee: yup.string().required("This is a required question"), 
      gic: yup.string().required("This is a required question"), 
      gicAmount: yup.string().required("This is a required question"), 
  })
  .required();


