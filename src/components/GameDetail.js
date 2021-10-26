import React from 'react';
//Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';

const GameDetail = (e) => {
    //Data
    const { game } = useSelector(state => state.detail);
    
    return (
       <CardShadow>
           <Detail>
               <div className="stats">
                   <div className="rating">
                       <h3>{game.results[0].name}</h3>
                       <p>Rating: {game.results[0].rating}</p>
                   </div>
                   <div className="info">
                       <h3>Platforms</h3>
                       <div className="platforms">
                           {game.results[0].platforms.map((data) => (
                               <h3 key={data.platform.id}>{data.platform.name}</h3>
                           ))}
                       </div>
                   </div>
                   <div className="media">
                       <img src={game.results[0].background_image} alt="image"/>
                   </div>
                   <div className="gallery">
                       {game.results[0].short_screenshots.map(screen => (
                           <img key={screen.id} src={screen.image} alt="image"/>
                       ))}
                   </div>
               </div>
           </Detail>
       </CardShadow>
    )
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left:0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: orange;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`;
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`

export default GameDetail;
