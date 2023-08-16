'use client'
import { Box, Button, TextField, Typography , InputAdornment } from "@mui/material";
import Image from "next/image";
import {  createTheme , ThemeProvider } from "@mui/material/styles";
import React from "react";
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
export default function EmailVerification() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:'100%' , bgcolor:'lightBlue' , height:'57rem' , display:'flex' ,
     flexDirection:'row' , p:'0%' , m:'0%'}}>
     
      {/* pic */}
      <Box sx={{width:'45%' , bgcolor:'lightPink' , height:'58rem', p:'0rem'}}>
      <Image src={'/dog-main.JPG'} alt="dog-main" width={857} height={928} ></Image>
      <Box sx={{width:'3.75rem' , height:'3.75rem',position:' absolute',top:' 12%',left:'5%',
      transform:' translate(-50%, -50%)',color:' white',padding:' 10px', borderRadius:' 5px',}}>
      <Image src={'/pupspotter-logo.PNG'} alt="dog-main"  width={42} height={43}
       style={{marginLeft:'0.4rem'}} />
      <Image src={'/pupspotter.PNG'} alt="dog-main"  width={60} height={16}  />
      </Box>
      <Typography variant="myVariant1" sx={{  position:' absolute',top:' 50%',left:' 20%',
      transform:' translate(-50%, -50%)',color:'white'}}>
        Fogot Password</Typography>
      </Box>
      {/* login */}
      <Box sx={{width:'55%' , bgcolor:'yellow' , height:'58rem', m:'0rem'}}>
      <Image src={'/bg-img-half.JPG'} alt="dog-main" width={1048} height={928} />
      {/* authentication */}
      <Box sx={{position:' absolute', top:' 8%',left:' 93%',transform:' translate(-50%, -50%)',
                }} >
         <Link href={"/pages/loginPage"}>
        <Typography variant="myVariant5">Log in here</Typography>
        </Link>
      </Box>
      <Box sx={{position:' absolute', top:' 50%',left:' 73%',transform:' translate(-50%, -50%)',
                color:' white',}}>
        <Box sx={{ pb:'1rem' ,display:'flex' , flexDirection:'column'}}>
          <Box sx={{width:'21rem'}}>
         <Typography variant="myVariant3">
         Its fine 🤗 we understand you forgot your password
         </Typography>
         </Box>
          <Typography variant="myVariant2">Enter your email address</Typography>
          <TextField typeof="text" sx={{ pb:'0.5rem' ,width:'23rem' , height:'3rem' , }}/>
         
          
        </Box>
        <Link href={"/pages/loginPage/resetPassword"}>
        <Button variant="contained" color="primary" 
        sx={{width:'23rem' , height:'3rem' , color:'#fff'}}>
            <Typography>Reset Password</Typography>
        </Button>
        </Link> 
      </Box>
      </Box>
    </Box>
    </ThemeProvider>
  )
}

