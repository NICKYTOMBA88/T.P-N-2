import Layout from "../../components/Layout";
import { useState, useEffect } from "react";



const Home = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchingBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/books")
        const dataBooks = await response.json()
        setBooks(dataBooks)
      } catch (error) {
        console.log(error)
      }
    }
    fetchingBooks()
  }, [])

  return (
    <Layout>
      <h1>Lista de prductos</h1>
      {
        products.map((books) => {
          <div>
            <h2>{books.title}</h2>
            <p>{books.author}</p>
            <p>{books.genre}</p>
          </div>
        })
      }
    </Layout>
  )
}

export { Home };