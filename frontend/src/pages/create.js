import { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export default function Create()
{
    const navigate=useNavigate();
    const[inputs,setInputs]= useState({});
        const handleChange=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            setInputs(values => ({...values,[name]:value}))
        }
    
        const submitForm=() =>{
            http.post('/users',inputs).then((res)=>{
                navigate('/');
            })
        }

    return(
        <div>
            <h3>Create Page</h3>

            <div className="card p-3">
            <div className="row">
                <div className="form col-sm-6 justify-content-center">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" value={inputs.name||''} onChange={handleChange}></input>
                </div>
            </div>

            <div className="row">
                <div className="form col-sm-6 justify-content-center">
                    <label>Email:</label>
                    <input type="text" name="email" className="form-control" value={inputs.email||''} onChange={handleChange}></input>
                </div>
            </div>

            <div className="row">
                <div className="form col-sm-6 justify-content-center">
                    <label>Password:</label>
                    <input type="text" name="password" className="form-control" value={inputs.password||''} onChange={handleChange}></input>
                </div>
            </div>

            <div className="row">
                <div className="form col-sm-6">
                    <button type="submit" name="" onClick={submitForm} className="btn btn-success">Create</button>
                </div>
            </div>
        </div>
        </div>
    )
}