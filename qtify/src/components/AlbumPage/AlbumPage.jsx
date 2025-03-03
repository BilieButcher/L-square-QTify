import Section from "../Section/Section";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Songs from "../Songs/Songs";

const AlbumPage = () => {
const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);

//--------------------------------------------------------------------------------------------------------
    const getTopAlbums = async () => {
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
          const data =  await getTopAlbums();
        }
        
        handlePageload();
        
        }, [])
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const getNewAlbums = async () => {
    try{
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
    // console.log(response.data);
    setNewAlbums(response.data);
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
//--------------------------------------------------------------------------------------------------------

// console.log(topAlbums)

    return (
        <div style={{borderBottom:"1px", borderColor:"#2a923a"}}>
        <Section
        title={"Top albums"}
        albums={topAlbums}
        />

        <Section
        title={"New albums"}
        albums={newAlbums}
        />

        <Songs/>


        </div>

    );
}

export default AlbumPage;