import React from "react";
import { Button, Form } from "react-bootstrap";

const HomeGetInTouch = () => {
    return (
        <section className="get-in-touch-bg py-5">
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div className="get-in-touch-form bg-white p-2 rounded-4 shadow">
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
                                            Leave us a message...
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
                    <div className="col-lg-4 align-self-end">
                        <div className="join-form bg-danger rounded-4 text-light mt-lg-0 mt-3">
                            <div className="p-4">
                                <div className="p-2">
                                    <h5 className="fw-bold pb-2">
                                        Subscribe to Our Newsletter
                                    </h5>
                                    <Form>
                                        <div className="row justify-content-center align-items-center">
                                            <Form.Label>Email</Form.Label>
                                            <div className="col-lg-9">
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Control
                                                        className="rounded-3 py-3 px-4 "
                                                        type="email"
                                                    />
                                                </Form.Group>
                                            </div>

                                            <div className="col-lg-3">
                                                <Button
                                                    variant="warning"
                                                    className="w-100 rounded-3 mx-0 mb-3 py-3 px-4 text-center "
                                                    type="submit"
                                                >
                                                    Join
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeGetInTouch;
