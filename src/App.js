import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Nav, Navbar, NavItem, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import NoteDetail from './components/NoteDetail';
import Index from './components/Index';

class App extends Component {

    render() {
        return (
            <Router>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Navbar fluid collapseOnSelect>
                                <Navbar.Collapse>
                                    <Nav pullRight>
                                        <Nav>
                                            <NavItem componentClass={Link} href="/" to="/" active={location.pathname === '/'}>Home</NavItem>
                                            <NavItem componentClass={Link} href="/create" to="/create" active={location.pathname === '/create'}>Create</NavItem>
                                        </Nav>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <Switch>
                                <Route exact path="/" component={Index} />
                                <Route path="/notes/detail/:id" component={NoteDetail} />
                                <Route path="/notes/edit/:id" component={EditNote} />
                                <Route path="/create" component={CreateNote} />
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </Router>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;