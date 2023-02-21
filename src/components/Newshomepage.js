import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    Bottomsection,
    Herobutton,
    Heroimage,
    Heromainbottomleftsec,
    Heromainbottomrightsec,
    Heromainsec,
    Heromaintopsection,
    Herosection,
    Herosidesection,
    Hstackflexi,
    StyledNewshomepage,
} from './styled/Newshp.styled';
import retro from './assets/images/image-retro-pcs.jpg';
import laptop from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';
import { NewItems } from './NewItems';
import { TrendingItems } from './TrendingItems';
import { Navbar } from './Navbar';

const Newitems = [
    {
        title: 'Hydrogen VS Electric Cars',
        subtitle: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        subtitle: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        subtitle: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    },
  ]

const Trendings = [
    {
        image : retro,
        no : '01',
        title: 'Reviving Retro PCs',
        subtitle: 'What happens when old PCs are given modern upgrades?'
    },
    {
        image : laptop,
        no : '02',
        title: 'Top 10 Laptops of 2022',
        subtitle: 'Our best picks for various needs and budgets.'
    },
    {
        image : gaming,
        no : '03',
        title: 'The Growth of Gaming',
        subtitle: 'How the pandemic has sparked fresh opportunities.'
    }
]

export const Newshomepage = () => {
  return (
    <Container>
        <StyledNewshomepage>
            <Navbar/>
            <Herosection>
                <Heromainsec>
                    <Heromaintopsection>
                        <Heroimage />
                    </Heromaintopsection>
                    <Hstackflexi>
                        <Heromainbottomleftsec>
                            <h1>
                                The Bright Future of Web 3.0?
                            </h1>
                        </Heromainbottomleftsec>
                        <Heromainbottomrightsec>
                            <p>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                                But is it really fulfilling its promise?
                            </p>
                            <Herobutton>
                                <h6>
                                    Read more
                                </h6>
                            </Herobutton>
                        </Heromainbottomrightsec>
                    </Hstackflexi>
                </Heromainsec>
                <Herosidesection>
                    <h3>
                        New
                    </h3>
                    {Newitems.map((newitem)=>
                        <NewItems
                            key={newitem.title}
                            title={newitem.title}
                            subtitle={newitem.subtitle}
                        />
                    )}
                </Herosidesection>
            </Herosection>
            <Bottomsection>
                {Trendings.map((Trending)=>
                    <TrendingItems
                        key={Trending.no}
                        image={Trending.image}
                        no={Trending.no}
                        title={Trending.title}
                        subtitle={Trending.subtitle}
                    />
                )}
            </Bottomsection>
        </StyledNewshomepage>
        <Attribution>
            <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | News homepage.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
