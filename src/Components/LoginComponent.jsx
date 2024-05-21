import { useState } from 'react';
import './Components.css'
import axios from 'axios';
import { Alert } from 'react-bootstrap';



function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit (e) {
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
            setError(null);
          })
          .catch(function (value) {
            console.log(value);
            setError("Não permitido");
            setSuccess(null);
          });

    }

    return (

        <div className='body'>

            <div className='container'>

                {error && <Alert variant="danger"><b>{error}</b></Alert>}
                {success && <Alert variant="success"><b>{success}</b></Alert>}

                <div className='Logo'></div>

                <form onSubmit={handleSubmit}>

                    <input type='email' id='email' placeholder='Email' value={email} autoComplete='true' onChange={(e) => setEmail(e.target.value)}>
                        
                    </input>
                    <input type='password' id='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}>
                        
                    </input>

                    <input type='submit' className='subm'></input>

                </form>

            </div>

        </div>

    );
}

export default Login;