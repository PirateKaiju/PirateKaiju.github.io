import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
//import Image from 'gatsby-image';

import avatar from "../images/avatar.png";

/*const Bio = () => {

    const data = useStaticQuery(graphql`
        query AvatarQuery {
            avatar: file(relativePath: {eq: "avatar.png"}) {
                childImageSharp {
                    fixed (width:100, height:100){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const avatar = data?.avatar?.childImageSharp?.fixed;

    return (
        <div>
            <Image 
                fixed={avatar}
                
            ></Image>
        </div>
    );

}*/



/*export const avatarQuery = graphql`
    query AvatarQuery {
        avatar: file(relativePath: {eq: "avatar.png"}) {
            childImageSharp {
                fixed (width:100, height:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`*/

const Bio = () => {

    /*const data = useStaticQuery(graphql`
        query AvatarQuery {
            avatar: file(relativePath: {eq: "avatar.png"}) {
                childImageSharp {
                    fixed (width:100, height:100){
                        src
                    }
                }
            }
        }
    `);

    const avatarSrc = data?.avatar?.childImageSharp?.fixed?.src;

    console.log(data?.avatar?.childImageSharp?.fixed?.src);*/

    return(
        <div>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    
                }}
            >
                <img src={avatar} alt="Avatar" style={{
                    objectFit: "cover",
                    width: `100px`,
                    height: `100px`,
                    borderRadius: `50%`,
                }}/>
            </div>

            <div>
                <h4>@PirateKaiju</h4>
            </div>
        </div>
    );

}

export default Bio;