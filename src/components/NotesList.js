import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class NotesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroup>
                {this.props.items.map(note => {
                    const { id, title } = note;
                    return (
                        <ListGroupItem key={id} header={title}>
                            <span>{title}</span>{' '}
                            <Link to={'/notes/edit/'+id} >Edit</Link>{' '}
                            <Link to={'/notes/detail/'+id}>Detail</Link>
                        </ListGroupItem>
                    );
                })
                }
            </ListGroup>
        );
    }
}