import { useFormik, validateYupSchema} from 'formik';

import Validation from './Validation';

function SignUp() {

    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
        initialValues: {
            email: '',
            password:"",
            confirmPassword:"",
        },
        onSubmit: values => {
            console.log(values);
        },

        validateYupSchema: Validation

      });



  return (
    <div>
        <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} >
                
                <label htmlFor="email">Email</label>
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    value={values.email}
                />

                {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}

                <br /><br />

                <label htmlFor="email">Password</label>
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={values.password}    
                />


                {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}

                <br /><br />


                <label htmlFor="email">Confirm Password</label>
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}    
                />
                {errors.confirmPassword && touched.confirmPassword && (<div className='error'>{errors.confirmPassword}</div>)}


                <button type="submit">Submit</button> 

        </form>
        
           
    </div>
  )
}

export default SignUp