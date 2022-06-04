import React from "react";
import appStore from "../Images/Apple-Store.webp";
import playStore from "../Images/Google-Play.webp";

const Footer = () => {
    return (
        <footer className="pb-5">
            <div className="container">
                <div className="footer-main-text">
                    <div className="col-2 mx-auto ">
                        <h5 className="rounded-bottom-4 text-center bg-red text-light p-3">
                            Tripo Games
                        </h5>
                    </div>
                    <h2 className="text-center pt-3 pb-5">
                        An Immersive Gaming Experience
                    </h2>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-3">
                            <h5 className="fw-bold pb-2">Contact</h5>
                            <p className="text-muted ps-2 m-0 pb-1">
                                Info@mysite.com
                            </p>
                            <p className="text-muted ps-2 m-0 pb-1">
                                Tel: 123-456-7890 500
                            </p>
                            <p className="text-muted ps-2 m-0 pb-1">
                                Terry Francois St
                            </p>
                            <p className="text-muted ps-2 m-0 pb-1">
                                San Francisco, CA 94158
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold pb-2">Navigation</h5>
                            <p className="text-muted ps-2 m-0 pb-1">Games</p>
                            <p className="text-muted ps-2 m-0 pb-1">Careers</p>
                            <p className="text-muted ps-2 m-0 pb-1">About</p>
                            <p className="text-muted ps-2 m-0 pb-1">Contact</p>
                            <p className="text-muted ps-2 m-0 pb-1">
                                Privacy Policy
                            </p>
                            <p className="text-muted ps-2 m-0 pb-1">
                                Terms & Conditions
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold pb-2">Social</h5>
                            <p className="text-muted ps-2 m-0 pb-1">Discord</p>
                            <p className="text-muted ps-2 m-0 pb-1">Twitch</p>
                            <p className="text-muted ps-2 m-0 pb-1">Facebook</p>
                            <p className="text-muted ps-2 m-0 pb-1">YouTube</p>
                            <p className="text-muted ps-2 m-0 pb-1">Twitter</p>
                            <p className="text-muted ps-2 m-0 pb-1">LinkedIn</p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold pb-2">Find Us On</h5>
                            <div className="d-flex">
                                <img src={appStore} alt="" />
                                <img src={playStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
