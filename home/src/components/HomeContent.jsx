import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom"


import "../index.css"

import { getProducts } from "../product"

const HomeContent = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((res) => setProducts(res.data))
    }, [])

    if (products.length === 0) {
        return (
            <Grid container justifyContent="center">
                <Grid className="loader" item>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container spacing={2}>
            {products.map((obj) =>
                <Grid key={obj.id} item xs={3}>
                    <Link to={`/product/${obj.id}`} >

                        {/* <Paper className="cards" elevation={3}> */}
                        <Grid container justifyContent="center">
                            <Grid item xs={8}>
                                <img src={obj.image} class height="100px" width="100px" />
                            </Grid>
                            <Grid item xs={12}>{obj.title}</Grid>
                            <Grid item xs={12}>
                                Price: <Chip label={`$ ${obj.price}`} size="small" color="primary" />
                            </Grid>
                        </Grid>
                    </Link>
                    {/* </Paper> */}
                </Grid>
            )}
        </Grid>
    )
}

export default HomeContent