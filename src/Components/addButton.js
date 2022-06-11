import { TextField } from "@mui/material";
import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    fontSize: "10px",
    width: 140,
    "&:hover": {
      backgroundColor: "rgb(22, 200, 245)",
    },
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    width: 140,
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "rgb(22, 200, 245)",
    },
  },
  colors: {
    background: "#283d4a",
  },
  input: {
    background: "white",
    borderRadius: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  content: {
    background: "#283d4a",
  },
  inputBase: {
    background: "white",
    margin: 10,
    borderRadius: 4,
    width: "23%",
  },
  action: {
    width: "50%",
    color: "white",
    border: "1px solid white",
  },
  refresh: {
    height: 30,
    marginLeft: 8,
  },
}));

export default function Addbutton(props) {
  const sx1 = {
    background: "white",
    margin: "10px",
    width: "20%",
    borderRadius: "4px",
  };
  const style1 = useStyles();
  return (
    <Dialog open={props.open} onClose={props.handleClose} maxWidth="200px">
      <DialogContent className={style1.content}>
        <DialogTitle style={{ color: "white" }}>Add</DialogTitle>
        <TextField
          type="text"
          label="Business Code"
          sx={sx1}
          value={props.company.business_code}
          name="business_code"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Customer Number"
          sx={{
            background: "white",
            margin: "10px",
            width: "23%",
            borderRadius: "4px",
          }}
          value={props.company.cust_number}
          name="cust_number"
          onChange={props.changeHandler}
        />
        <TextField
          type="date"
          label="Clear Date"
          sx={sx1}
          value={props.company.clear_date}
          name="clear_date"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Business Year"
          sx={sx1}
          value={props.company.buisness_year}
          name="buisness_year"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Document ID"
          sx={sx1}
          value={props.company.doc_id}
          name="doc_id"
          onChange={props.changeHandler}
        />
        <TextField
          type="date"
          label="Posting Date"
          sx={sx1}
          value={props.company.document_create_date}
          name="document_create_date"
          onChange={props.changeHandler}
        />
        <TextField
          type="date"
          label="Document Create Date"
          sx={sx1}
          value={props.company.document_create_date1}
          name="document_create_date1"
          onChange={props.changeHandler}
        />
        <TextField
          type="date"
          label="Due Date"
          sx={sx1}
          value={props.company.due_in_date}
          name="due_in_date"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Invoice Currency"
          sx={sx1}
          value={props.company.invoice_currency}
          name="invoice_currency"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Document Type"
          sx={sx1}
          value={props.company.document_type}
          name="document_type"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Posting ID"
          sx={sx1}
          value={props.company.posting_id}
          name="posting_id"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Total Open Amount"
          sx={sx1}
          value={props.company.total_open_amount}
          name="total_open_amount"
          onChange={props.changeHandler}
        />
        <TextField
          type="date"
          label="Baseline Create Date"
          sx={sx1}
          value={props.company.baseline_create_date}
          name="baseline_create_date"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Customer Payment Terms"
          sx={sx1}
          value={props.company.cust_payment_terms}
          name="cust_payment_terms"
          onChange={props.changeHandler}
        />
        <TextField
          type="text"
          label="Invoice ID"
          sx={sx1}
          value={props.company.invoice_id}
          name="invoice_id"
          onChange={props.changeHandler}
        />
        <DialogActions>
          <Button onClick={props.submitHandler} className={style1.action}>
            Add
          </Button>
          <Button onClick={props.handleClose} className={style1.action}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
