import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSignUp = () => {
        const user = { email };
        const token = 'jwt-token';
        dispatch(login({ user, token }));
    }


    return (
        <div>
            <h2>
                Sign Up
            </h2>
            <input type="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
            <input type="password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            <button onClick={ handleSignUp }>Sign Up</button>
        </div>
    );
};
export default SignUp;