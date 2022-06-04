import React from "react";

const Founder = ({ founder }) => {
    return (
        <div className="col-lg-3">
            <div className="p-2">
                <img className="w-100 rounded-4" src={founder.img} alt="" />
                <h5 className="fw-bold pt-3">{founder.name}</h5>
                <p>{founder.position}</p>
            </div>
        </div>
    );
};

export default Founder;
