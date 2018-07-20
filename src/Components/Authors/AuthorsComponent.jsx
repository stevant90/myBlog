import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const AuthorsComponent = ({ author }) => {

    const { name, id } = author;

    return (
        <ListGroup className='h-textCenter'>
            <ListGroupItem bsStyle="info"><Link to={`/authors/${id}`}>{name}</Link></ListGroupItem>
        </ListGroup>
    );
}

AuthorsComponent.propTypes = {
    author: PropTypes.object
};