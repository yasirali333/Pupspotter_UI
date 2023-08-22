'use client'
import { Box, Button, TextField, Typography , InputAdornment, IconButton, Paper, Select, MenuItem, Modal } from "@mui/material";
import Image from "next/image";
import {  createTheme , ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Link from "next/link";
import SideBar from "@/app/components/SideBar";
import Searchbar from "@/app/components/Searchbar";
import Titles from "@/app/components/Titles";
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreSharp';

const theme = createTheme({
  typography: {
    myVariant16: {
      fontSize: "0.9rem",
      fontFamily: "Sans-Serif",
      font:'Roboto',
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: '1rem',
    },
 
    myVariant4: {
      
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
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '15rem',
  bgcolor: 'background.paper',
  borderRadius:'0.5rem' ,
  p: 6,
};


export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('All Users');
  const [issubmit, setIssubmit] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);    
 };
 const toggleNotification = () => {
  setIssubmit(!issubmit);
};
  const selectedIndex = 6;
  // send dropdown
const handleOptionChange = (event:any) => {
  setSelectedOption(event.target.value);

};

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
      <Titles name='Notification' 
      image={<Image src={'/push-notification.svg'} alt="dog-main"  width={75} height={75}/>}/>
    </Box>
   
     {/* notification box */}
     <Box sx={{width:'26%' , height:'24.5rem' ,ml:'35%',mt:'5%', bgcolor:'#F9F9F9',zIndex:'1'}}>
      <Box sx={{height:'3.3rem' , display:'flex',flexDirection:'row'}}>
        <Button sx={{width:'40%' ,height:'3rem' ,ml:'10%' }} >
          <Typography variant="myVariant16" sx={{color:'#064AAC'}}>Push Notification</Typography>
          </Button>
        <Button sx={{width:'40%',height:'3rem' }} >
        <Typography variant="myVariant16" sx={{color:'#787878'}}>Test message</Typography>
          </Button>
      </Box>
      {/* send */}
      <Box sx={{width:'80%',ml:'10%',mt:'2rem',height:'4.4rem' , }}>
        <Typography>Send</Typography>
        <Box>
        <Select
        value={selectedOption}
        onChange={handleOptionChange}
        sx={{ width: "100%", height:'3rem' ,bgcolor:'#F9F9F9' ,borderRadius:'0.45rem',zIndex:'1' }}
        IconComponent={ExpandMoreIcon}  >
        <MenuItem value="All Users"><Typography variant="myVariant11">All Users</Typography></MenuItem>
        <MenuItem value="Dog Listed"><Typography variant="myVariant11">Total Dog Listed</Typography></MenuItem>
       </Select>

        </Box>

      </Box>
      {/* message */}
      <Box sx={{width:'80%',ml:'10%',mt:'0.5rem',height:'4.6rem' , }}>
      <Typography>message</Typography>
      <Box>
        <TextField sx={{width:'100%',height:'4rem',bgcolor:'#F9F9F9' }}></TextField>
      </Box>
      </Box>
      <Box sx={{ ml:'10%',mt:'1.5rem'}}>
      {/* <Button variant="contained" sx={{backgroundColor:theme.palette.primary.dark,
      height:'3rem' , width:'90%'}} >
      Continue</Button> */}
      <Button variant="contained"
          sx={{ backgroundColor:theme.palette.primary.dark,
            height:'3rem' , width:'90%' }}
          onClick={toggleNotification}>
          {issubmit ?<></>
    // Preview      
          :<Box sx={{width:'26%',zIndex:'1000' ,position:' absolute',top:' 1%',left:'1%',
          transform:' translate(-115%, -67%)'}}> 
          <Box sx={{ width:'600%', height:'24.5rem' ,bgcolor:'#F9F9F9' ,zIndex:'1000'}}>
             {/* <Box sx={{width:'26rem' , height:'24.5rem' , bgcolor:'#F9F9F9'}}> */}
      <Box sx={{height:'3rem' , bgcolor:'#064AAC' , pt:'1.2rem'}}>
       <Typography>Preview</Typography>
      </Box>
      {/* send */}
      <Box sx={{width:'80%',ml:'10%',mt:'2rem',height:'4.4rem' ,display:'flex',flexDirection:'column',pl:'0rem' }}>
        <Typography variant="myVariant16" sx={{color:'#064AAC' ,mr:'80%'}}>Send</Typography>
         <Typography  variant="myVariant16" sx={{color:'#505050',mr:'80%'}}>All Users</Typography>
      </Box>
      {/* message */}
      <Box sx={{width:'80%',ml:'10%',mt:'0.5rem',height:'6.6rem' }}>
      <Typography variant="myVariant16" sx={{color:'#064AAC',mr:'80%'}}>message</Typography>
      <Box>
       <Typography variant="myVariant16"  sx={{color:'#505050',mr:'80%'}}>Lorem ipsum, dolor sit
        amet consectetur adipisicing elit.Odit repellendus.
       </Typography>
      </Box>
      </Box>
      <Box sx={{ml:'5%' ,mt:'2rem'}}>
      {/* <Button variant="contained" sx={{backgroundColor:theme.palette.primary.dark,
      height:'3rem' , width:'90%'}} >
      Continue</Button> */}
       <Button variant="outlined">Edit</Button> 
       {/* modal */}
       <Button onClick={handleOpen} variant="contained">Send</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Box sx={{bgcolor:'pink' , ml:'33%' , width:'5rem',mt:''}}>
      <Image src={'/Tick.svg'} alt="dog-main"  width={63} height={63}/>
    </Box>
    <Box>
      <Box sx={{bgcolor:'yellow', ml:'16%' , width:'10rem' , textAlign:'center'}}>
        <Typography>Successful</Typography>
      </Box>
      <Box sx={{bgcolor:'blue', ml:'1%' , width:'15rem' , textAlign:'center'}}>
        <Typography>Your message has been sent successfully</Typography>
      </Box>
    </Box>
  </Box>
</Modal>
      </Box>
      </Box>
      </Box> }
      Continue
     </Button>
      </Box>
      </Box>
    
    </Box>
    </Box>
    </ThemeProvider>
  )
}
