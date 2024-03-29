import { object, string } from "yup"
import { submitLoginAPI } from "../api";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch} from "react-redux";
import { fetchUserAuth } from "../features/authSlice";

const loginSchema = object({
    email: string().email().required('Email is required'),
    password: string().required('the password is require')
});


const initialValues = {
    email: '',
    password: ''
}


const LoginForm = () => {
const dispatch = useDispatch()


const submitLogin = async (values) => {
    await submitLoginAPI(values)
    dispatch(fetchUserAuth())
    
}

return (
    <Formik
    initialValues={initialValues}
    validationSchema={loginSchema}
    onSubmit={submitLogin}
    >
        <Form>
            <Field type="email" name="email"></Field>
            <ErrorMessage name="email" component="div"></ErrorMessage>
            <Field type="text" name="password"></Field>
            <ErrorMessage name="password" component="div"></ErrorMessage>
            <button type='submit'>Submit</button>

        </Form>
    </Formik>

)
};

export default LoginForm;