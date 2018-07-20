import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, FormGroup, FormControl } from 'react-bootstrap';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { searchString: '' };
    }

    handleInputChange = (event) => {
        const searchString = event.target.value;

        this.setState({ searchString });

        this.props.onSearch(searchString);
    }

    render() {
        return (
            <Grid>
                <FormGroup
                    controlId='formBasicText'
                >
                    <FormControl
                        type='search'
                        value={this.state.searchString}
                        placeholder='Search post'
                        onChange={this.handleInputChange}
                        className='h-paddingALL--md'
                    />
                </FormGroup>
            </Grid>
        );
    }
}

Search.propTypes = {
    onSearch: PropTypes.func
};

