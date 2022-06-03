import React from "react";
import SingleJobOption from "./SingleJobOption";

const JobOpening = () => {
    const profiles = [
        {
            id: 1,
            jobName: "Community Manager",
            position: "San Francisco, CA",
            dic: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
            img: "https://static.wixstatic.com/media/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.jpg/v1/fill/w_346,h_345,q_90/c837a6_d3dc938f64824d11a95b03666d4dd1b8~mv2.webp",
        },
        {
            id: 1,
            jobName: "Community Manager",
            position: "San Francisco, CA",
            dic: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
            img: "https://static.wixstatic.com/media/c837a6_6660f9c258154a76868d10b6507c6b16~mv2.jpg/v1/fill/w_346,h_345,q_90/c837a6_6660f9c258154a76868d10b6507c6b16~mv2.webp",
        },
        {
            id: 1,
            jobName: "Community Manager",
            position: "San Francisco, CA",
            dic: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
            img: "https://static.wixstatic.com/media/c837a6_868b2c64b65748e79f109b2c78ab2eb4~mv2.jpg/v1/fill/w_346,h_345,q_90/c837a6_868b2c64b65748e79f109b2c78ab2eb4~mv2.webp",
        },
        {
            id: 1,
            jobName: "Community Manager",
            position: "San Francisco, CA",
            dic: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
            img: "https://static.wixstatic.com/media/c837a6_b380e8eac59345638a3d1e927fd926c0~mv2.jpg/v1/fill/w_345,h_345,q_90/c837a6_b380e8eac59345638a3d1e927fd926c0~mv2.webp",
        },
    ];
    console.log(profiles);
    return (
        <div className="mt-3">
            <div className="container bg-danger p-5">
                <div className="pb-5 pt-3 text-center text-white">
                    <h1 className="fontStyle">Job Openings</h1>
                </div>
                <div className="p-3">
                    <div className="row">
                        {profiles.map((profile) => (
                            <SingleJobOption
                                key={profile.id}
                                profile={profile}
                            ></SingleJobOption>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOpening;
