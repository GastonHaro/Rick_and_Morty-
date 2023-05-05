import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css"


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
        <div className={style.form}>
            <form onSubmit={handleSubmit}>
                <h2 className={style.titulo}>Sing In</h2>
                <div className={style.input}>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email"/>
                    {errors.email && <label className={style.error}>{errors.email}</label>}
                </div>
                <div className={style.input}>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password"/>
                    {errors.password && <p className={style.error}>{errors.password}</p>}
                    
                </div>
                <br/>
                <button className={style.botonLogin} >LOGIN</button>
            </form>
        </div>
    )
}

export default Form;