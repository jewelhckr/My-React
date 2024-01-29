import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
    let url = "https://api.github.com/users";
    // const fetchApi = ()=>{
    //     fetch(url).then((response)=>{
    //         return response.json();
    //     }).then((result)=>{
    //         console.log(result);
    //     })
    // }
    const [data, setData] = useState([]);
    const fetchApi = ()=>{
        axios.get(url).then((response)=>{
            console.log(response.data);
            setData(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    //useEffect

  useEffect(() => {
    console.log("useEffect");
    fetchApi();
  }, [])
  return (
    <>
        <h1 className='text-center'>Api</h1>
        {/* <button onClick={fetchApi} className="btn bg-info d-block mx-auto">
            Fetch Api
        </button> */}
        {
            data.map((item,index)=>(
                <div className='container-fluid w-25 shadow row' key={index}>
                    {/* <h3>{index+1}</h3>
                    <h3>{item.login}</h3>
                    <img className='img-fluid' src={item.avatar_url} alt="Avatar" /> */}
                    <div className="card text-center">
                      <img className="card-img-top" src={item.avatar_url} alt="Avatar"/>
                      <div className="card-body">
                        <h4 className="card-title">{item.login}</h4>
                        <p className="card-text">{item.type}</p>
                      </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Api