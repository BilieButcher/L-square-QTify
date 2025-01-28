import React, { useEffect, useState } from "react";
import styles from "./Section.module.css"
import { Box, Button, colors, Grid2, Typography } from "@mui/material";
import Albumcard from "../Card/Card";
import axios from 'axios'

const Section = () => {
const [topAlbums, setTopAlbums] = useState([]);

//-------------------------------------------------------------------------------------------   
const getNewAlbums = async () => {
try{
const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
// console.log(response.data);
setTopAlbums(response.data);
}catch(error){
console.log(error);
}
}

useEffect(() => {

const handlePageload = async () => {
  const data =  await getNewAlbums();
}

handlePageload();

}, [])
//--------------------------------------------------------------------------------------------



    return(
        <div  style={{color:"white", fontFamily:"Poppins"}}>
    
        <Box display="flex" justifyContent="space-between" padding="32px">
            <span>Top Albums</span>
            <button style={{color:"#34C94B", background:"none", border:"none", margin:0, padding:0, cursor:"pointer", fontSize:"medium"}}>Collapse</button>
        </Box>

        <Grid2 container className={styles.grid} columnSpacing={{xs:3, md:5}} spacing={{xs:2, md:7}}>

            {topAlbums.map((index) => {
                // console.log(index.id)
                return(
                    <Grid2 key={index.id}>
                        <Albumcard
                        picture={index.image}
                        follows={index.follows}
                        title={index.title}
                        songs={topAlbums.length}
                        />
                    </Grid2>
                );
            })}

        </Grid2>


    
        </div>
    );
}

export default Section;