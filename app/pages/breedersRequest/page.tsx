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
  const selectedIndex = 1;
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:'100%' , height:'75rem' ,display:'flex',flexDirection:'row' }}>
    {/* sidebar  */}
   <Box sx={{width:{xs:'0rem',sm:'0rem',md:'14.6rem',xl:'14.6rem'} , height:{xs:'0rem',sm:'0rem',md:'75rem',xl:'75rem'}  ,bgcolor:'#064AAC' }}>
    <SideBar selectedIndex={selectedIndex}/>
  </Box>
  <IconButton
          sx={{ position: "absolute", display: { xs: "block", sm: "block" ,md:'none'} }}
          onClick={toggleSidebar}>
          {isSidebarOpen ?<ListIcon /> : <Box sx={{width:'15rem' ,position:'absolute', height:'75rem' ,bgcolor:'#064AAC' ,zIndex:'1000'}}>
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
    <Box >
      <Titles name='Breeders Request' 
      image={<Image src={'/breeders-request.svg'} alt="dog-main"  width={75} height={75}/>}/>
    </Box>
   
     {/* Request List  And User Information*/}
     <Box sx={{width:'90%',ml:'5%',mt:'3%',gap:'3%',display:'flex',flexDirection:'row'}}>
      {/* Request List */}
      <Box sx={{width:'30%', height:'44rem' ,bgcolor:'#F9F9F9'}}>
      <Box sx={{height:'2.5rem',bgcolor:'rgba(6, 74, 172, 0.1)',pl:'33%' ,pt:'1rem'}}>
        <Typography>Request list</Typography>
      </Box>
      <Box sx={{height:'3rem',bgcolor:'yellow',pt:'0.5rem'}}>
      <Box sx={{bgcolor:'#fff',width:'16rem',pt:'0.25rem',height:'2rem',borderRadius:'0.4rem',ml:'1rem',display:'flex' ,
       gap:'17%' }} >
        <Box sx={{  height:'1.5rem' ,  width:'11rem'}}>
         <input type="text" placeholder="Search.." width={10} height={20}
          style={{ backgroundColor: "#fff",border: "5px",
          paddingBottom: "0rem", marginLeft:'0.2rem'}} />
         </Box>
         <Box sx={{mt:'0.35rem', height:'1rem' ,  width:'1rem'}}>
          <Image src={'/search-icon.svg'} alt="search-icon"  width={17} height={17} />
         </Box>
      </Box>
      </Box>
      {/* list */}
      <Box  sx={{height:'35rem',bgcolor:'pink',pt:'0.5rem'}}>

      </Box>
      </Box>
      {/* User Information */}
      <Box sx={{width:'70%', height:'44rem' ,bgcolor:'#F9F9F9'}}>
      <Box sx={{height:'3.5rem',bgcolor:'rgba(6, 74, 172, 0.1)',display:'flex',
      flexDirection:'row',gap:'45%',pt:'1rem'}}>
        
        <Typography >User Information</Typography>
        <Box sx={{bgcolor:'yellow' }}>
        <Button variant="contained" sx={{height:'2.6rem'}}>Accept</Button>
        <Button variant="outlined"  sx={{height:'2.6rem' , bgcolor:'#fff'}}color="error">Reject</Button>
        </Box>
      </Box>
      <Box sx={{width:'90%' ,ml:'5%' ,mt:'5%' , bgcolor:'lightpink',display:'flex',flexDirection:'row'  }}>
        <Box sx={{bgcolor:'yellow',height:'18rem',width:'30%'}}>
          <Box>
          <Typography>First Name</Typography>
          <Typography>Games</Typography>
          </Box>
          <Box>
          <Typography>Last Name</Typography>
          <Typography>Collin</Typography>
          </Box>
          <Box>
          <Typography>Phone number</Typography>
          <Typography>+175347628345</Typography>
          </Box>
          <Box>
          <Typography>State</Typography>
          <Typography>Taxas</Typography>
          </Box>
        </Box>
        <Box sx={{bgcolor:'lightblue',height:'9rem',width:'60%',mt:'9rem'}}>
          <Box>
            <Typography>Email</Typography>
            <Typography>Akinzzz@universityStudent.com</Typography>
          </Box>
          <Box>
            <Typography>City</Typography>
            <Typography>Taxas</Typography>
          </Box>
        </Box>
        </Box>
        <Box><Typography>Document</Typography></Box>
        <Box sx={{bgcolor:'lightgreen',display:'flex' , flexDirection:'row'}}>
          <Box sx={{bgcolor:'lightblue'}}>
            <Typography>Identity</Typography>
            <Box sx={{width:'30%' , height:'13.47rem'}}>
            <Image src={'/identity.svg'} alt="search-icon" width={309} height={215} />
            </Box>
          </Box>
          <Box sx={{bgcolor:'lightyellow'}}>
            <Typography>Breeder document</Typography>
            <Box sx={{width:'100%' , height:'11.47rem',overflow:'hidden',bgcolor:'lightblue'}}>
            <Image src={'/document.svg'} alt="search-icon" width={309} height={215} 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> </Box>
          </Box>
        </Box>
      </Box>
     </Box>

    
    </Box>
    </Box>
    </ThemeProvider>
  )
}
