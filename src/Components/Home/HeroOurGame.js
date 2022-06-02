import React from "react";
import p1 from "../../Images/p1.webp";
import p2 from "../../Images/p2.webp";
import p3 from "../../Images/p3.webp";
import ghost from "../../Images/ghost.webp";
import ourGameBg from "../../Images/ourGameBg.webp";
import appStore from "../../Images/Apple-Store.webp";
import playStore from "../../Images/Google-Play.webp";

const HeroOurGame = () => {
    return (
        <div>
            <div className="container">
                <div className="our-game-section py-5">
                    <div className="main-text text-center pt-5">
                        <h1 className="fontStyle">Our Games</h1>
                        <div className="col-lg-7 mx-auto">
                            <p>
                                I'm a paragraph. Click here to add your own text
                                and edit me. I’m a great place for you to tell a
                                story and let your users know a little more
                                about you.
                            </p>
                        </div>
                    </div>
                    <div className="py-5 ">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 pt-3">
                                <div className="shadow ourGameCard bg-white p-4 rounded-4">
                                    <div className="p-2">
                                        <div className="profile-img p-3 d-flex align-items-center">
                                            <div className="w-25 p-2 shadow rounded-4">
                                                <img
                                                    src={p1}
                                                    className="w-100 rounded-4"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="profile-text pt-4 ps-3">
                                                <h5 className="fw-bold">
                                                    Kipon
                                                </h5>
                                                <p>Casual - Free</p>
                                            </div>
                                        </div>
                                        <div className="ps-3">
                                            <p>
                                                I'm a paragraph. Click here to
                                                add your own text and edit me.
                                                I’m a great place for you to
                                                tell a story and let your users
                                                know a little more about you.
                                            </p>
                                            <div className="store py-3">
                                                <img src={appStore} alt="" />
                                                <img
                                                    src={playStore}
                                                    className="ps-lg-2"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 pt-3">
                                <div className="shadow p-4 bg-white rounded-4">
                                    <div className="p-2">
                                        <div className="profile-img p-3 d-flex align-items-center">
                                            <div className="w-25 p-2 shadow rounded-4">
                                                <img
                                                    src={p2}
                                                    className="w-100 rounded-4"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="profile-text pt-4 ps-3">
                                                <h5 className="fw-bold">
                                                    Kipon
                                                </h5>
                                                <p>Casual - Free</p>
                                            </div>
                                        </div>
                                        <div className="ps-3">
                                            <p>
                                                I'm a paragraph. Click here to
                                                add your own text and edit me.
                                                I’m a great place for you to
                                                tell a story and let your users
                                                know a little more about you.
                                            </p>
                                            <div className="store py-3">
                                                <img src={appStore} alt="" />
                                                <img
                                                    src={playStore}
                                                    className="ps-lg-2"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mx-auto d-lg-block d-none"
                        style={{ marginTop: "-450px" }}
                    >
                        <div className="text-center w-100">
                            <img className="w-100" src={ourGameBg} alt="" />
                        </div>
                    </div>
                    <div
                        className="row justify-content-between"
                        style={{ marginTop: "-170px" }}
                    >
                        <div className="col-lg-4 pt-3">
                            <div className="shadow p-4 bg-white rounded-4">
                                <div className="p-2">
                                    <div className="profile-img p-3 d-flex align-items-center">
                                        <div className="w-25 p-2 shadow rounded-4">
                                            <img
                                                src={p3}
                                                className="w-100 rounded-4"
                                                alt=""
                                            />
                                        </div>
                                        <div className="profile-text pt-4 ps-3">
                                            <h5 className="fw-bold">Kipon</h5>
                                            <p>Casual - Free</p>
                                        </div>
                                    </div>
                                    <div className="ps-3">
                                        <p>
                                            I'm a paragraph. Click here to add
                                            your own text and edit me. I’m a
                                            great place for you to tell a story
                                            and let your users know a little
                                            more about you.
                                        </p>
                                        <div className="store py-3">
                                            <img src={appStore} alt="" />
                                            <img
                                                src={playStore}
                                                className="ps-lg-2"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 pt-5">
                            <img src={ghost} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOurGame;
