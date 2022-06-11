import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";
import MyDataGrid from "./MyDataGrid";
import {render} from "react-dom";
import {people} from "../services/getData";

export default function TextFields() {
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = (e) => {
        if(e.target.value.length === 0){
            alert("Please Enter a SQL Query.");
        }else{
            render(
                <MyDataGrid data={people(5000)}/>,
                document.getElementById('data-grid')
            )
            setValue('')
        }
    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Query: ", event.target.value);
                event.preventDefault();
                handleClick(event)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1,
                    minWidth : "95%"
                },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-textarea"
                    label="SQL Query"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter your SQL query here"
                    multiline
                />
            </div>
        </Box>
    );
}