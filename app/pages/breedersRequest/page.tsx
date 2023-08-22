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
import Accept from '@mui/icons-material/CheckCircle';
import Reject from '@mui/icons-material/CancelRounded';

const theme = createTheme({
  typography: {
    myVariant17: {
      color: "#787878",
      fontSize: "0.875rem",
      fontFamily: 'Sans-Serif',
      font:'Sofia Pro',
      fontWeight: "400",
      lineHeight: '1.1rem',
    },

    myVariant18: {
      color: "#1D1D1D",
      fontSize: "1rem",
      fontFamily: "Sans-Serif",
      font:'Sofia Pro',
      fontWeight: "400",
      lineHeight: '1.4rem',
   

    }, 
  },
});
export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedList, setSelectedList] = useState(0);
  // const [isRequestListOpen, setIsRequestListOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // const toggleRequestListOpen = () => {
  //   setIsRequestListOpen(!isRequestListOpen);
  //   console.log('isRequestListOpen:', isRequestListOpen);
  // };
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
          {isSidebarOpen ? <ListIcon /> : <Box sx={{width:'15rem' ,position:'absolute', height:'75rem' ,bgcolor:'#064AAC' ,zIndex:'1000'}}>
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
     
        <Box sx={{width:'30%', height:'54rem' , display: { xs: "block", sm: "block" ,md:'block'},zIndex:'10000',bgcolor:'#F9F9F9',
     '@media (max-width: 500px)': {
      width:'40%'
    },
   
     }}>
      <Box sx={{height:'2.5rem',bgcolor:'rgba(6, 74, 172, 0.1)',pl:{xs:'11%',sm:'22%',md:'33%'},pt:'1rem'}}>
        <Typography variant="myVariant17" sx={{fontSize:{xs:'1.1rem',sm:'1.14rem'} ,color:'#064AAC'}}>Request list</Typography>
      </Box>
      <Box sx={{height:'3rem',pt:'0.5rem'}}>
      <Box sx={{bgcolor:'#fff',width:'90%',pt:'0.25rem',height:'2rem',borderRadius:'0.4rem',ml:'5%',
      display: 'flex',justifyContent: 'space-between',alignItems: 'center',flexWrap:'wrap'  }} >
        <Box sx={{  height:'1.5rem' ,  width:'4rem' ,}}>
         <input type="text" placeholder="Search.." 
          style={{ backgroundColor: "#fff",width:'100%',border: "none",padding: '0.2rem 0.5rem',
          paddingBottom: "0rem", marginLeft:'0.2rem'}} />
         </Box>
         <Box sx={{ height:'1rem' ,  width:'1rem' , mr:'3%'}}>
          <Image src={'/search-icon.svg'} alt="search-icon"  width={17} height={17} />
         </Box>
      </Box>
      </Box>
      {/* list */}
      <Box  sx={{height:'auto',pt:'0.5rem',pl:'5%' ,display:'flex',flexDirection:'column', gap:'0.3rem',
    maxHeight: '47rem',
    overflowY: 'auto'}}>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 0 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 0 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(0)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 1 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 1 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(1)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 2 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 2 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(2)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 3 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 3 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(3)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 4 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 4 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(4)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 5 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 5 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(5)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 6 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 6 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(6)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      <Box sx={{width:'90%', bgcolor:'#fff' ,height:'4.6rem',display:'flex',flexDirection:'column',
       pl:'5%',pt:'3%', backgroundColor: selectedList === 7 ? 'rgba(6, 74, 172, 0.1)' : "#fff",
       borderLeft: selectedList === 7 ? "4px solid #064AAC" : "none",}} className='list-boxes'
       onClick={() => setSelectedList(7)} >
          <Box>
          <Typography variant="myVariant17" sx={{color:'#064AAC',fontWeight:'700'}}>
            Gates Collins</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Request date:</Typography>
          <Typography variant="myVariant17">24/01/2022</Typography>
          </Box>
          <Box  sx={{display:'flex',flexDirection:'row'}} className='list-text'>
          <Typography variant="myVariant17">Location:</Typography>
          <Typography variant="myVariant17">Taxas</Typography>
          </Box>
      </Box>
      </Box>
          </Box>
        
      {/* User Information */}
      <Box sx={{width:'70%', height:'54rem' ,bgcolor:'#F9F9F9' ,
     '@media (max-width: 500px)': {
      width:'60%'
    },}}>
      <Box sx={{height:'4.3rem',bgcolor:'rgba(6, 74, 172, 0.1)' ,display: 'flex',justifyContent: 'space-between',
      alignItems: 'center',flexWrap:'wrap',pt:'0.1rem' ,pl:'5%' }}>
        
        <Typography sx={{mt:{xs:'0rem',sm:'0.2rem'},color:'#064AAC'}} >User Information</Typography>
        <Box sx={{mr:'4%' , display:'flex',flexDirection:'row',gap:'3%' }}>
        <Button variant="contained" sx={{height:'2.6rem',display:{xs:'none',sm:'block'}}}>Accept</Button>
        <Button variant="outlined"  sx={{height:'2.6rem',display:{xs:'none',sm:'block'}, bgcolor:'#fff'}}color="error">Reject</Button>
         <Box  sx={{display:{xs:'Block',sm:'none'},color:'#064AAC'}}><Accept/></Box>
         <Box  sx={{display:{xs:'Block',sm:'none'},color:'red'}}><Reject/></Box>
         </Box>
      </Box>
      <Box sx={{width:'90%' ,ml:'5%' ,mt:'4%' ,display:'flex',flexDirection:'row',
    '@media (max-width: 700px)': {
      flexDirection:'column',
    },  }}>
        <Box sx={{height:'20rem',width:{md:'30%',lg:'25%'} ,display:'flex',flexDirection:'column', gap:'2rem'}}>
          <Box>
          <Typography variant="myVariant17">First Name</Typography><br/>
          <Typography variant="myVariant18">Games</Typography>
          </Box>
          <Box>
          <Typography variant="myVariant17">Last Name</Typography><br/>
          <Typography variant="myVariant18">Collin</Typography>
          </Box>
          <Box>
          <Typography variant="myVariant17">Phone number</Typography><br/>
          <Typography variant="myVariant18">+175347628345</Typography>
          </Box>
          <Box>
          <Typography variant="myVariant17">State</Typography><br/>
          <Typography variant="myVariant18">Taxas</Typography>
          </Box>
        </Box>
        <Box sx={{height:'9rem',width:'60%',mt:'9.2rem' ,pl:'0.5rem',display:'flex',flexDirection:'column', gap:'2rem',
       '@media (max-width: 700px)': {
        mt:'0rem'
      }}}>
          <Box>
            <Typography variant="myVariant17">Email</Typography><br/>
            <Typography variant="myVariant18" sx={{fontSize:{xs:'0.6rem',sm:'0.8rem'},
          fontWeight:{xs:'600',sm:'600'},}}>
              Akinzzz@universityStudent.com</Typography>
          </Box>
          <Box>
            <Typography variant="myVariant17">City</Typography><br/>
            <Typography variant="myVariant18">Taxas</Typography>
          </Box>
        </Box>
        </Box>
        <Box sx={{ml:'5%',mt:'2%'}}>
          <Typography variant="myVariant18" sx={{fontSize:'1.4rem',fontWeight:'700',color:'#064AAC'}}>Document</Typography>
        </Box>
        <Box sx={{width:'90%',display:'flex' , flexDirection:{xs:'column',sm:'row',},ml:'5%',gap:'5%',
      }}>
         
     <Box sx={{ width: {xs:'58%',sm:'48%',},height: {xs:'8rem',sm:'',}, position: 'relative' ,}}>
  <Typography variant="myVariant17">Identity</Typography>
  <Box
    sx={{
      width: '100%',
      paddingTop: '56.4%', 
      backgroundColor: 'rgba(6, 74, 172, 0.7)',
      zIndex: '100',
      position: 'absolute',
      borderRadius: '0.5rem',
      textAlign: 'center',
      color: 'white',
    }}
  >
    <Typography
      sx={{position: 'absolute',top: '50%', left: '50%',  transform: 'translate(-50%, -50%)', 
        color: 'white',  }}>
          <Image src={'/send.svg'} alt="dog-main"  width={20} height={20}/>
      Download
    </Typography>
  </Box>
  <Box
    sx={{
      width: '100%',
      paddingBottom: '52.08%', // Adjusted for 48% container and image aspect ratio (215/409)
      overflow: 'hidden',
      mt: '0rem',
      borderRadius: '0.6rem',
    }}
  >
    <Image
      src={'/identity.svg'}
      alt="identity"
      width={409}
      height={215}
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
  </Box>
</Box>
<Box sx={{ width: '48%', position: 'relative' ,
 '@media (max-width: 600px)': {
  width:'58%',
  height:'8rem',
 
}
}}>
  <Typography variant="myVariant17">
  {/* sx={{fontSize:{xs:'0.55rem' , sm:'0.9rem'},
  fontWeight:{xs:'500' , sm:'400'}}} */}
    Breeder document</Typography>

  <Box
    sx={{
      width: '100%',
      paddingTop: '56.4%', // Adjusted to maintain the aspect ratio of 409x215
      backgroundColor: 'rgba(6, 74, 172, 0.7)',
      zIndex: '100',
      position: 'absolute',
      borderRadius: '0.5rem',
      textAlign: 'center',
      color: 'white',
    }}
  >
    <Typography
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        gap:'1%'
      }}
    >
      <Image src={'/send.svg'} alt="dog-main"  width={20} height={20}/>
      Download
    </Typography>
  </Box>
  <Box
    sx={{
      width: '100%',
      height:'44%',
      overflow: 'hidden',
      mt: '0rem',
      borderRadius: '0.6rem',
    }}
  >
    <Image
      src={'/document.svg'}
      alt="document"
      width={409}
      height={215}
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
  </Box>
</Box>


        </Box>
      </Box>
     </Box>
    </Box>
    </Box>
    </ThemeProvider>
  )
}
