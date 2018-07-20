import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row } from 'react-bootstrap';

import { BASE_URL, POSTS_KEY } from '../../constants';
import { PostsComponent } from './PostsComponent';
import Search from '../Shared/Search';

export default class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    hasLocalPosts() {
        return !!localStorage.getItem(POSTS_KEY);
    }

    componentDidMount() {
        if (this.hasLocalPosts()) {
            this.loadPosts();
        } else {
            this.fetchData();
        }
    }

    fetchData() {
        this.isMount = true;

        const postUrl = `${BASE_URL}/posts`;

        axios.get(postUrl)
            .then(response => {
                if (this.isMount) {
                    const posts = response.data;

                    this.setState({
                        posts,
                        filteredPosts: posts
                    });
                    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
                }
            })
            .catch(error => new Error(`Something went wrong! ${error}`));
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    loadPosts() {
        const localPosts = localStorage.getItem(POSTS_KEY);

        if (localPosts) {
            const posts = JSON.parse(localPosts);

            this.setState({
                posts,
                filteredPosts: posts

            });
        }
    }

    searchPost = (searchString) => {

        const allPosts = this.state.posts;

        if (searchString === '') {
            this.setState({ posts: allPosts });
        }

        const filteredPosts = allPosts.filter(item => {
            return item.title.toLowerCase().includes(searchString.toLowerCase());
        });

        this.setState({ filteredPosts });
    }

    render() {

        const { filteredPosts } = this.state;

        if (!filteredPosts) {
            return <Grid>Loading...</Grid>;
        }

        return (
            <Grid className="PostsPage">
                <Row>
                    <Search onSearch={this.searchPost} />
                    {filteredPosts.map(post => {
                        return <PostsComponent post={post} key={post.id} />
                    })}
                </Row>
            </Grid>
        );
    }
}