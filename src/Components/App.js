import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import Table from "./TABLE/table";
import {people} from "../services/getData";
import {render, unmountComponentAtNode} from "react-dom";

const handleButtonClick = () => {
    unmountComponentAtNode((document.getElementById('data-grid')))
    render(
        <Table rows={people(5_00_001)}/>,
        document.getElementById('data-grid')
    );
};

function App() {
    return (
        <>
            <div>
                <div id="div-components" style={{float: "left", width:"50%"}}>
                    <Header/>
                    <TextArea/>
                    <DropDown/>
                    <button className="button-56" onClick={handleButtonClick}>Click To See Infinite Scroll Table</button>
                </div>
                <div id="data-grid" style={{float: "right", width:"48%"}}></div>
            </div>
            <Footer />
        </>
    );
}

export default App;
