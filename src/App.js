import React from "react";
import { useFormik } from 'formik';

 function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
       alert('Login Successful', null, 2);
    },
    validate: values => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      };

      if (!values.password) {
        errors.password = 'Field required';
      } ;

      return errors;
    }

  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div> Email: </div>
      <input 
          id="emailField"
          type="email" 
          name="email" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
        {formik.touched.email && formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}

      <div> Password: </div>
      <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          />
      {formik.touched.password && formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}
      <div id="submitBtn"> 
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
