import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Grid } from 'react-bootstrap';

export const SingleAuthorComponent = ({ author }) => {

    if (!author) {
        return <Grid>Loading...</Grid>;
    }

    let companyName;
    let street;
    let city;
    let zipcode;
    let latitude;
    let longitude;

    if (author.company && author.address) {
        companyName = author.company.name;
        street = author.address.street;
        city = author.address.city;
        zipcode = author.address.zipcode;
   
    }

    const { name, username, email, phone } = author;

    return (
        <div>
            <Panel bsStyle="info">
                <Panel.Heading className='h-textCenter'>
                    <Panel.Title>{name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p><span>Username:</span> {username}</p>
                    <p><span>Email:</span> {email}</p>
                    <p><span>Phone:</span> {phone}</p>
                </Panel.Body>
            </Panel>
            <Panel bsStyle="info">
                <Panel.Heading className='h-textCenter'>
                    <Panel.Title>Address</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p><span>Street:</span>{street}</p>
                    <p><span>City:</span> {city}</p>
                    <p><span>Zip-code:</span> {zipcode}</p>
                </Panel.Body>
            </Panel>
            <Panel bsStyle="info">
                <Panel.Heading className='h-textCenter'>
                    <Panel.Title>Company</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p><span>Name:</span> {companyName}</p>
                </Panel.Body>
            </Panel>
        </div>
    );
}

SingleAuthorComponent.propTypes = {
    author: PropTypes.object
};