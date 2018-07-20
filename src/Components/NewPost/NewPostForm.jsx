import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Grid, Row, Col, PageHeader } from 'react-bootstrap';

import { Validation } from './validationService';


export default class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
    }

    handleTitleChange = (event) => {
        const value = event.target.value;

        this.setState({ title: value });
    }

    handleContentChange = (event) => {
        const value = event.target.value;


        this.setState({ content: value });
    }

    isFormValid = () => {

        return Validation('title', this.state.title).valid && Validation('content', this.state.content).valid;

    }

    getFormErrors() {
        this.setState({
            titleError: Validation('title', this.state.title).errorMessage,
            contentError: Validation('content', this.state.content).errorMessage,
            titleValidationState: Validation('content', this.state.title).validationState,
            contentValidationState: Validation('content', this.state.content).validationState
        });
    }

    handleBlur = () => {
        this.setState({
            titleError: '',
            contentError: '',
            titleValidationState: null,
            contentValidationState: null
        });
    }

    handleFormSave = () => {

        this.getFormErrors();

        if (this.isFormValid()) {

            this.props.onSave({
                title: this.state.title,
                content: this.state.content
            });
        }
    }

    render() {
        return (

            <Grid>
                <Row>
                    <Col xs={12}>
                        <form onSubmit={this.handleFormSave} onBlur={this.handleBlur}>

                            <PageHeader className='centered-text'>Create post</PageHeader>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.state.titleValidationState}
                            >
                                <ControlLabel className='post-form-input'>Post title: </ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Enter title"
                                    onChange={this.handleTitleChange}

                                />
                                <FormControl.Feedback />
                                <HelpBlock style={{ color: 'red' }}>{this.state.titleError}</HelpBlock>
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.state.contentValidationState}
                            >
                                <ControlLabel className='post-form-input'>Post content: </ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Post content"
                                    value={this.state.content}
                                    onChange={this.handleContentChange}

                                />
                                <FormControl.Feedback />
                                <HelpBlock style={{ color: 'red' }}>{this.state.contentError}</HelpBlock>
                            </FormGroup>
                            <Button bsStyle='primary' type="submit">Create post</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

NewPostForm.propTypes = {
    onSave: PropTypes.func
};