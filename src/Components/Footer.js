import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display:"flex",
        position: "fixed",
        bottom: '0',
        left:"0",
        right:'0',
        width: "100%",
        background: "#2d4250",
        margin: "auto auto",
    },
    box: {
        paddingTop: 10,
        paddingLeft: "30%",
        paddingBottom: 10,
    },
    astyle: {
        color: "skyblue",
        "&:hover": {
            color: "blue",
        },
    },
});

export default function Footer() {
    const style2 = useStyles();
    return (
        <footer className={style2.root}>
            <div className={style2.box}>
                <b className={style2.astyle}>
                    atlan <b style={{color: "orange"}}> Corporation demo project </b>2022.
                </b>
            </div>
        </footer>
    );
}
