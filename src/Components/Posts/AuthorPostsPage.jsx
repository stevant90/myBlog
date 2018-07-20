import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

import { BASE_URL } from '../../constants';

export default class AuthorPostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        const userId = this.props.userId;

        if (userId) {
            this.fetchPosts(userId);
        }
    }

    fetchPosts(userId) {
        this.isMount = true;

        const postByAuthorUrl = `${BASE_URL}/posts?userId=${userId}`

        axios.get(postByAuthorUrl)
            .then(response => {
                if (this.isMount) {
                    this.setState({ posts: response.data });
                }
            })
            .catch(error => new Error(`Something went wrong! ${error}`));
    }

    componentWillUnmount() {
        this.isMount = false;
    }


    render() {

        const { posts } = this.state;

        if (!posts) {
            return <Grid>Loading...</Grid>
        }

        return (
            <div>
                <h4>Posts by same author:</h4>
                <ListGroup>
                    {posts.slice(0, 3).map(post => {
                        return <Link to={`/posts/${post.id}`} key={post.id}>
                            <ListGroupItem>{post.title}</ListGroupItem>
                        </Link>
                    })}
                </ListGroup>
            </div>
        );
    }
}

AuthorPostsPage.propTypes = {
    userId: PropTypes.number
};

