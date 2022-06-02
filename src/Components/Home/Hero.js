import React from "react";
import appStore from "../../Images/Apple-Store.webp";
import playStore from "../../Images/Google-Play.webp";

const Hero = () => {
    return (
        <div className="hero-bg" style={{}}>
            <div className="container pt-5">
                <div className="py-5">
                    <div className="pt-lg-5">
                        <div className="hero-content">
                            <div className="py-5">
                                <div className="hero-text">
                                    <h1>Made to Be Played</h1>
                                    <h2 className="fw-light">
                                        The Very Best in Mobile Gaming
                                    </h2>
                                </div>
                                <div className="store py-3">
                                    <img src={appStore} alt="" />
                                    <img
                                        src={playStore}
                                        className="ps-2"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
