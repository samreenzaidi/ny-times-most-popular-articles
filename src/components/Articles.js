import React from 'react';
import Article from './Article';
import { Container, Grid } from '@material-ui/core';

export default function Articles({ loading, articles }) {
    return (
        <>
            {
                loading ? (
                    "Please wait..."
                ) : (
                <Container>
                    <Grid container spacing={6}>
                        {articles?.map((article) => (
                            <Grid item xs={12} sm={3} key={article.id}>
                                <Article article={article} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>)
            }
        </>
    );
}