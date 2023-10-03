import { login } from "./modules/utils.js";
import { useState } from "./modules/utils.js";

const loginButton = document.getElementsByClassName("btn")
const [error, setError] = useState(null);
const [requesting, setRequesting] = useState(false);

const handleSubmit = () => {
    const values = {email: email, password: password};
    login(values).then().catch(()=>{
        
    }).finally(()=>{alert("chegou")})
}
loginButton.addEventListener('click', handleSubmit())