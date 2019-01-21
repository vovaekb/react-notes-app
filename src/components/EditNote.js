import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as noteActions from '../actions/noteActions';
import { Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateNoteState = this.updateNoteState.bind(this);

        this.state = {
            note: this.props.note,
            title: '',
        }
    }

    updateNoteState(event) {
        const field = event.target.name;
        const note = this .state.note;
        note[field] = event.target.value;
        return this.setState({note: note});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.actions.updateNote(this.state.note);

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Edit Note</h3>
                <Form horizontal className="sort-form" onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={1}>Title</Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                name="title"
                                value={this.props.note.title}
                                onChange={this.updateNoteState} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-group">
                            <input type="submit" value="Save" className="btn btn-primary" />
                        </div>
                    </FormGroup>
              </Form>
            </div>
        );
    }
}

EditNote.propTypes = {  
    note: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

function mapStateToProps(state, ownProps) {
    let note = {id:'', title: ''};
    const noteId = ownProps.match.params.id;
    if (state.notes.length > 0) {
        note = Object.assign({}, state.notes.find(note => note.id == noteId));
    }
    return { note: note };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(noteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);