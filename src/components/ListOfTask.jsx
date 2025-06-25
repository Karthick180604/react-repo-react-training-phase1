import { Button, Paper, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "task", headerName: "Task", sortable: false, width: 150 },
  { field: "desc", headerName: "Description", sortable: false, width: 250 },
  { field: "deadline", headerName: "Dead Line", width: 150 },
];
const rows = [
  {
    id: 0,
    task: "Day 9 Start",
    desc: "react training phase 1 day 9",
    deadline: new Date("06/25/2025"),
  },
  {
    id: 1,
    task: "React meeting",
    desc: "Seminar about new learned concepts",
    deadline: new Date("06/24/2025"),
  },
  {
    id: 2,
    task: "Day Review",
    desc: "Review based on today learned concepts",
    deadline: new Date("06/24/2025"),
  },
  {
    id: 3,
    task: "Push project",
    desc: "Upload project in github",
    deadline: new Date("06/24/2025"),
  },
];
const paginationModel = { page: 0, pageSize: 5 };
const ListOfTask = () => {
  const [sId, setSId] = useState(0);
  const [userInput, setUserInput] = useState({
    id: 0,
    task: "",
    desc: "",
    deadline: null,
  });
  const [todo, setTodo] = useState([]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(userInput);
  };
  const onDateChange = (value, name) => {
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onAddData = (e) => {
    setTodo((prevState) => {
      return [...prevState, userInput];
    });
    setUserInput((prevState) => ({
      id: prevState.id + 1,
      task: "",
      desc: "",
      deadline: null,
    }));
    console.log(todo);
  };

  return (
    <>
      <TextField
        name="task"
        value={userInput.task}
        onChange={(e) => onInputChange(e)}
        label="Standard"
        variant="standard"
        placeholder="Enter task"
      />
      <TextField
        name="desc"
        value={userInput.desc}
        onChange={(e) => onInputChange(e)}
        label="Standard"
        variant="standard"
        placeholder="Enter description"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name="deadline"
          value={userInput.deadline}
          onChange={(newValue) => onDateChange(newValue, "deadline")}
        />
      </LocalizationProvider>
      <Button variant="contained" onClick={(e) => onAddData(e)}>
        {" "}
        Add task
      </Button>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={todo}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};
export default ListOfTask;
