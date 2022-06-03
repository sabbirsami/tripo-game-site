import React from "react";
import { Button, Form } from "react-bootstrap";

const HomeGetInTouch = () => {
    return (
        <section className="get-in-touch-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="get-in-touch-form bg-light p-2 rounded-4">
                            <div className="p-4">
                                <div>
                                    <h2 className="fw-bold">Get in Touch</h2>
                                    <div className="col-lg-9 pb-3">
                                        <p>
                                            I'm a paragraph. Click here to add
                                            your own text and edit me.
                                        </p>
                                    </div>
                                </div>
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label>
                                                    First Name{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Form.Label>
                                                <Form.Control
                                                    className="rounded-4 py-3 px-4"
                                                    type="email"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="col-lg-6">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>
                                                    Last Name{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Form.Label>
                                                <Form.Control
                                                    className="rounded-4 py-3 px-4"
                                                    type="password"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>
                                            Email{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            className="rounded-4 py-3 px-4"
                                            type="email"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>
                                            Example textarea
                                        </Form.Label>
                                        <Form.Control
                                            className="rounded-4"
                                            as="textarea"
                                            rows={3}
                                        />
                                    </Form.Group>

                                    <Button
                                        className="rounded-4 py-3 px-4 w-100 border-0 bg-dark"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section>
    );
};

export default HomeGetInTouch;
