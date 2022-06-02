import React from "react";
import designGame from "../../Images/designingGame.webp";
import nightGirl from "../../Images/nightGirl.webp";
const HeroAbout = () => {
    return (
        <div>
            <div className="hero-about pt-5">
                <div className="container">
                    <div className="text-center">
                        <h5>About Tripo</h5>
                        <div className="col-lg-4 mx-auto">
                            <h1 className="py-3 fontStyle">
                                Your Source for Mobile Entertainment
                            </h1>
                        </div>
                        <div className="col-lg-7 mx-auto py-2">
                            <p>
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font. I’m a great place for
                                you to tell a story and let your users know a
                                little more about you.
                            </p>
                        </div>
                        <button className="btn btn-danger px-5 py-3">
                            Learn More
                        </button>
                    </div>
                    <div className="col-lg-12 d-lg-block d-none pb-5">
                        <div className="hero-about-img pt-4 mx-auto col-lg-7 position-relative">
                            <div className=" text-center py-5">
                                <img
                                    src={designGame}
                                    alt=""
                                    className=" rounded-4 w-100"
                                />
                            </div>
                            <img
                                className="position-absolute bottom-0 start-0 translate-middle-x "
                                src={nightGirl}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;
