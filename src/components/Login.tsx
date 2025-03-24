import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import { useState, useContext } from 'react';

function Login() {
    const [user, setUser] = useState(
        {
            id: 0,
            email: '',
            password: ''
        }
    );
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    if (!userContext){
        throw new Error("You probably forgot to put <Provider /> component");
    }

    const { loginUser, fetchUser } = userContext;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value || '', // Dynamically update the field based on the input's name
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await loginUser(user);
            await fetchUser(user.id);
            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <h1>Login</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={user.password} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            <p>Not a member yet?  <Link to="/Signup">Signup!</Link></p>
        </div>
        </>
    );
};

export default Login;