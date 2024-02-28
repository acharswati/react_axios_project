import React, { useEffect, useState } from "react";
import axios from 'axios';

function FeatchData(){
    const [data, setData] =useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    return(
        <div className="container">
            <div className="mt-3">
                <h3>Featch Data from API in react with Axios posts Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((Posts, index) => {
                                return <tr key= {index}>
                                    <td>{Posts.userId}</td>
                                    <td>{Posts.id}</td>
                                    <td>{Posts.title}</td>
                                    <td>{Posts.body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default FeatchData;