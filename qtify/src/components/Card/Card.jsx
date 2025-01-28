import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Chip, Tooltip, Typography } from "@mui/material";
import styles from "./Card.module.css"


const Albumcard = ({picture, follows, title, songs}) => {
  console.log(picture + " " + follows + " " + title + " " + songs);
    return (
      <Tooltip title={`${songs} songs`} placement="top" arrow>
      <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.Card}>
              <img src={picture} style={{height:"100%", display:"block" , width:"100%" , borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}/>
                <Chip className={styles.follows} label={`${follows} follows`} style={{color:"white", background:"black"}}/>
            </div><br/>
            
        </div>
        <p style={{color:"white", margin:"2px"}}>{title}</p>
    </div>
    </Tooltip>
    );
}

export default Albumcard;