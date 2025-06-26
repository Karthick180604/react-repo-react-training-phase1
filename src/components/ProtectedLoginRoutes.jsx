import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedLoginRoutes = ({children}) => {
    const {useremail}=useParams();
    const [validUser, setValidUser]=useState(false)
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const storageEmail=localStorage.getItem('user')
        if(storageEmail===useremail)
        {
            setValidUser(true)
        }
        setLoading(false)
    },[])
    if(loading)
    {
        return <h2>Checking valid user....</h2>
    }

    if(validUser)
    {
        return children
    }
    else
    {
        return <Navigate to="/" />
    }
}

export default ProtectedLoginRoutes

