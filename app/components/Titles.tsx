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
    myVariant6: {
      color: "#FFFFFF",
      fontSize: "1rem",
      fontFamily: 'Sans-Serif',
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      padding:'0.5rem'
   },

    myVariant8: {
      color: "#fff",
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
export default function Tiles(props:any) {
  const { name, image } = props;
  return (
    <ThemeProvider theme={theme}>
     {/* title */}
     <Box sx={{bgcolor:'#064AAC' , width:'90%',height:'7.65rem',borderRadius:'0.37rem',
    ml:'5%',mt:'5%' }}>
    <Box sx={{  width:'92%',height:'95%' ,
     display:'flex' ,ml:'5%',}}>
      <Box sx={{pt:'3rem'}}>
        <Typography variant="myVariant8">{name}</Typography>
       </Box>
      <Box sx={{pt:'1.3rem' , ml:{ xs:'30%',sm:'40%',md:'68%',lg:'75%',xl:'79%'}}}>{image}</Box>
    </Box>
    </Box>
    </ThemeProvider>
  )
}
