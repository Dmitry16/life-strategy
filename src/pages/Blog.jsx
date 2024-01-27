import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Article as ArticleIcon } from '@mui/icons-material';
import Article from '../components/Article';
import { articles } from '../data/articles';

const Blog = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Typography variant="h5" component="h1" color="text.darkBlue">
                {'> Blog <'}
            </Typography>
            <Stack spacing={0}>
                {articles.map(article => (
                    <Article
                        key={article.id}
                        {...article}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default Blog;
