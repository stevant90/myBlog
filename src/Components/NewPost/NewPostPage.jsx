import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { BASE_URL, POSTS_KEY } from '../../constants';
import NewPostForm from './NewPostForm';


export default class NewPostPage extends Component {

    redirectToHome() {
        this.props.history.push('/');
    }


    savePost(newPost) {
        const postString = localStorage.getItem(POSTS_KEY);

        let myPosts: [];

        if (postString) {
            myPosts = JSON.parse(postString);
        }

        let posts = JSON.parse(newPost);
        myPosts.unshift(posts);

        localStorage.setItem(POSTS_KEY, JSON.stringify(myPosts));
    }

    createRequest = (data) => {
        const requestHeaders = {
            "Content-type": "application/json; charset=UTF-8"
        };

        const randomId = this.randomIntFromInterval(101, 1000);

        const postData = {
            title: data.title,
            body: data.content,
            userId: 1,
            id: randomId
        };

        const requestBody = JSON.stringify(postData);

        return {
            headers: requestHeaders,
            body: requestBody,
            method: 'POST'
        };
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    saveRequest = (formData) => {
        const requestUrl = `${BASE_URL}/posts`;
        const requestOptions = this.createRequest(formData);

        axios.post(requestUrl, requestOptions)
            .then(response => {
                this.savePost(response.data.body);
                this.redirectToHome();
            })
            .catch(error => new Error(`Something went wrong! ${error}`));
    }

    render() {

        return (
            <NewPostForm onSave={this.saveRequest} />
        );
    }
}

NewPostPage.propTypes = {
    history: PropTypes.object
};