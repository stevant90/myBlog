export const POSTS_KEY = 'POSTS';

const apiUrls = {
    development: 'https://jsonplaceholder.typicode.com',
    production: 'https://jsonplaceholder.typicode.com'
};

export const BASE_URL = apiUrls[process.env.NODE_ENV];