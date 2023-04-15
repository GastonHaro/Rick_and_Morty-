import { useState } from "react";
import validation from "../Validation/Validation";


const Form = ({login}) => {
    const [ errors, setErrors] = useState({
    })

    const [ userData, setUserData] = useState({
        email : '',
        password : '',
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sing In</h2>
                <div>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email"/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password"/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <br/>
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default Form;