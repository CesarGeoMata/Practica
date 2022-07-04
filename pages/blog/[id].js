import React from 'react'

import Layout from '../../components/layout';



export default function ArticuloUno({user}) {
  return (
    <Layout>
    <h1>Lista de artículos</h1>
     <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body text-center">
            <h3>{user.name}</h3>
            <p>Email: {user.email} </p>
          </div>
        </div>
      </div>
    </div>

     



    </Layout>

  )
}







export async function getStaticPaths() {
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()


  const paths = users.map((user) => ({
    params: { id: user.id.toString() },

    }))


  return { paths, fallback: false }
} catch (error) {
  console.log(error)
}
}


export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()
  return { props: { user } }
}

