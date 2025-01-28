import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";
import styles from "../Section/Section.module.css"
import { Box, Grid2 } from "@mui/material";
import {Songcard} from "../Card/Card";
import {SongCarousel} from "../Carousel/Carousel";



const Songs = () => {


//--------------------------------------------------------------------------------------------------------
const [songs, setSongs] = useState([]);

const getSongs = async () => {
    try{
        const response = await axios.get("https://qtify-backend-labs.crio.do/songs")
    // console.log(response.data);
    setSongs(response.data);
    }catch(e){
        console.log(e);
    }
}

useEffect(() => {
   const pageLoad = async () => {
    const data = await getSongs();
   } 
    pageLoad();
},[])
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

return(
    <div>
    <div  style={{color:"white", fontFamily:"Poppins"}}>
                
                <Box display="flex" justifyContent="space-between" padding="32px">
    
            <span>{"Songs"}</span>
    
            
        </Box>
        
        <SongCarousel
        songList = {songs}
        />
    </div>
    </div>
);

}

export default Songs;