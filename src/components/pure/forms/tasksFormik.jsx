import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import { LEVELS } from '../../models/levels'
import { Task } from '../../models/task.class'

const TasksFormik = () => {

    let task = new Task()

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }


    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                    .min(3, 'Task name too short')        
                    .max(10, 'Task name too long')
                    .required('Name is required'),        
            description: Yup.string()
                    .min(4, 'Description too short')        
                    .max(20, 'Description too long')
                    .required('Description is required'),
            // completed: Yup.boolean()
            //         .oneOf([true]) 
            //         .required('This field must be checked'), 
            level: Yup.string()
                    .oneOf([LEVELS.URGENT, LEVELS.NORMAL, LEVELS.BLOCKING])
                    .required('Level is required')
        }
    )


    return (
        <div>
            <h2>Tasks Formik</h2>
            <Formik
                // Initial values that the form will take (username, email, etc): 
                initialValues={ initialValues } 
                // Yup validation schema:
                validationSchema={taskSchema}
                // onSubmit event. It shows the data of the user on an alert by clicking submit:
                onSubmit={async (values) => {
                    await new Promise ((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        {/* NAME */}
                        <label htmlFor="name">Name</label>
                            <Field
                            id="name"
                            name="name"
                            placeholder="Task name"
                            type="text"
                            />
                        {
                            errors.name && touched.name &&
                            (
                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }

                        {/* DESCRIPTION */}
                        <label htmlFor="description">Description</label>
                            <Field
                            id="description"
                            name="description"
                            placeholder="Description"
                            type="text"
                            />
                        {
                            errors.description && touched.description &&
                            (
                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }

                        {/* LEVEL */}
                        <Field name="colors" as="select" className="my-select">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        {
                            errors.level && touched.level &&
                            (
                                <ErrorMessage name="level" component='div'></ErrorMessage>
                            )
                        }
                    </Form>        
                )
            }

            </Formik>    
        </div>
    );
}

export default TasksFormik;
