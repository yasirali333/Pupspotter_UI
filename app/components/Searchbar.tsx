'use client'
import { Box, Button, TextField, Typography , InputAdornment } from "@mui/material";
import Image from "next/image";
import {  createTheme , ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Link from "next/link";


const theme = createTheme({
    typography: {
      myVariant1: {
        color: "black",
        fontSize: "3rem",
        fontFamily: "Sans-Serif",
        font:'Avenir Next',
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: '1rem',
      },
      myVariant7: {
        color: "grey",
        fontSize:'1rem',
        fontFamily: 'Sans-Serif',
        font:'Sofia Pro',
        fontStyle: "normal",
        fontWeight: "400",
        padding:'0.5rem'
     },
  
      myVariant3: {
        color: "#505050",
        fontSize: "1.4rem",
        fontFamily: "Sans-Serif",
        font:'Sofia Pro',
        fontWeight: "700",
        lineHeight: '1.8rem',
     },
      myVariant4: {
        color: "#505050",
        fontSize: "0.7rem",
        fontFamily: "Sans-Serif",
        font:'Sofia Pro',
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: '2.3rem',
     
  
      },
      myVariant5: {
        color: "#064AAC",
        fontSize: "0.8rem",
        fontFamily: "Sans-Serif",
        font:'Product Sans Black',
        fontWeight: "900",
        textDecoration:'underline',
        lineHeight: '1.3rem',
     },
     
    },
  });
export default function Searchbar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{bgcolor:'#fff' , width:'100%' , height:'3.6rem',
       boxShadow: 1 ,display:'flex' , gap:{ xs:'1%',sm:'10%',md:'20%',lg:'20%',xl:'30%'}}} >
      
        <Box sx={{width:'2rem' ,height:'3rem',  display: { xs:"block",sm: "block", md: "block" }}}>
          
        </Box>
        {/* searchbar */}
        <Box sx={{bgcolor:'#F9F9F9',width:{ xs:'16rem',sm:'16rem',md:'17rem',lg:'23rem',xl:'23rem'},height:'2.1rem' ,
       ml:{xs:'15%' , sm:'15%',md:'10%' , lg:'5%' , xl:'2%'} ,pt:'0.25rem',borderRadius:'0.4rem',mt:'0.6rem',display:'flex' ,
      
        gap:{ xs:'10%',sm:'10%',md:'15%',lg:'35%',xl:'32%'} }} >
          <Box sx={{  height:'1.5rem' ,  width:'11rem'}}>
        <input type="text" placeholder="Search.." width={10} height={20}
          style={{ backgroundColor: "#F9F9F9",border: "none",
            outline:'none', paddingBottom: "4px", marginLeft:'0.2rem'}} />
            </Box>
            <Box sx={{mt:'0.35rem', height:'1rem' ,  width:'1rem'}}>
            <Image src={'/search-icon.svg'} alt="search-icon"  width={17} height={17} />
            </Box>
        </Box> 
        {/* logOut button   */}
        <Box sx={{pb:'0.4rem',display:'flex' ,mr:'2rem', mt:{ xs: "0.8rem", md: "0rem" } , ml:{ xs: "10%", md: "0%",lg:'5%',xl:'2%' }}}>
        <Button sx={{mr:'0rem' ,ml:'auto' }} startIcon={<Image src={'/log-out.svg'}
         alt="log-out"  width={24} height={24} />}>
           <Typography variant="myVariant7" sx={{ display: { xs: "none", md: "block" } }}>Log Out</Typography>
         </Button>
        </Box>
    </Box>
    </ThemeProvider>
    
  )
}
