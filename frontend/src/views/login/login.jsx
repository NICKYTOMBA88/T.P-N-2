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
    localStorage.setItem(JSON.stringify(token));


  }
  const login = async (body) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await response.json(); // 👈 Aca va el await
      return data;

    } catch (error) {
      console.log(error);
    }
  };


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