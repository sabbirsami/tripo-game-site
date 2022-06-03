import React from "react";

const SingleJobOption = ({ profile }) => {
    console.log(profile);
    return (
        <div className="col-lg-3 pt-3">
            <div className="image ">
                <img className="w-100 rounded-4" src={profile.img} alt="" />
            </div>
            <div className="body-text text-white">
                <h5 className="fw-bold pt-3">{profile.jobName}</h5>
                <p>{profile.position}</p>
                <p className="py-3">{profile.dic}</p>
            </div>
            <button className="btn btn-dark py-2 px-5 rounded-4">Apply</button>
        </div>
    );
};

export default SingleJobOption;
