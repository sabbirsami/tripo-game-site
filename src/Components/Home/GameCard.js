import React from "react";
import heroCard1 from "../../Images/heroCard1.webp";
import heroCard2 from "../../Images/heroCard2.webp";
import heroCard3 from "../../Images/heroCard.webp";
import heroCard4 from "../../Images/heroCard1 - Copy.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";

const GameCard = () => {
    return (
        <div style={{ marginTop: "-150px" }}>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-3 p-2">
                        <div className="game-card-img rounded-4 position-relative">
                            <img
                                src={heroCard1}
                                className="w-100  rounded-4 "
                                alt=""
                            />
                            <div className="text  position-absolute bottom-0 text-light ps-4 start-0">
                                <h5>Kipon</h5>
                                <p>Casual - Free</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-2">
                        <div className="game-card-img rounded-4 position-relative">
                            <img
                                src={heroCard2}
                                className="w-100  rounded-4 "
                                alt=""
                            />
                            <div className="text  position-absolute bottom-0 text-light ps-4 start-0">
                                <h5>Robotrix</h5>
                                <p>RPG - Free</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-2">
                        <div className="game-card-img rounded-4 position-relative">
                            <img
                                src={heroCard3}
                                className="w-100  rounded-4 "
                                alt=""
                            />
                            <div className="text  position-absolute bottom-0 text-light ps-4 start-0">
                                <h5>Treasure Box</h5>
                                <p>Adventure - Free</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-2">
                        <div className="game-card-img rounded-4 position-relative">
                            <img
                                src={heroCard4}
                                className="w-100  rounded-4 "
                                alt=""
                            />
                            <div className="text position-absolute text-light top-50 start-50 translate-middle">
                                <Link to="" className="text-dark fs-1 nav-link">
                                    <p className="text-center m-0 fw-bold">
                                        Explore More
                                    </p>
                                    <p className="text-center p-0 m-0 fw-bold">
                                        <AiOutlineArrowDown></AiOutlineArrowDown>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
