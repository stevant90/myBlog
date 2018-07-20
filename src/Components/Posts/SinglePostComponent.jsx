import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

export const SinglePostComponent = ({ post, author }) => {

    const { title, body } = post;
    const { name } = author;


    return (
        <Panel bsStyle="info" className='h-textCenter'>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Author: {name}</Panel.Body>
            <Panel.Body>{body}</Panel.Body>
        </Panel>
    );
}

SinglePostComponent.propTypes = {
    post: PropTypes.object,
    author: PropTypes.object
};