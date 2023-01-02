import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import styles from "../Forms.module.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import loginImage from "../../../assets/images/login.png";
import { Link } from "react-router-dom";
import instance from "../../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignUp = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("Please Enter your password")
      .min(8, "Password is too short - should be 8 chars minimum."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleRegister = async (values) => {
    setServerError("");

    try {
      const res = await instance.post("/users", {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phone,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
      });

      if (res.status === 201) {
        navigate({ pathname: "/login" });
      }
    } catch (e) {
      if (e.response.status === 422) {
        setServerError(e.response.data.errors[0].details);
      }
    }
  };

  return (
    <GridContainer className="main-grid">
      <GridItem gridSize={5} className="login-left fullSizeGridTablet">
        <h2 className={styles.main_paragraph}>
          Ready To <br /> <span>Join Us</span>
        </h2>
        <Formik
          initialValues={{
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={SignUp}
          onSubmit={handleRegister}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={styles.main_input}
              />
              {errors.email && touched.email ? (
                <div className={styles.form_validation}>{errors.email}</div>
              ) : null}
              <Field
                name="firstName"
                placeholder="First Name"
                className={styles.main_input}
              />
              {errors.firstName && touched.firstName ? (
                <div className={styles.form_validation}>{errors.firstName}</div>
              ) : null}
              <Field
                name="lastName"
                placeholder="Last Name"
                className={styles.main_input}
              />
              {errors.lastName && touched.lastName ? (
                <div className={styles.form_validation}>{errors.lastName}</div>
              ) : null}
              <Field
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className={styles.main_input}
              />
              {errors.phone && touched.phone ? (
                <div className={styles.form_validation}>{errors.phone}</div>
              ) : null}
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={styles.main_input}
              />
              {errors.password && touched.password ? (
                <div className={styles.form_validation}>{errors.password}</div>
              ) : null}
              <Field
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                className={styles.main_input}
              />
              {errors.passwordConfirmation && touched.passwordConfirmation ? (
                <div className={styles.form_validation}>
                  {errors.passwordConfirmation}
                </div>
              ) : null}
              {serverError && (
                <>
                  <br />
                  <div className={styles.form_validation}>{serverError}</div>
                </>
              )}
              <button type="submit" className={styles.form_button}>
                SignUp
              </button>
            </Form>
          )}
        </Formik>
        <p className={styles.form_link}>
          Already A User? <Link to="/login">Login</Link>
        </p>
      </GridItem>
      <GridItem
        gridSize={6}
        className={`${styles.form_image} fullSizeGridTablet`}
      >
        <img src={loginImage} alt="" className="img-fluid" />
      </GridItem>
    </GridContainer>
  );
};

export default Register;
