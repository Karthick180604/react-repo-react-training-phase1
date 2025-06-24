import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const mode=["Activity","Goal", "Daily task"]
const ModeDialogBox = ({dialogValue, dialogOpen, handleDialogClose}) => {

    const handleClose=()=>{
        handleDialogClose(dialogValue)
    }
    const handleClickedItem=(value)=>{
        handleDialogClose(value)
    }

  return (
    <Dialog onClose={handleClose} open={dialogOpen}>
        <DialogTitle>Set the mode</DialogTitle>
        <List>
            {
                mode.map((data, index)=>(
                    <ListItem key={index}>
                        <ListItemButton onClick={()=>handleClickedItem(data)}>
                            <ListItemText primary={data}/>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    </Dialog>
  )
}

export default ModeDialogBox
