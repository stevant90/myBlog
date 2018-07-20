import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';

import { BASE_URL } from '../../constants';
import { AuthorsComponent } from './AuthorsComponent';

export default class AuthorsPage extends Component {
    constructor(props) {
        super(props);

        this.state = { authors: [] };
    }

    componentDidMount() {

        this.fetchAuthors();
    }

    fetchAuthors() {
        this.isMount = true;

        const authorsUrl = `${BASE_URL}/users`;

        axios.get(authorsUrl)
            .then(response => {
                if (this.isMount) {
                    this.setState({ authors: response.data });
                }
            })
            .catch(error => new Error(`Something went wrong! ${error}`));

    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {

        const { authors } = this.state;

        if (!authors) {
            return <Grid>Loading...</Grid>
        }

        return (
            <Grid>
                {authors.map(author => {
                    return <AuthorsComponent author={author} key={author.id} />
                })}
            </Grid>
        );
    }
}