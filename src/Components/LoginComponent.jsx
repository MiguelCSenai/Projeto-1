import {useState} from 'react';
import './Components.css'
import axios from 'axios';



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
            setTimeout(() => {
                window.location.href = '/filmes';
            }, 2000);
          })
          .catch(function (value) {
            console.log(value);
            setError("*Email ou senha incorretos / dados incompletos");
            setSuccess(null);
          });

    }

    return (

        <div className='bodyLogin'>
            {success && <div className='sucesso'>{success}</div>}

            <div className='container'>

                <div className='Logo'></div>

                <form onSubmit={handleSubmit}>

                    <input type='email' id='email' placeholder='Email' value={email} autoComplete='true' onChange={(e) => setEmail(e.target.value)}>
                        
                    </input>
                    <input type='password' id='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}>
                        
                    </input>

                    <input type='submit' placeholder='Login' value={"Login"} className='subm fontMid'></input>
                    {error && <div className='erro'>{error}</div>}

                </form>


            </div>

            

        </div>

    );
}

export default Login;