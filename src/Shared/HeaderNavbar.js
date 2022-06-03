import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "./CustomLink";

const HeaderNavbar = () => {
    return (
        <div>
            <Navbar bg="" expand="lg" className="p-0">
                <Container>
                    <h5 className="rounded-bottom-4 m-0 bg-danger text-light p-3">
                        Tripo Games
                    </h5>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto bg-light shadow rounded-bottom-4">
                            <CustomLink to="/" class>
                                Home
                            </CustomLink>
                            <CustomLink to="/game" class>
                                Game
                            </CustomLink>
                            <CustomLink to="/careers" class>
                                Careers
                            </CustomLink>
                            <CustomLink to="/about" class>
                                About
                            </CustomLink>
                            <CustomLink to="/contact" class>
                                Contact
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;
