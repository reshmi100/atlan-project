import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    fontSize: "10px",
    width: "fit-content",
    "&:hover": {
      backgroundColor: "rgb(22, 200, 245)",
    },
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    width: "fit-content",
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

function Buttons(props) {
  const style1 = useStyles();

  const sx1 = {
    background: "white",
    margin: "10px",
    width: "20%",
    borderRadius: "4px",
  };

  return (
    <div className={style1.colors}>
      {/* -----------------------------Predict------------------------ */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.root}
        style={{ marginLeft: "5px" }}
      >
        PREDICT
      </Button>
      <Button variant="outlined" color="primary" className={style1.root}>
        ANALYTICS VIEW
      </Button>
      {/* ---------------------------Advance Search--------------------------- */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.root}
        onClick={props.handleSearchClickOpen}
      >
        ADVANCED SEARCH
      </Button>
      <Dialog open={props.searchOpen} onClose={props.handleSearchClose}>
        <DialogContent className={style1.content}>
          <DialogTitle style={{ color: "white" }}>Advance Search</DialogTitle>
          <TextField
            type="text"
            label="xxxxx"
            sx={{
              background: "white",
              margin: "10px 30px 10px 22px",
              width: "38%",
              borderRadius: "4px",
            }}
            value={props.company.xxxxx}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="xxxxx"
            sx={{
              background: "white",
              margin: "10px 10px 10px 30px",
              width: "38%",
              borderRadius: "4px",
            }}
            value={props.company.id}
            name="id"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="Customer Number"
            sx={{
              background: "white",
              margin: "10px 30px 10px 22px",
              width: "38%",
              borderRadius: "4px",
            }}
            value={props.company.custumber}
            name="custumber"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="Business Year"
            sx={{
              background: "white",
              margin: "10px 10px 10px 30px",
              width: "38%",
              borderRadius: "4px",
            }}
            value={props.company.buisness_year}
            name="buisness_year"
            onChange={props.changeHandler}
          />
          <DialogActions>
            <Button
              onClick={props.handleSearch}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              SEARCH
            </Button>
            <Button
              onClick={props.handleSearchClose}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              CANCEL
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {/* -------------------------Refresh--------------------- */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.refresh}
        onClick={props.refreshPage}
      >
        <RefreshIcon />
      </Button>
      {/* --------------------------Search------------------------- */}
      <form onSubmit={props.initiateSearch} style={{ display: "inline" }}>
        <TextField
          type="text"
          label="Search by ID"
          sx={sx1}
          size="small"
          value={props.company.id}
          name="xxxxx"
          onChange={props.changeHandler}
        />
      </form>
      {/* --------------------------Add---------------------------- */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.button}
        style={{ marginLeft: "0px" }}
        onClick={props.handleClickOpen}
      >
        ADD
      </Button>
      <Dialog open={props.open} onClose={props.handleClose} maxWidth="200px">
        <DialogContent className={style1.content}>
          <DialogTitle style={{ color: "white" }}>Add</DialogTitle>
          <TextField
            type="text"
            label="xxxxx"
            sx={sx1}
            value={props.company.xxxxx}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="xxxxx"
            sx={{
              background: "white",
              margin: "10px",
              width: "23%",
              borderRadius: "4px",
            }}
            value={props.company.xxxxx}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="date"
            label=" "
            sx={sx1}
            value={props.company.xxxxx}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="xxxxx"
            sx={sx1}
            value={props.company.xxxxx}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="xxxxx"
            sx={sx1}
            value={props.company.doc_id}
            name="doc_id"
            onChange={props.changeHandler}
          />
          <TextField
            type="date"
            label=" "
            sx={sx1}
            value={props.company.xxxxx}
            name="xxxxx"
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

      {/* -----------------------Edit------------------------------- */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.button}
        onClick={props.handleEditClickOpen}
      >
        EDIT
      </Button>
      <Dialog
        open={props.editOpen}
        onClose={props.handleEditClose}
        maxWidth="200px"
      >
        <DialogContent className={style1.content}>
          <DialogTitle style={{ color: "white" }}>Edit</DialogTitle>
          <TextField
            type="text"
            label="xxxxx"
            sx={{
              background: "white",
              margin: "10px",
              width: "44%",
              borderRadius: "4px",
            }}
            value={props.company["xxxxx"]}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <TextField
            type="text"
            label="xxxxx"
            sx={{
              background: "white",
              margin: "10px",
              width: "46%",
              borderRadius: "4px",
            }}
            value={props.company["xxxxx"]}
            name="xxxxx"
            onChange={props.changeHandler}
          />
          <DialogActions>
            <Button
              onClick={props.handleEditAll}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              EDIT
            </Button>
            <Button
              onClick={props.handleEditClose}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              CANCEL
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {/* ---------------------Delete--------------------------------- */}
      <Button
        variant="outlined"
        color="primary"
        className={style1.button}
        onClick={props.handleDeleteClickOpen}
      >
        DELETE{" "}
      </Button>
      <Dialog
        open={props.deleteOpen}
        onClose={props.handleDeleteClose}
        maxWidth="200px"
      >
        <DialogContent className={style1.content}>
          <DialogTitle style={{ color: "white" }}>Delete Records?</DialogTitle>
          <div style={{ color: "white" }}>
            Are you sure you want to delete these record/s ?
          </div>
          <DialogActions>
            <Button
              onClick={props.handleDeleteClose}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              CANCEL
            </Button>
            <Button
              onClick={props.handleDeleteAll}
              style={{ marginTop: "20px" }}
              className={style1.action}
            >
              DELETE
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {/* -------------------------------------------------------------- */}
    </div>
  );
}

export default Buttons;
