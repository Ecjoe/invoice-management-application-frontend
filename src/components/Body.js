import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Table from "./Table";
import ModalADD from "./ModalAdd";
import Edit from "./Edit";
import Delete from "./Delete";
import ViewCorrespondance from "./ViewCorrespondance";
function Body() {
  const [addPopup, setAddPopup] = React.useState(false);
  let [doc_id, setdocId] = React.useState({});
  let [delete_id, setdeleteId] = React.useState([]);
  return (
    <Paper class="GridPanel" square="false">
      <div className="abovegrid">
        <Button class="predictbutton" variant="contained">
          Predict
        </Button>
        <ViewCorrespondance />
        <div display="flex">
          <Button
            class="addbutton"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setAddPopup(true)}
          >
            Add
          </Button>
        </div>
        <div display="flex">
          <Edit
            title="Edit Invoices"
            addPopup={addPopup}
            setAddPopup={setAddPopup}
            i={doc_id}
          />
        </div>
        <div display="flex">
          <Delete
            title="Delete Invoices"
            addPopup={addPopup}
            setAddPopup={setAddPopup}
            dl={delete_id}
          />
        </div>
        <div display="flex">
          <Paper component="form" class="searchinvoice">
            <InputBase
              class="innersearchtext"
              placeholder="Search by Order Number"
              inputProps={{ "aria-label": "Search by Order Number" }}
            />
            <IconButton type="submit" class="searchicon" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <ModalADD
            title="Add Orders"
            addPopup={addPopup}
            setAddPopup={setAddPopup}
          ></ModalADD>
        </div>
      </div>

      <div class="tab">
        <Table
          class="tablebody"
          setDoc={setdocId}
          setDelete={setdeleteId}
          d={delete_id}
        />
      </div>
    </Paper>
  );
}
export default Body;
