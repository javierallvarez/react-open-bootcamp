import React from 'react';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()

    return (
        <div>
            <Formik
                // Initial values that the form will take: 
                initialValues={ initialCredentials } 
                // Yup validation schema:
                validationSchema={loginSchema}
                // onSubmit event. It shows the data of the user on an alert by clicking submit:
                onSubmit={async (values) => {
                    await new Promise ((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    // When the user is logged, the data is saved in the local storage:
                    await localStorage.setItem('credentials', values);
                    // User is redirected to profile:
                    navigate('/profile');
                    // Way to do it in version 5:
                    // history.push(/profile)
                }}
            >

            {/* Obtain props from Formik: */}
            {({
                values,
                touched,
                errors,
                isSubmitting
            }) => (
                <Form>
                    <label htmlFor='email'>Email</label>
                    <Field 
                    id='email'
                    name='email'
                    placeholder='email"email.com'/>
                        {/* It shows the error under the label if there are not @, for example. Using comonent='div' is the same that using a normal div to wrap it: */}
                        {
                        errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                    <label htmlFor='password'>Parssword</label>
                    <Field 
                    id='password'
                    name='password'
                    placeholder='password'
                    type='password'
                    />

                    {/* Password Errors: It shows the error under the label if there are not text, for example: */}
                    {
                        errors.password && touched.password &&
                        (
                            <div>
                                <ErrorMessage name='password'></ErrorMessage>
                            </div>
                        )
                    }

                    <button type='submit'>Login</button>
                    {/* It shows a message while the correct login is loading: */}
                    { isSubmitting ? (<p>Login your credentials</p>) : null }

                </Form>
            )}

            </Formik> 
        </div>
    );
}

export default LoginFormik;
