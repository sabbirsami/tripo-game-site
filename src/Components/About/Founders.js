import React from "react";
import Founder from "./Founder";

const Founders = () => {
    const founders = [
        {
            id: 1,
            name: "Daisy Suarez",
            position: "CTO",
            img: "https://static.wixstatic.com/media/c837a6_b037837537d748ae8f29d375c11cc7c1~mv2.jpg/v1/fill/w_338,h_451,fp_0.5_0.46,q_90/c837a6_b037837537d748ae8f29d375c11cc7c1~mv2.webp",
        },
        {
            id: 2,
            name: "Ray Finigan",
            position: "Senior Game Developer",
            img: "https://static.wixstatic.com/media/c837a6_a879b65578d44053a49978975bc03c78~mv2.jpg/v1/fill/w_338,h_451,fp_0.47_0.38,q_90/c837a6_a879b65578d44053a49978975bc03c78~mv2.webp",
        },
        {
            id: 3,
            name: "Tao Deng",
            position: "Senior Game Developer",
            img: "https://static.wixstatic.com/media/c837a6_698f5b147b464ade9a05a8bded6799c7~mv2.jpg/v1/fill/w_339,h_451,q_90/c837a6_698f5b147b464ade9a05a8bded6799c7~mv2.webp",
        },
        {
            id: 4,
            name: "Ben Singleton",
            position: "Senior Game Developer",
            img: "https://static.wixstatic.com/media/c837a6_a9344c3157b04a70bcf20a9b0ad4e463~mv2.jpg/v1/fill/w_338,h_451,q_90/c837a6_a9344c3157b04a70bcf20a9b0ad4e463~mv2.webp",
        },
    ];
    return (
        <div>
            <div
                className="container pb-5 text-light text-center"
                style={{ backgroundColor: "#272443" }}
            >
                <div className="p-5">
                    <h1 className="fontStyle py-5">Meet the Founders</h1>
                    <div className="row">
                        {founders.map((founder) => (
                            <Founder
                                key={founder.id}
                                founder={founder}
                            ></Founder>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founders;
