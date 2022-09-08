import { useFormik} from 'formik';


function UseFormik() {

    const {handleChange,handleSubmit,values} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: "female",
            hobbies: [],
            country: "Turkey",
    
        },
        onSubmit: values => {
            console.log(values);
        },
      });


  return (
    <div>
        <h1>Sign Up</h1>
    
      
    
     
            <form onSubmit={handleSubmit} >
                <label htmlFor="firstName">First Name</label>
                <input  name="firstName" placeholder="Jane"  onChange={handleChange} />

        <br />
        <br />

                <label htmlFor="lastName">Last Name</label>
                <input onChange={handleChange} name="lastName" placeholder="Doe" />

        <br />
        <br />

                <label htmlFor="email">Email</label>
                <input
                onChange={handleChange}
                name="email"
                placeholder="jane@acme.com"
                type="email"
                />
                    <button type="submit">Submit</button>

            <br /><br />

            <div>
                <label htmlFor="gender">Female</label>
                <input 
                    type="radio"
                    name="gender"
                    value= "female" 
                    onChange={handleChange}
                    checked={values.gender === "female"} />
                

                <label htmlFor="gender">   Male</label>
                <input 
                    type="radio"
                    name="gender"
                    value= "male"
                    onChange={handleChange} 
                    checked={values.gender === "male"}/>
                
            </div>
            
            <br /><br />

            <div>
                <label htmlFor="hobbies">Football</label>
                <input 
                    type="checkbox"
                    name="hobbies"
                    value= "Football"
                    onChange={handleChange} />               
            </div>

            <div>
                <label htmlFor="hobbies">Cinema</label>
                <input 
                    type="checkbox"
                    name="hobbies"
                    value= "Cinema" 
                    onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="hobbies">Tennis</label>
                <input 
                    type="checkbox"
                    name="hobbies"
                    value= "Tennis" 
                    onChange={handleChange} />
            </div>
                <br />
                <br />
            <select 
                name="country" 
                value={values.country} 
                onChange={handleChange}>
                    <option value="Turkey">Turkey</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                </select>

<br />
<br />
<br />

            <div>
                <code>{JSON.stringify(values)}</code>
            </div>
<br /><br /><br /><br /><br />
        </form>
        
           
    </div>
  )
}

export default UseFormik