import React from 'react';
//Styling and animation
import styled from "styled-components"
import {motion} from "framer-motion"
//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
//images



const GameDetail = () => {
    const history = useHistory()
    //exit detail
    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push("/")
            window.location.reload()
        }
    }

    //get platform images 


    const {screen,game,isLoading} = useSelector((state) => state.detail)

    return(
        <>
        
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail>
                <Stats>
                    <div className="rating">
                    <h3>{game.name}</h3>
                    <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map((data) => (
                            <h3 key={data.platform.id}>
                                {data.platform.name},
                            </h3>))}
                        </Platforms>           
                    </Info>
                </Stats>
                <Media>
                    <img  src={game.background_image} alt="game"/>
                </Media>
                <Description>
 
                    <div className="gallery">
                        {screen.results.map((screen) =>(
                            <img src={screen.image} key={screen.id} alt="desc"/>
                        ))}
                    </div>
                </Description>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width:100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background:white;
    }    
`

const Detail = styled(motion.div)`
    width:80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    z-index: 10;
    color: black;
    img{
        width:100%;
    }
`

const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align:center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem 0rem;
    img{
        width:100%;
        height:100%;
    }
`
const Description =styled(motion.div)`
    margin:5rem 0rem;
`
export default GameDetail