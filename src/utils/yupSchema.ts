import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Invalid username!")
    .min(2, "Too short!")
    .max(32, "username Too Long!"),

  email: yup.string().email("Invalid Type").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
