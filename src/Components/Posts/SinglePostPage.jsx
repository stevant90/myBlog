import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Glyphicon } from 'react-bootstrap';

import { BASE_URL } from '../../constants';
import { SinglePostComponent } from './SinglePostComponent';
import AuthorPostsPage from './AuthorPostsPage';

export default class SinglePostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            singlePost: {},
            author: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        const postId = nextProps.match.params.id;

        this.fetchPost(postId);
    }

    componentDidMount() {
        const postId = this.props.match.params.id;

        this.fetchPost(postId);
    }

    fetchPost(postId) {
        this.isMount = true;

        const singlePostUrl = `${BASE_URL}/posts/${postId}`;

        axios.get(singlePostUrl)
            .then(response => {
                if (this.isMount) {
                    this.setState({ singlePost: response.data });

                    const { userId } = response.data;
                    const authorUrl = `${BASE_URL}/users/${userId}`;

                    return axios.get(authorUrl)
                        .then(response => this.setState({ author: response.data }))
                }
            })
            .catch(error => new Error(`Something went wrong! ${error}`));
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {

        const { singlePost, author } = this.state;
        const { userId } = singlePost;

        if (!singlePost && !author) {
            return <Grid>Loading...</Grid>
        }

        if (!userId) {
            return <Grid>Loading...</Grid>
        }

        return (

            <Grid className='SinglePostPage'>
                <Row className='SinglePostPage__backBtn h-marginB--sm'>
                    <Link to='/'><Glyphicon glyph='arrow-left' />&nbsp; Go back</Link>
                </Row>
                <Row>
                    <SinglePostComponent post={singlePost} author={author} />
                    <AuthorPostsPage userId={userId} />
                </Row>
            </Grid>

        );
    }
}

SinglePostPage.propTypes = {
    match: PropTypes.object,
};