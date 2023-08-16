
'use client'
import { Box, Button, TextField, Typography , InputAdornment} from "@mui/material";
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
      lineHeight: '2rem',
    },
    myVariant2: {
      color: "#505050",
      fontSize: "1rem",
      fontFamily: 'Sans-Serif',
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      marginTop:'0.5rem',
      textDecoration:'none',
      lineHeight: '2rem',
    },

    myVariant3: {
      color: "#505050",
      fontSize: "1.4rem",
      fontFamily: "Sans-Serif",
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: '2.3rem',
   

    },
    myVariant4: {
      color: "#27AE60",
      fontSize: "0.75rem",
      fontFamily: "Sans-Serif",
      font:'Roboto',
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '1.1rem',
   

    },
   
  },
});

export default function ResetPassword() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
 
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:'100%' , bgcolor:'lightBlue' , height:'57rem' , display:'flex' ,
     flexDirection:'row' , m:'0rem'}}>
     
      {/* pic */}
      <Box sx={{width:'45%' , bgcolor:'lightPink' , height:'59rem', m:'0rem'}}>
      <Image src={'/dog-main.JPG'} alt="dog-main" width={857} height={944} ></Image>
      <Box sx={{width:'3.75rem' , height:'3.75rem',position:' absolute',top:' 12%',left:'5%',
      transform:' translate(-50%, -50%)',color:' white',padding:' 10px', borderRadius:' 5px',}}>
      <Image src={'/pupspotter-logo.PNG'} alt="dog-main"  width={42} height={43}
       style={{marginLeft:'0.4rem'}} />
      <Image src={'/pupspotter.PNG'} alt="dog-main"  width={60} height={16}  />
      </Box>
      <Typography variant="myVariant1" sx={{  position:' absolute',top:' 50%',left:' 20%',
      transform:' translate(-50%, -50%)',color:'white',padding:'10px',borderRadius:'5px',}}>
       Forget Password</Typography>
      </Box>
      {/* login */}
      
      <Box sx={{width:'55%' , bgcolor:'yellow' , height:'59rem', m:'0rem'}}>
      <Image src={'/bg-img-half.JPG'} alt="dog-main" width={1048} height={944} />
      {/* confirmation msg */}
      <Box sx={{position:' absolute', top:' 22%',left:' 73%',transform:' translate(-50%, -50%)',
       bgcolor:'rgba(6, 175, 6, 0.085)', width: "23rem", height: "4rem",
       textAlign:'center' ,p:'0.2rem' ,borderRadius:'0.5rem' }}>
        <Box sx={{width:'11rem',ml:'5.6rem' ,mt:'0.7rem' }}>
        <Typography variant="myVariant4" >
           Congratulations, your password has been reset
           </Typography>
           </Box>
        </Box>
      {/* authentication */}
      <Box sx={{position:' absolute', top:' 50%',left:' 73%',transform:' translate(-50%, -50%)',
                color:' white',}}>
        <Box sx={{ pb:'2.5rem' ,display:'flex' , flexDirection:'column'}}>
         <Typography variant="myVariant3">Create a new login password</Typography>
          <Typography variant="myVariant2">Enter your new password</Typography>
          <TextField typeof="text" sx={{ pb:'0.2rem' ,width:'23rem' , height:'3rem' , }}/>
          <Typography variant="myVariant2">Re-enter password</Typography>
          <TextField
              type='password'
              sx={{ width: "23rem", height: "3rem" }}
             
            />
          
        </Box>
        <Link href={"/pages/home"}>
        <Button variant="contained"  color="primary"
        sx={{backgroundColor:theme.palette.primary.dark, color: 'white',width:'23rem' , height:'3rem' }}>
        <Typography>Log in</Typography>
        </Button>
        </Link>
        <Box sx={{ml:'6.2rem',mt:'1rem' }}>
          
    
      
      
         
        </Box>
      </Box>
      </Box>
    </Box>
    </ThemeProvider>
  )
}
