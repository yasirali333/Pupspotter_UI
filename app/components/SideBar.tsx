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
export default function SideBar({selectedIndex}:any) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex);
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:'15rem' , height:'58rem' , bgcolor:'#064AAC'}}>
      {/* logo */}
      <Box sx={{width:'3.75rem' , height:'3.75rem',top:' 20%',left:'5%',
      pl:'5rem', pt:'2rem'}}>
      <Image src={'/pupspotter-logo.svg'} alt="dog-main"  width={42} height={43}
       style={{marginLeft:'0.4rem'}} />
      <Image src={'/pupspotter.svg'} alt="dog-main"  width={60} height={16}  />
      </Box>
      {/* tabs */}
      <Box sx={{mt:'3rem'}}>

        <Link href={"/pages/home"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 0 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 0 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(0)} >
          <Image src={'/home.svg'} alt=""  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">Home</Typography>
           </Box>
        </Box>
        </Link>
        <Link href={"/pages/breedersRequest"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 1 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 1 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(1)} >
          <Image src={'/breeders-request.svg'} alt="breeders-request"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">Breeders Request</Typography>
           </Box>
        </Box>
        </Link>
        <Link href={"/pages/newPostVerify"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 2 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 2 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(2)} >
          <Image src={'/new-post-verify.svg'} alt="new-post-verify"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">New Post Verify</Typography>
           </Box>
        </Box>
        </Link>
        <Link href={"/pages/allUsers"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 3 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 3 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(3)} >
          <Image src={'/all-users.svg'} alt="all-users"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">All Users</Typography>
           </Box>
        </Box>
        </Link>
        <Link href={"/pages/breeders"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 4 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 4 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(4)} >
          <Image src={'/breeders.svg'} alt="breeders"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">Breeders</Typography>
           </Box>
        </Box>
        </Link>
        <Link href={"/pages/reportedAbuse"}>
        <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 5 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 5 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(5)} >
          <Image src={'/reported-abuse.svg'} alt="reported-abuse"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">Reported abuse</Typography>
           </Box>
        </Box>
        </Link>
         <Link href={"/pages/pushNotification"}>
         <Box sx={{display:'flex',mt:'0.3rem' ,
          backgroundColor: selectedTabIndex === 6 ? "#083066" : "transparent",
          borderLeft: selectedTabIndex === 6 ? "4px solid #E8D1A7" : "none",}}
          onClick={() => setSelectedTabIndex(6)} >
          <Image src={'/push-notification.svg'} alt="push-notification"  width={20} height={20}
            style={{padding:'0.7rem' ,marginLeft:'1.8rem'}}/>
           <Box sx={{ textAlign:'center' , mt:'0.75rem'}}>
            <Typography variant="myVariant6">Push notification</Typography>
           </Box>
        </Box>
        </Link>
      </Box>
      
    </Box>
    </ThemeProvider>
  )
}
