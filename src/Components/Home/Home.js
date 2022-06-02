import React from "react";
import GameCard from "./GameCard";
import Hero from "./Hero";
import HeroAbout from "./HeroAbout";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GameCard></GameCard>
            <HeroAbout></HeroAbout>
        </div>
    );
};

export default Home;
