import React from "react";
import GameCard from "./GameCard";
import Hero from "./Hero";
import HeroAbout from "./HeroAbout";
import HeroOurGame from "./HeroOurGame";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GameCard></GameCard>
            <HeroAbout></HeroAbout>
            <HeroOurGame></HeroOurGame>
        </div>
    );
};

export default Home;
