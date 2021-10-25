import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{ loadGames } from '../actions/gamesAction';
//components
import Game from '../components/Game';
//Styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Home = () => {
//fetch the data games to the State store
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadGames())
  },[dispatch]);
//Get that data back from state store
    const {popular, newGames, upcoming} = useSelector((state) => state.games);
    return (
      <GameList>
          <h2>Upcoming Games</h2>
          <Games>
              {upcoming.map(game => (
                  <Game key={game.id} name={game.name} released={game.released} 
                    image={game.background_image} id={game.id}/>
              ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
              {popular.map(game => (
                  <Game key={game.id} name={game.name} released={game.released} 
                    image={game.background_image} id={game.id}/>
              ))}
          </Games>
          <h2>New Games</h2>
          <Games>
              {newGames.map(game => (
                  <Game key={game.id} name={game.name} released={game.released} 
                    image={game.background_image} id={game.id}/>
              ))}
          </Games>
      </GameList>
    );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
      padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-row-gap: 5rem;
  grid-column-gap: 3rem;

`;

export default Home;