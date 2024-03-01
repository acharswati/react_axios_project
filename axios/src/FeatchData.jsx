import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import axios from 'axios';


function FeatchData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="data-container">
            <div className="mt-2">
                <h3> Axios Posts Table</h3>
                <Table striped bordered hover size="big">
                    <thead>
                        <tr class="table-danger">
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        
          
                    </thead>
                    <tbody class ="table-info">
                        {data.map((post, index) => (
                           <tr key={index} className={index % 1 === 0 ?  "table-row-even" : "table-row-odd"}>                
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default FeatchData;
