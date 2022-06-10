import React, { useState, useEffect } from 'react'

import { getProductById } from "home/products"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useParams } from "react-router-dom"

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import "../index.css"
import { Link } from "react-router-dom"

const PageContent = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getProductById(id).then((res) => setProduct(res.data))
        } else {
            setProduct(null)
        }
    }, [id])

    if (!product) return (
        <Grid container justifyContent="center">
            <Grid className="loader" item>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Grid>
        </Grid>
    );

    return (
        <Paper elevation={3}>
            <Link to="/">
                Back to Products
            </Link>
            <Grid container>
                <Grid className="product" item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={product.image} height="400px" width="350px" />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container rowGap={1}>
                                <Grid item xs={12}>
                                    <h2>{product.title}</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    Price: <Chip label={`$ ${product.price}`} size="small" color="primary" />
                                </Grid>
                                <Grid item xs={12}>
                                    Category: <Chip label={product.category} size="small" color="success" />
                                </Grid>
                                <Grid item xs={12}>
                                    Description: {product.description}
                                </Grid>
                                <Grid item xs={12}>
                                    Number of available items: <Chip label={product.rating.count} size="small" />
                                </Grid>
                                <Grid item xs={12}>
                                    Rating: <Chip label={product.rating.rate} size="small" />
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PageContent