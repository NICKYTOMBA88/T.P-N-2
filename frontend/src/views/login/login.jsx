import { useState } from "react";
import Layout from "../../components/Layout";
import { data } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()


    const dataUser = {
      email,
      password
    }

    const token = await login(dataUser)
    console.log(token)

  }
  const login = async (body) => {

    try {
      const response = await fetch("http://localhost:3000/api/auth/loginc", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      })

      const token = response.json()
      return token

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button>Ingresar</button>
      </form>
    </Layout>
  )
}

export { Login };