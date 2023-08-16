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
      marginTop:'1rem',
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
      color: "#505050",
      fontSize: "0.7rem",
      fontFamily: "Sans-Serif",
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: '2.3rem',
   

    },
   
  },
});

export default function LoginPage() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
 
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:'100%' , bgcolor:'lightBlue' , height:'58rem' , display:'flex' ,
     flexDirection:'row' , m:'0rem'}}>
     
      {/* pic */}
      <Box sx={{width:'45%' , bgcolor:'lightPink' , height:'58rem', m:'0rem'}}>
      <Image src={'/dog-main.JPG'} alt="dog-main" width={857} height={928} ></Image>
      <Box sx={{width:'3.75rem' , height:'3.75rem',position:' absolute',top:' 12%',left:'5%',
      transform:' translate(-50%, -50%)',color:' white',padding:' 10px', borderRadius:' 5px',}}>
      <Image src={'/pupspotter-logo.PNG'} alt="dog-main"  width={42} height={43}
       style={{marginLeft:'0.4rem'}} />
      <Image src={'/pupspotter.PNG'} alt="dog-main"  width={60} height={16}  />
      </Box>
      <Typography variant="myVariant1" sx={{  position:' absolute',top:' 50%',left:' 20%',
      transform:' translate(-50%, -50%)',color:'white',padding:'10px',borderRadius:'5px',}}>
        welcome</Typography>
      </Box>
      {/* login */}
      <Box sx={{width:'55%' , bgcolor:'yellow' , height:'58rem', m:'0rem'}}>
      <Image src={'/bg-img-half.JPG'} alt="dog-main" width={1048} height={928} />
      {/* authentication */}
      <Box sx={{position:' absolute', top:' 50%',left:' 73%',transform:' translate(-50%, -50%)',
                color:' white',}}>
        <Box sx={{ pb:'3rem' ,display:'flex' , flexDirection:'column'}}>
         <Typography variant="myVariant3">Log in to your account</Typography>
          <Typography variant="myVariant2">Admin Username</Typography>
          <TextField typeof="text" sx={{ pb:'0.5rem' ,width:'23rem' , height:'3rem' , }}/>
          <Typography variant="myVariant2">Password</Typography>
          <TextField
              type={showPassword ? "text" : "password"}
              sx={{ width: "23rem", height: "3rem" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={handleShowPasswordToggle}
                     
                    >
                      {showPassword ? 
                      <Typography variant="myVariant4">Hide </Typography>
                      :  <Typography variant="myVariant4">Show </Typography>}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          
        </Box>
        <Button variant="contained"  color="primary"
        sx={{backgroundColor:theme.palette.primary.dark, color: 'white',width:'23rem' , height:'3rem' }}>
          <Typography>Log in</Typography>
        </Button>
        <Box sx={{ml:'6.2rem',mt:'1rem' }}>
          <Link href={"/pages/loginPage/emailVarification"}>
    
            <Typography variant="myVariant2">Forgot your password? </Typography>
      
          </Link>
        </Box>
      </Box>
      </Box>
    </Box>
    </ThemeProvider>
  )
}
