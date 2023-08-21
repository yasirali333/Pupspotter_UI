'use client'
import { Box, Button, TextField, Typography , InputAdornment, IconButton, Paper, Select,MenuItem, Table, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
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
import BarChart from "@/app/components/BarChart";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


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
const columns: GridColDef[] = [
  // { field: 'id', headerName: '', width: 90 },
  {
    field: 'FirstName',
    headerName: 'FIRST NAME',
    width: 300,
    editable: true,
    headerAlign:'left',
    
   
  },
  {
    field: 'secondName',
    headerName: 'SECOND NAME',
    width: 350,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'PHONE NUMBER',
    type: 'number',
    align:'left',
    width: 320,
    editable: true,
    headerAlign:'left'
  },
  {
    field: 'email',
    headerName: 'EMAIL',
    align:'left',
    width: 450,
    editable: true,
    headerAlign:'left'
    // sortable: false,
    // width: 100,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:19023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 3, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:39023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 5, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:59023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 8, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:79023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 10, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:99023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 12, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:11023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 14, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:13023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 16, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:15023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 18, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:17023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
  { id: 20, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:190023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' }, 
  { id: 23, FirstName: 'Collin', secondName: 'Rose Smart', phoneNumber:22023847 , email:'Collinrosesmart@gmail.com' },
  { id: 2, FirstName: 'Akinyemi', secondName: 'Ayomide Joy', phoneNumber:29023847 , email:'akinyemiayomidejoy@gmail.com' },
 
];



export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const selectedIndex = 3;
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
      <Titles name='All User' 
      image={<Image src={'/all-users.svg'} alt="dog-main"  width={75} height={75}/>}/>
    </Box>
   {/* buttons */}
   <Box sx={{ width:'27%' , ml:'68%',mt:'3%',display:'flex', gap:'2rem'}}>
   
    <Box sx={{bgcolor:'#F9F9F9',width:'12.5rem',pt:'0.25rem',borderRadius:'0.4rem',ml:'3rem',display:'flex' ,
      
        gap:'10%' }} >
          <Box sx={{  height:'1.5rem' ,  width:'11rem'}}>
        <input type="text" placeholder="Search.." width={10} height={20}
          style={{ backgroundColor: "#F9F9F9",border: "none",
             paddingBottom: "0rem", marginLeft:'0.2rem'}} />
            </Box>
            <Box sx={{mt:'0.35rem', height:'1rem' ,  width:'1rem'}}>
            <Image src={'/search-icon.svg'} alt="search-icon"  width={17} height={17} />
            </Box>
    </Box>
    <Box>
   <Button variant="contained" startIcon={<Image src={'/send.svg'} alt="dog-main"  width={20} height={20}/>}
   sx={{backgroundColor:theme.palette.primary.dark, height:'3rem' , width:'10rem'}}>
     Download
   </Button>
   </Box>
   </Box>
    {/* table */}
    <Box sx={{width:'90%' , ml:'5%',mt:'1%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    
    </Box>
    </Box>
    </ThemeProvider>
  )
}
