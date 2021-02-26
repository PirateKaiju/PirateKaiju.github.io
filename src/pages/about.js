import React from 'react';

import Layout from '../components/layout';
import Bio from "../components/bio";
import AboutButton from "../components/aboutbutton";

const personalInfo = [
    {
        id: 1,
        name: 'Github',
        url: 'https://github.com/PirateKaiju',
    },
    {
        id: 2,
        name: 'Twitter',
        url: '',
    },
    {
        id: 3,
        name: 'Linkedin',
        url: '',
    },
    {
        id: 4,
        name: 'Telegram',
        url: '',
    },

];

const AboutPage = ({location}) => (
    <Layout location={location}>
        <div style={{
            display: "grid",
            placeItems: "center",
            width: `100%`,
        }}>
            <div>
                <h1>Sobre</h1>
            </div>
            <Bio />
            <div>

                {personalInfo.map((info) => (
                    <div key={info.id} style={{
                            marginBottom: `0.5em`
                        }}>
                        
                        <AboutButton btntext={info.name} linkTo={info.url} />
                    
                    </div>
                ))}

            </div>
        </div>
    </Layout>
)

export default AboutPage;