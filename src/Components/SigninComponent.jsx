import {useState} from 'react';
import axios from 'axios';

function Signin(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit (e) {
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/register', {
            "name": name,
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Seja bem vindo, ${name}!`);
            setError(null);
            setTimeout(() => {
                window.location.href = '/filmes';
            }, 2000);
          })
          .catch(function (value) {
            console.log(value);
            setError("*Email ja cadastrado ou informações faltantes");
            setSuccess(null);
          });

    }

    return (

        <div className='bodyLogin'>
            {success && <div className='sucesso'>{success}</div>}

            <div className='container'>

                <div className='Logo'></div>

                <form onSubmit={handleSubmit}>

                    <input type='name' id='name' placeholder='Nome' value={name} autoComplete='true' onChange={(e) => setName(e.target.value)}>
                        
                    </input>

                    <input type='email' id='email' placeholder='Email' value={email} autoComplete='true' onChange={(e) => setEmail(e.target.value)}>
                        
                    </input>
                    <input type='password' id='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}>
                        
                    </input>

                    <input type='submit' value={"Signin"} className='subm fontMid'></input>
                    {error && <div className='erro'>{error}</div>}

                </form>


            </div>

            

        </div>

    );
}

export default Signin;