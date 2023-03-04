import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const IMAGE_URL = "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium";
export default function RecipeCard({name, instruction, author}) {
    const classes = useStyles
    return (
    <div id="card">
        <Grid item>
                <Card style={classes.card}>
                    <CardMedia style={classes.media} image={IMAGE_URL} />
                        <CardContent style={classes.content}>
                            <Typography
                            className={"MuiTypography--heading"}
                            variant={"h6"}
                            gutterBottom
                            >
                            {name}
                            </Typography>
                            <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                            >
                            {instruction}
                            </Typography>
                            <Divider style={classes.divider} light />
                            {author}
                            {/* {faces.map(face => (
                            <Avatar className={classes.avatar} key={face} src={face} />
                            ))} */}
                        </CardContent>
                    </Card>
            </Grid>
    </div>
);
}
const useStyles = {
    card: {
        maxWidth: 300,
        // margin: "auto",
        margin: "20% 10px 10px 10px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: "50px"
    },
    divider: {
        margin: `3 0`
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
        marginLeft: "10px"
        }
    }
};
