import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotesList from './NotesList';

class Index extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            notes: [],
            error: null
        }
    }

    render() {
        return (
            <div>
                <h1>Notes</h1>
                <div>
                    <NotesList items={this.props.notes} /> 
                </div>
            </div>
        );
    }
}

Index.propTypes = {
    notes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps)(Index);