import {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import recipeService from "../services/recipe.service";
import RecipeCard from "./RecipeCard";

export default function PublicRecipesList() {
    const classes = useStyles
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const { data, isLoading, error } = recipeService.publicRecipes(page)

    useEffect(() => {
        if (data) 
          setPageCount(data.data.pagination.pageCount);
        
    }, [data]);

    function handlePageChange(value) {
        setPage((p) => {
            if (p === 1) return p;
            if (p === pageCount) return p;
            return value
        })
    }    
    function handlePrevious() {
        setPage((p) => {
        if (p === 1) return p;
        return p - 1;
        });
    }

    function handleNext() {
        setPage((p) => {
        if (p === pageCount) return p;
        return p + 1;
        });
    }




    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>
                <div style={classes.main}>
                    <Grid container spacing={1}>
                        {data.data.items.map((cards, index) => {
                        const { name, instruction } = cards;
                        return (
                            <RecipeCard key={index} name={name} instruction={instruction}/>
                        );
                        })}
                    </Grid>
                </div>
                <div style={classes.footer}>
                    <Pagination count={data.data.pagination.pageCount} page={page} variant="outlined" color="primary" onChange={handlePageChange} />
                </div>
        </div>

}
const useStyles = {
  main: {
    display: "flex",
    justifyContent: "initial"
  },
  footer: {
    display: "grid",
    justifyItems: "center"

  }
};