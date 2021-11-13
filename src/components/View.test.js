import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';



const testArticles ={
    articles: [
        {
            id: '0', 
            headline: "headline",
            createdOn: Date.now(),
            summary: "summary", 
            body: "text",
            author: "author" 
        },
        {
            id: '1', 
            headline: "headline",
            createdOn: Date.now(),
            summary: "summary", 
            body: "text",
            author: "author" 
        },
        {
            id: '2', 
            headline: "headline",
            createdOn: Date.now(),
            summary: "summary", 
            body: "text",
            author: "author" 
        }
    ]
}


test("renders zero articles without errors", async () => {
    render(<View/>)
});

test("renders three articles without errors", async ()=> {
    
    render(<View article={testArticles}/>)

    expect(articles).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.