import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Glyphicon } from 'react-bootstrap';

import { BASE_URL } from '../../constants';
import { SingleAuthorComponent } from './SingeAuthorComponent';

export default class SingleAuthorPage extends Component {
    constructor(props) {
        super(props);

        this.state = { author: {} };
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;

        if (userId) {

            this.fetchAuthor(userId);
        }

    }

    fetchAuthor(userId) {
        this.isMount = true;

        const singleAuthorUrl = `${BASE_URL}/users/${userId}`

        axios.get(singleAuthorUrl)
            .then(response => {
                if (this.isMount) {
                    this.setState({ author: response.data });
                }
            })
            .catch(error => new Error(`Something went wrong! ${error}`));
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {


        const { author } = this.state;

        if (!author) {
            return <Grid>Loading...</Grid>;
        }

        return (
            <Grid>
                <Row className='h-marginB--sm'>
                    <Link to='/authors'><Glyphicon glyph='arrow-left' />&nbsp; Go back</Link>
                </Row>
                <Row>
                    <SingleAuthorComponent author={author} />
                </Row>
            </Grid>
        );
    }
}

SingleAuthorPage.propTypes = {
    match: PropTypes.object
};