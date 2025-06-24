import React, { useEffect, useState } from 'react'
import activities from '../Data';
import ActivityCardDisplay from './ActivityCardDisplay';
import { Button, Pagination, Typography } from '@mui/material';
import ModeDialogBox from './ModeDialogBox';

const contentSize=3;
const ActivityPagination=()=>{
    const [pagination, setPagination]=useState({
        count:0,
        from:0,
        to:contentSize
    })
    const [content, setContent]=useState([])
    
    const [dialogOpen, setDialogOpen]=useState(false)
    const [dialogValue, setDialogValue]=useState("")

    useEffect(()=>{
        setPagination((prevState)=>({...prevState, count:activities.length}))
        const data=activities.slice(pagination.from, pagination.to)
        setContent(data)
        console.log(pagination.from, pagination.to)
        console.log(data)
    },[pagination.from, pagination.to])


    const onPageChange=(event, page)=>{
        const from=(page-1)*contentSize;
        const to=from+contentSize;
        console.log("onPageChange",from,to)

        setPagination((prevState)=>({...prevState, from:from, to:to}))
    }

    const handleDialogOpen=()=>{
        setDialogOpen(true)
    }
    const handleDialogClose=(value)=>{
        setDialogOpen(false)
        setDialogValue(value)
        console.log(dialogValue)
    }
    return(
        <>
        <div className='activity-container'>
            <div className="activity-display-container">
                <div >
                    {
                        content.map(({activity, description, duration}, index)=>(
                            <ActivityCardDisplay key={index} activity={activity} description={description} duration={duration} />
                        ))
                    }
                </div>
                <Pagination 
                count={Math.ceil(pagination.count/contentSize)}
                color="secondary"
                onChange={onPageChange}
                showFirstButton
                showLastButton
                />
            </div>
            <div className='activity-button-container'>
                <h2>{dialogValue}</h2>
                <Button onClick={handleDialogOpen} variant='contained'>Select Mode</Button>
                <ModeDialogBox dialogValue={dialogValue} dialogOpen={dialogOpen} handleDialogClose={handleDialogClose}  />
            </div>
        </div>
        </>
    )
}

export default ActivityPagination