import React from 'react';
import {Card, CardMedia, CardContent, Typography} from "@material-ui/core";

const styles = {
    card: {
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        height: 380
    },
    media: {
        width: 75,
        paddingTop: 16,
        margin: "0 auto"
    }
};

const Article = ({ article }) => {
    return (
        <React.Fragment>
            {article && (
                <Card style={styles.card} id={article.id}>
                    <CardMedia 
                                component="img" 
                                src={article.media?.[0]?.['media-metadata']?.[0]?.url ? article.media?.[0]?.['media-metadata']?.[0]?.url : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} 
                                alt="news-img"
                                style={styles.media}
                                />
                    <CardContent>
                        <Typography color="primary" variant="subtitle1">
                            <a href={article.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {article.title}</a>
                        </Typography> 
                        <Typography color="textSecondary" variant="subtitle2">
                            {article.byline}
                        </Typography>
                        <Typography variant="body2">
                            {article.abstract}
                        </Typography>
                    </CardContent>
                </Card >
            )}
        </React.Fragment>
    );
};
export default Article;