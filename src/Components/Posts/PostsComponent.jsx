import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

export const PostsComponent = ({ post }) => {

    const { title, body, id } = post;

    return (
        <Panel bsStyle='primary' className='h-textCenter'>
            <Panel.Heading>
                <Panel.Title><Link to={`/posts/${id}`}>{title}</Link></Panel.Title>
            </Panel.Heading>
            <Panel.Body>{body}</Panel.Body>
        </Panel>
    );
}

PostsComponent.propTypes = {
    post: PropTypes.object
};