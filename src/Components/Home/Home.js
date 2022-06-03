import React from "react";
import GameCard from "./GameCard";
import Hero from "./Hero";
import HeroAbout from "./HeroAbout";
import HeroOurGame from "./HeroOurGame";
import OurTeam from "./OurTeam";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GameCard></GameCard>
            <HeroAbout></HeroAbout>
            <HeroOurGame></HeroOurGame>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
