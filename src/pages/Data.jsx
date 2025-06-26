import axios from "axios";
import React, { useState } from "react"
import axiosInstance from "../services/axiosInstance";
import { Snackbar } from "@mui/material";

const Data=()=>{
    const [userData, setUserData]=useState({
        id:null,
        title:"",
        body:"",
        userId:null,
    })
    const [disabled, setDisabled]=useState(false)
    const [apiData, setApiData]=useState([])

    const [open, setOpen]=useState(false)
    const fetchData=async()=>{
        try {
            setDisabled(true)
            const id=1;
            const response=await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data=await response.json()
            setApiData(data)
            console.log(data)
            setDisabled(false)
            setOpen(true)
            // console.log(response.json())

        } catch (error) {
            console.log(error)
        }
    }
    const addData=async()=>{
        try {
            const id=1
            // fetch(`https://jsonplaceholder.typicode.com/posts`,{
            //     method:"POST",
            //     headers:{
            //         'Content-type':'application/json'
            //     },
            //     body:JSON.stringify({
            //         title:"Dummy Data",
            //         body:"Practicing to add data",
            //         userId:1,   
            //     })
            // })
            // .then((response)=>response.json())
            // .then((json)=>console.log(json))
            const response=await axiosInstance.post("/",userData)
            console.log(response.data)
            setApiData([response.data])
            
        } catch (error) {
            console.log(error)
        }
    }
    const updateData=async()=>{
        try {
            const id=1;
            // const updateData=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            //     method:"PUT",
            //     body:JSON.stringify({
            //         id:id,
            //         title:"Dummy data",
            //         body:"Updating the data",
            //         userId:2,
            //     }),
            //     headers:{
            //         'Content-type':'application/json'
            //     }
            // })
            // const data=await updateData.json()
            // console.log(data)

            const response = await axiosInstance.put(`/${userData.id}`,userData)
            console.log(response)
            setApiData([response.data])
        } catch (error) {
            console.log(error)
        }
    }
    const updateAttribute=async()=>{
        try {
            // const id=1;
            // const updateData=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            //     method:"PATCH",
            //     body:JSON.stringify({
            //         title:"update through patch"
            //     }),
            //     headers:{
            //         'Content-type':"application/json"
            //     }
            // })
            // const data=await updateData.json()
            // console.log(data)
            const response=await axiosInstance.patch(`/${userData.id}`,{
                title:userData.title
            })
            console.log(response.data)
            setApiData([response.data])
        } catch (error) {
            console.log(error)
        }
    }
    const deleteData=async()=>{
        try {
            // const id=1;
            // const deleteData=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            //     method:"DELETE"
            // })
            // const data=await deleteData.json()
            // console.log(data)
            const response= await axiosInstance.delete(`/${userData.id}`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const errorHandling=async()=>{
            const response=await axiosInstance.get("/abc")
            // const data=await response.json()
            console.log("from error handling")
            console.log(response.data)
    }

    const onInputChange=(e)=>{
        const {name, value}=e.target;
        setUserData((prevState)=>{
            return{...prevState, [name]:value}
        })
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <>
        <h1>Data</h1>
        <div>
            <input value={userData.id || ""} name="id" type="text" placeholder="id" onChange={onInputChange}></input>
            <input value={userData.title} name="title" type="text" placeholder="title" onChange={onInputChange}></input>
            <input value={userData.body} name="body" type="text" placeholder="body" onChange={onInputChange}></input>
            <input value={userData.userId || ""} name="userId" type="text" placeholder="userId" onChange={onInputChange}></input>
        </div>
            <button onClick={fetchData} disabled={disabled}>Fetch data</button>
            <button onClick={addData}>Add data</button>
            <button onClick={updateData}>Update data</button>
            <button onClick={updateAttribute}>Update Attribute</button>
            <button onClick={deleteData}>Delete Data</button>
            <button onClick={errorHandling}>error</button>
        <ul className="data-list">
            {
                apiData.map(({title,body}, index)=>(
                    <li key={index}>{title}</li>
                ))
            }
        </ul>
        <Snackbar 
        open={open}
        autoHideDuration={3000}
        message="Fetched Data" 
        onClose={handleClose}
        />
        </>
    )
}

export default Data