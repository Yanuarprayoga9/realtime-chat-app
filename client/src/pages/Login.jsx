import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const fetchLogin = async () => {
        try {
            const res = await fetch('http://localhost:5555/api/auth/login', {
                method: 'POST', // Gunakan POST untuk login
                credentials: 'include', // Include credentials
                headers: {
                    'Content-Type': 'application/json' // Pastikan header content-type adalah application/json
                },
                body: JSON.stringify({
                    username: 'johndoe123',
                    password: 'SecurePass123'
                }) // Konversi data menjadi string JSON
            });
            if (res.ok) {
                navigate("/home")
            }
            alert('login error')
        } catch (error) {
            alert('login error')

        }
    }
    const handleClick = () => {
        fetchLogin()
    }
    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default Login