import React from 'react';

const HeroSection = () => {
    return(
        <>
            <Hero>
                <HeroContainer>
                    <HeroH1>Introduction</HeroH1>
                    <HeroText>LES CARTES DES ELECTIONS PRESIDENTIELLES</HeroText>
                    <HeroMenu>
                        <HeroItem>
                            <HeroLinks to="2017"><HeroLogo>HeroLogo</HeroLogo>2017</HeroLinks>
                        </HeroItem>
                        <HeroItem>
                            <HeroLinks to="2012"><HeroLogo>HeroLogo</HeroLogo>2012</HeroLinks>
                        </HeroItem>
                    </HeroMenu>
                </HeroContainer>
            </Hero>
        </>
    );
}

export default HeroSection;