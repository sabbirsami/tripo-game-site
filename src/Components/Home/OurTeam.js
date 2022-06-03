import React from "react";
import ourTeamBottom from "../../Images/ourTeamBottom.webp";

const OurTeam = () => {
    return (
        <section className="our-team-section">
            <div className="container position-relative ">
                <div className="py-5">
                    <div className="py-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-light py-5">
                                    <div className="py-5">
                                        <h5>Join Our Team</h5>
                                        <div className="col-lg-12">
                                            <h1 className="fontStyle pb-4">
                                                It takes the world's best talent
                                                to change the game.
                                            </h1>
                                        </div>
                                        <button className="btn btn-warning rounded-4 py-3 px-4">
                                            Explore Careers
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="py-lg-5">
                                    <div className="position-absolute bottom-0 end-0">
                                        <img
                                            className=""
                                            src={ourTeamBottom}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
