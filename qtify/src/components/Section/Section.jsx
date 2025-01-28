import React, { useEffect, useRef, useState } from "react";
import styles from "./Section.module.css"
import { Box, Button, colors, Grid2, Typography } from "@mui/material";
import Albumcard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({title, albums}) => {
    console.log(albums)
// const [topAlbums, setTopAlbums] = useState([]);
const [carousel, setCorousel] = useState(true);
const [buttonText, setButtonText] = useState("Show all");

//--------------------------------------------------------------------------------------------------------
const handleClick = () => {
    setCorousel((prevState) => (!prevState))
    if(carousel === true){
        setButtonText("Collapse");
    }else{
        setButtonText("Show all");
    }
}

//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------






//-------------------------------------------------------------------------------------------   
// const getNewAlbums = async () => {
// try{
// const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
// // console.log(response.data);
// setTopAlbums(response.data);
// }catch(error){
// console.log(error);
// }
// }

// useEffect(() => {

// const handlePageload = async () => {
//   const data =  await getNewAlbums();
// }

// handlePageload();

// }, [])
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
const TopAlbumsGrid = () => {
    return(<div>
        
    
    <Grid2 container className={styles.grid} columnSpacing={{xs:3, md:5}} spacing={{xs:2, md:7}}>

    {albums.map((index) => {
        // console.log(index.id)

        return(
            <Grid2 key={index.id}>
                <Albumcard
                picture={index.image}
                follows={index.follows}
                title={index.title}
                songs={index.songs.length}
                />
            </Grid2>
        );

    })}

</Grid2></div>);
}
//---------------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------------

    return(
        <div  style={{color:"white", fontFamily:"Poppins"}}>
            
            <Box display="flex" justifyContent="space-between" padding="32px">

        <span>{title}</span>

        <button style={{color:"#34C94B", background:"none", border:"none", margin:0, padding:0, cursor:"pointer", fontSize:"medium"}} onClick={handleClick}>{buttonText}</button>
    </Box>
        
        {carousel ? (<Carousel
            albums={albums}
            />) 
            : <TopAlbumsGrid/>}

    
        </div>
    );
}

export default Section;