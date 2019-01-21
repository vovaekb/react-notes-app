import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as noteActions from '../actions/noteActions';
import { Button } from 'react-bootstrap';

class NoteDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: this.props.note
        }

        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(event) {
        this.props.actions.deleteNote(this.state.note);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Detail</h3>
                <p>Title: {this.props.note.title}</p>
                <Button onClick={this.deleteNote}>Delete</Button>
                <Button onClick={() => this.props.history.push('/')}>Back</Button>
            </div>
        )
    }
}

NoteDetail.propTypes = {  
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);