import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function Signup() {
    const [user, setUser] = useState(
        {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    );
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    if (!userContext){
        throw new Error("You probably forgot to put <Provider /> component");
    }

    const { createUser } = userContext;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value || '', // Dynamically update the field based on the input's name
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUser(user);
        setUser({
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }); 
        navigate('/');
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                    <h1>Sign Up</h1>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        name="firstname" 
                        value={user.firstname} 
                        onChange={handleChange} 
                        required style={{ width: '300px' }} 
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastname" 
                        value={user.lastname}
                        onChange={handleChange}
                        required style={{ width: '300px' }} 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={user.email}
                        onChange={handleChange} 
                        required style={{ width: '300px' }} 
                        />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={user.password}
                        onChange={handleChange} 
                        required 
                        style={{ width: '300px' }} />
                    <button type="submit" style={{ width: '300px' }}>Sign Up</button>
                </form>
                <div className="EULA">
                <p>
                    <b>
                    By signing up and clicking submit you agree to supply us with your first and last names as well as your email address
                    and password. You also agree to the following terms and conditions: You understand that "We" refers to the owners and
                    operators of this website. We will store this information in our database and use it to send you emails about our products
                    and services. We will not share this information with any third parties. You can request that we delete your information
                    at any time. Until such time as you request that we delete your information, we will retain it indefinitely. Agreeing to
                    this and clicking the submit button, you admit that you are aware of the terms and conditions of this agreement, and will
                    abide by all the rules listed herein. If you do not agree to these terms, please do not sign up.
                    </b>
                </p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>1. You must be 18 years or older to sign up.</li>
                    <li>2. You must provide a valid email address.</li>
                    <li>3. You must not be rude or engage in bullying and negativity.</li>
                    <li>4. We are not responsible for any damage or destruction in any form or manner whatsoever. You are.</li>
                    <li>5. We make the rules here, not you or anyone else.</li>
                    <li>6. Only we can change the rules at any given time.</li>
                </ul>
                </div>
            </div>
        </>
    );
};

export default Signup;