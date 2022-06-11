import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MyDataGrid from "./MyDataGrid";
import {render} from "react-dom";
import {people} from "../services/getData";

const queries = [
    {
        key: 1,
        value: 'SELECT * FROM table1',
        label: 'SELECT * FROM table1',
    },
    {
        key: 2,
        value: 'SELECT * FROM table2',
        label: 'SELECT * FROM table2',
    },
    {
        key: 3,
        value: 'SELECT * FROM table3',
        label: 'SELECT * FROM table3',
    },
    {
        key: 4,
        value: 'SELECT * FROM table4',
        label: 'SELECT * FROM table4',
    },
];

export default function SelectTextFields() {
    const [query, setQuery] = React.useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        render(
            <MyDataGrid data={people(10000)}/>,
            document.getElementById('data-grid')
        )
    };
    console.log(query)

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-query"

                    select
                    label="Pre-defined SQL queries"
                    value={query}
                    onChange={handleChange}
                    helperText="Please select a query from the list"
                >
                    {queries.map((option) => (
                        <MenuItem key={option.key} value={option.value} style={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
}
