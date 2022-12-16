import axios from "axios"
import { useRef } from "react"
import { useContext } from "react"
import { Context } from "../../context/Context"
import "./login.css"

export default function Login() {
    const userRef = useRef()
    const passRef = useRef()
    const { user,dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:5000/api/login/",{
                username: userRef.current.value,
                password: passRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        }catch (err){
            dispatch({type:"LOGIN_FAILURE"})
        }
    };
    console.log(user)
  return (
    <div className="login">
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className="loginDiv">
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef}/>
            </div>
            <div className="loginDiv">
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." ref={passRef}/>
            </div>
            <button className="loginButton" type="submit" disabled={isFetching}>LOGIN</button>
        </form>
    </div>
  )
}
