import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import Buttons from "./Buttons";
import { addCustomer, deleteCustomer, editCustomer, search } from "../services/data";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "firstName", headerName: "FirstName" },
  { field: "lastName", headerName: "LastName" },
  { field: "Age", headerName: "Age" },
];

export default function MyDataGrid(props) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function dataLoader() {
  //     setData(await getData());
  //   }
  //   dataLoader()
  //       .then(r => console.log(r));
  // }, []);
  const rowdata = props.data.map((people) => ({
    id: people.id,
    firstName: people.firstName.toUpperCase(),
    lastName: people.lastName.toUpperCase(),
    Age: people.age
  }));

  const obj = {
    id: "",
    firstName: "",
    lastName: "",
    Age:""
  };

  const [company, setCompany] = useState(obj);
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editDisable, setEditDisable] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pagesize, setPagesize] = useState(5);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteClose = () => setDeleteOpen(false);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let response = addCustomer(company);
    if (response) {
      setCompany(obj);
      handleClose();
      alert("SUCCESS! Entry added successfully");
    } else {
      alert("ERROR! Entry not added");
    }
  };
  const handleDeleteAll = async (e) => {
    e.preventDefault();

    let response = deleteCustomer(selectionModel);
    if (response) {
      alert("SUCCESS! Selected record/s deleted");
      handleDeleteClose();
    } else {
      alert("ERROR! Could Not Delete");
      handleDeleteClose();
    }
    //console.log(selectionModel);
  };
  const handleDeleteClickOpen = () => {
    selectionModel.length === 0
      ? alert("Select some record/s.")
      : setDeleteOpen(true);
  };
  const handleEditClickOpen = () => {
    if (selectionModel.length === 0) {
      alert("Select one record.");
    } else if (selectionModel.length > 1) {
      alert("Sorry! Cannot edit more than 1 record at a time.");
    } else {
      setEditDisable(false);
      setEditOpen(true);
      let { isOpen, is_deleted, ...editCustomer } = props.data.filter(
        (record) => record["sl_no"] === selectionModel[0]
      )[0];
      setCompany(editCustomer);
    }
  };
  const handleEditClose = () => {
    setEditOpen(false);
    setCompany(obj);
  };
  const handleEditAll = async (e) => {
    e.preventDefault();

    let response = await editCustomer(selectionModel[0], company);
    if (response) {
      alert("!!SUCCESS!! Updated Successfully.");
      handleEditClose();
    } else {
      alert("!!ERROR!! Could Not Update.");
      handleEditClose();
    }
  };
  const handleSearchClickOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    let response = await search(company);
    if (response["search"]) {
      // setData(response["company"]);
      handleSearchClose();
    } else {
      alert("Sorry! No Record Found.");
      handleSearchClose();
      setCompany(obj);
    }
  };
  const initiateSearch = async (e) => {
    e.preventDefault();
    let response = await search(company);
    console.log(response);
    if (response.Status === "Successful") {
      alert("Customer data is found.");
      // setData(response["company"]);
      setCompany(obj);
      // await setData(response.rows);
    } else {
      alert("Sorry! No Record Found.");
      setCompany(obj);
    }
  };
  const refreshPage = () => window.location.reload();



  return (
    <>

      <Buttons
        company={company}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        handleDeleteAll={handleDeleteAll}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleDeleteClickOpen={handleDeleteClickOpen}
        handleDeleteClose={handleDeleteClose}
        deleteOpen={deleteOpen}
        refreshPage={refreshPage}
        editOpen={editOpen}
        handleEditClickOpen={handleEditClickOpen}
        handleEditAll={handleEditAll}
        handleEditClose={handleEditClose}
        searchOpen={searchOpen}
        initiateSearch={initiateSearch}
        handleSearch={handleSearch}
        handleSearchClickOpen={handleSearchClickOpen}
        handleSearchClose={handleSearchClose}
        editDisable={editDisable}
      />
      <div style={{ height: 400, width: "100%", flexGrow:1 }}>
        {console.log("Rendering Data-Grid")}
        <DataGrid
          columns={columns}
          rows={rowdata}
          getRowId={(row) => row.id}
          checkboxSelection={true}
          pagination={true}
          pagesize={pagesize}
          onPageSizeChange={(newPageSize) => setPagesize(newPageSize)}
          rowsPerPageOptions={[5, 10, 25, 100, 200]}
          density="compact"
          headerHeight={100}
          disableColumnMenu
          disableColumnSelector
          disableColumnFilter
          disableSelectionOnClick={true}
          onSelectionModelChange={(newSelectionModel) =>
            setSelectionModel(newSelectionModel)
          }
          sx={{
            background: "#283d4a",
            color: "white",
            width: "100%",
            height: "680px",
            "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle": {
              overflow: "hidden",
              lineHeight: "20px",
              whiteSpace: "normal",
              borderColor: "white",
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiCheckbox-root": {
              color: "white",
              backgroundColor: "transparent",
            },
            ".MuiTablePagination-root, .MuiSvgIcon-root": {
              color: "#FFFFFF",
            },
          }}
        />
      </div>
    </>
  );
}