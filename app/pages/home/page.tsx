'use client'
import { Box, Button, TextField, Typography , InputAdornment, IconButton, Paper } from "@mui/material";
import Image from "next/image";
import {  createTheme , ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Link from "next/link";
import SideBar from "@/app/components/SideBar";
import Searchbar from "@/app/components/Searchbar";
import Titles from "@/app/components/Titles";
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';

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
    myVariant2: {
      color: "#505050",
      fontSize: "1rem",
      fontFamily: 'Sans-Serif',
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      marginTop:'1rem',
      lineHeight: '1.7rem',
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
export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const selectedIndex=0;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width:'100%' , height:'58rem' ,display:'flex',flexDirection:'row' }}>
      {/* sidebar  */}
     <Box sx={{width:{xs:'0rem',sm:'14.6rem',md:'14.6rem',xl:'14.6rem'} , height:{sm:'0rem',md:'58rem',xl:'58rem'}  ,bgcolor:'lightblue' }}>
      <SideBar selectedIndex={selectedIndex}/>
    </Box>
    <IconButton
            sx={{ position: "absolute", display: { xs: "block", sm: "none" } }}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ?<ListIcon /> : <Box sx={{width:'14.6rem' , height:'58rem' ,bgcolor:'lightblue' }}>
      <SideBar selectedIndex={selectedIndex}/>
    </Box> }
          </IconButton>
    {/* other components of page  */}
    <Box sx={{width:{ xs: "100%", md: "87.4%" }  , height:'58rem' ,bgcolor:'#fff'
    ,display:'flex',flexDirection:'column' }}>
       {/* searchbar */}
    <Box sx={{width:'100%'  ,bgcolor:'yellow' }}>
       <Searchbar/>
    </Box>
    {/* title */}
    <Box sx={{width:'90%' ,height:'12.56rem' ,bgcolor:'#F9F9F9', mt:'5%' ,ml:'5%' }}>
    <Box sx={{width:'90%' ,height:'8.93rem' , mt:'2%' ,ml:'6%' ,display:'flex',flexDirection:'row'}} >
        <Paper  sx={{width:'24%',mr:'2rem'  }}>hey</Paper>
        <Paper  sx={{width:'24%',mr:'2rem'  }}>hey</Paper>
        <Paper  sx={{width:'24%',mr:'2rem'  }}>hey</Paper>
        <Paper  sx={{width:'24%',mr:'2rem'  }}>hey</Paper>
    </Box>
    </Box>
   
     {/* Button to toggle sidebar */}
    
    </Box>
    </Box>
    </ThemeProvider>
  )
}
