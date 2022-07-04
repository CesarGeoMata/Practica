import React from 'react';
import Link from 'next/dist/client/link';
import Layout from '../../components/layout';

export default function index({data}) {
  return (
    <Layout>

        <h1>Lista de artículos</h1>
        {data.map(({id, title, body})=>(

        <div key={id}>
           <h3>
            <Link href={`/blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>

        ))}

    </Layout>
  );
}

export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return{
            props:{
                data
            }
        }
    } catch (error) {
        console.log(erro)
    }    
}
