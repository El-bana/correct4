import GridContainer from '../../../components/grid/GridContainer'
import GridItem from '../../../components/grid/GridItem'
import styles from '../Forms.module.css'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import loginImage from '../../../assets/images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
      .string()
      .required('Please Enter your password')
      .min(8, 'Password is too short - should be 8 chars minimum.')
  });

  return (
    <GridContainer className='main-grid'>
      <GridItem gridSize={5} className='fullSizeGridTablet'>
        <h2 className={styles.main_paragraph}>Login To Your <br /> <span>Account</span></h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field name="email" type='email' placeholder='Email' className={styles.main_input} />
              {errors.email && touched.email ? (
                <div className={styles.form_validation}>{errors.email}</div>
              ) : null}
              <Field name="password" type="password" placeholder='Password' className={styles.main_input} />
              {errors.password && touched.password ? <div className={styles.form_validation}>{errors.password}</div> : null}
              <button type="submit" className={styles.form_button}>Login</button>
            </Form>
          )}
        </Formik>
        <p to='/register' className={styles.form_link}>Not A User? <Link to='/register'>Signup</Link></p>
      </GridItem>
      <GridItem gridSize={6} className={`${styles.form_image} fullSizeGridTablet`}>
        <img src={loginImage} alt='' className='img-fluid' />
      </GridItem>
    </GridContainer>
  )
}

export default Login