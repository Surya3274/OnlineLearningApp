import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
    });

    const handleLogin = (values, { setSubmitting }) => {
        const user = { email: values.email };
        const token = 'jwt-token';
        dispatch(login({ user, token }));
        setSubmitting(false); // Set isSubmitting to false after form submission
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
                <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ isSubmitting, handleChange, handleBlur, values }) => (
                            <Form>
                                <div className="mb-3 input-group">
                                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setEmail(e.target.value);
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3 input-group">
                                    <span className="input-group-text"><i className="bi bi-lock"></i></span>
                                    <Field
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={(e) => {
                                            handleChange(e);
                                            setPassword(e.target.value);
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                    Login
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;