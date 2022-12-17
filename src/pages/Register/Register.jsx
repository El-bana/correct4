import GridContainer from '../../components/grid/GridContainer'
import GridItem from '../../components/grid/GridItem'
import styles from '../Login/Login.module.css'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import loginImage from '../../assets/images/login.png'

const Register = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const SignUp = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: Yup
      .string()
      .required('Please Enter your password')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  return (
    <GridContainer className='main-grid'>
      <GridItem gridSize={5} className='login-left fullSizeGridTablet'>
        <h2 className={styles.main_paragraph}>Ready To <br /> <span>Join Us</span></h2>
        <Formik
          initialValues={{
            email: '',
            phone: '',
            password: '',
          }}
          validationSchema={SignUp}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors, touched }) => (
            <Form className={styles.login_form}>
              <Field name="email" type='email' placeholder='Email' className='main-input' />
              {errors.email && touched.email ? (
                <div className='form-validation'>{errors.email}</div>
              ) : null}
              <Field name="firstName" placeholder='First Name' className='main-input' />
              {errors.firstName && touched.firstName ? (
                <div className='form-validation'>{errors.firstName}</div>
              ) : null}
              <Field name="lastName" placeholder='Last Name' className='main-input' />
              {errors.lastName && touched.lastName ? (
                <div className='form-validation'>{errors.lastName}</div>
              ) : null}
              <Field name="phone" type='tel' placeholder='Phone Number' className='main-input' />
              {errors.phone && touched.phone ? (
                <div className='form-validation'>{errors.phone}</div>
              ) : null}
              <Field name="password" type="password" placeholder='Password' className='main-input' />
              {errors.password && touched.password ? <div className='form-validation'>{errors.password}</div> : null}
              <Field name="passwordConfirmation" type="password" placeholder='Confirm Password' className='main-input' />
              {errors.passwordConfirmation && touched.passwordConfirmation ? <div className='form-validation'>{errors.passwordConfirmation}</div> : null}
              <button type="submit" className='form-button'>SignUp</button>
            </Form>
          )}
        </Formik>
        <p className='form-link'>Already A User? <span>Login</span></p>
      </GridItem>
      <GridItem gridSize={6} className='form-image fullSizeGridTablet'>
        <img src={loginImage} alt='' className='img-fluid' />
      </GridItem>
    </GridContainer>
  )
}

export default Register