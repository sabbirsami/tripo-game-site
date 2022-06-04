import React from "react";
import exportSectionImage from "../../Images/shutterstock_1763379488.webp";

const OurOffer = () => {
    return (
        <div className="our-offer-section ">
            <div className="container py-lg-5">
                <div className="py-lg-5">
                    <div className="py-lg-5">
                        <div className="py-5">
                            <div className="row justify-content-between">
                                <div className="col-lg-4 text-white">
                                    <h5 className="fw-bold">Our Offices</h5>
                                    <h1 className="fontStyle py-3">
                                        Our Studio in San Francisco
                                    </h1>
                                    <p>
                                        I'm a paragraph. Click here to add your
                                        own text and edit me. It’s easy. Just
                                        click “Edit Text” or double click me to
                                        add your own content and make changes to
                                        the font. I’m a great place for you to
                                        tell a story and let your users know a
                                        little more about you.
                                    </p>
                                </div>
                                <div className="col-lg-4 py-lg-3 py-3">
                                    <div className="explore-opportunities bg-light rounded-4 position-relative">
                                        <div className="p-4">
                                            <div className="position-absolute top-0 start-50 translate-middle">
                                                <img
                                                    className="pb-5"
                                                    src={exportSectionImage}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="p-3">
                                                <h5 className="fw-bold pt-5 pb-3">
                                                    We’d Love to Work With You
                                                </h5>
                                                <p>
                                                    I'm a paragraph. Click here
                                                    to add your own text and
                                                    edit me. Let your users get
                                                    to know you.
                                                </p>
                                                <button className="btn btn-dark rounded-4 py-3">
                                                    Explore Opportunities
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;
