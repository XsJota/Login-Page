import { login } from "./modules/utils.js";
import { useState } from "./modules/utils.js";
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const loginButton = document.getElementsByClassName("btn")

const [email, setEmail] = useState("")
const [password, setpassword] = useState("")

const controlEmail = (event) => {
    console.log(event)
}

const controlPassword = (event) => {
    console.log(event)
}

const handleSubmit = () => {
    console.log("submited")
}