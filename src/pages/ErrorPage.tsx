import React from "react";
import { useRouteError } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";

const useStyles = makeStyles({
    block: {
        margin: "auto"
    },
    pageContent: {
        marginTop: 50
    },
    phaseTitle: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: "2.4rem",
    }
});

const ErrorPage = () => {
    const error : any = useRouteError();
    const classes = useStyles();
    
    return (
        <Container className={"main"} maxWidth={"xl"}>
            <Container className={"block"} maxWidth={"xl"}>
                <Box maxWidth={"md"} className={classes.block}>
                    <h1 className={"title"}>Oops!</h1>
                    <p className={"subheader"}>404, Page not found!</p>
                </Box>
            </Container>
            <Container className={classes.pageContent}>
                <Box maxWidth={"sm"} className={classes.block}>
                    <h1 className={classnames(classes.phaseTitle, "title")}>
                        Sorry, an unexpected error has occurred.
                    </h1>
                    <p>
                        {error ? error.data : ""}
                    </p>
                </Box>
            </Container>
        </Container>
    );
}

export default ErrorPage;