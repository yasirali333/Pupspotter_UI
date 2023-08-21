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


const theme = createTheme({
  typography: {
    myVariant13: {
      color: "#787878",
      fontSize: "1rem",
      fontFamily: "Sans-Serif",
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: '1rem',
      letterSpacing: '0.01rem',
    },
    myVariant11: {
      color: "#787878",
      fontSize: "0.92rem",
      fontFamily: 'Sans-Serif',
      font:'Sofia Pro',
      fontStyle: "normal",
      fontWeight: "400",
      marginTop:'1rem',
      lineHeight: '1rem',
    },

    myVariant9: {

      font: 'Sofia Pro',
      fontSize: '1.3rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.5rem', 
      letterSpacing: '0.01rem',
   

    },
    myVariant10: {
      
      font:' Sofia Pro',
      fontSize:' 2.25rem',
      fontStyle:' normal',
      fontWeight:' 500',
      lineHeight:' 4rem', 
      letterSpacing:' -0.09rem',
   

    },
    myVariant12: {
      color: '#787878',
      fontSize: "1.1rem",
      fontFamily: "Sans-Serif",
      font:'Sofia Pro',
      fontWeight: "700",
      lineHeight: '1.6rem',
      letterSpacing: '0.01rem',
   },
   myVariant14: {
    color: "#787878",
    fontSize: "1rem",
    font:'Roboto',
    fontStyle: "normal",
    fontWeight: "400",
    marginTop:'1rem',
    lineHeight: '1.4rem',
 },
 myVariant15: {
 color:'black',
  font: 'Sofia Pro',
  fontSize: '0.95rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.5rem', 
  letterSpacing: '0.01rem',
  marginLeft:'2.5rem',


},
   
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#F0F0F0',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#F9F9F9',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  "&.first-name-cell": {
    width: "2%",
  },
}));

function createData(
  FirstName: string,
  SecondName: String,
  DogBreed: String,
  Sex: String,
  Amount: number,
) {
  return { FirstName, SecondName, DogBreed, Sex,Amount};
}

const rows = [
  createData('collin', 'Rose Smart', 'Bulldog', 'Male', 300),
  createData('Akinyemi', 'Ayomide Joy', 'huskey', 'Female', 500),
  createData('Collin','Rose Smart', 'Rottweller', 'Male', 100),
  createData('Akinyemi', 'Ayomide Joy', 'Rottweller','Female', 500),
  createData('Collin','Rose Smart', 'BullDog', 'Male', 1000),
];
export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Total Breeder');
  const [selectedOptionYear, setSelectedOptionYear] = useState(2021);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const selectedIndex=0;
  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
    setSelectedOptionYear(event.target.value);

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
    {/* count-box */}
    <Box sx={{width:'90%' ,height:'12.65rem' ,bgcolor:'#F9F9F9', mt:'5%' ,ml:'4%',
    '@media (max-width: 900px)': {
      height:'10.65rem'
    }, }}>
    <Box sx={{width:'90%' ,height:'8.25rem' , mt:'2.3%',mb:'2.3%' ,ml:'4.5%' ,display:'flex',flexDirection:'row'}} >
        <Box  sx={{width:'23%',height:'100%' , display:'flex',gap:'4%' ,bgcolor:'rgba(6, 74, 172, 0.1)' ,borderRadius:'0.5rem'}}>
          <Box sx={{width:'18%' , ml:'6%', mt:'8%' }} className='count-logo'>
          <Image src={'/doglover.svg'} alt="doglover"  width={42} height={42}/>
          </Box>
          <Box sx={{width:'65%' , mt:'10%',ml:'4%' }} className='count-text-box'>
            <Box>
              <Typography variant="myVariant9" sx={{color:'#064AAC'}} className="counting-t">Total Dog Lover</Typography>
            </Box>
            <Box>
              <Typography variant="myVariant10" sx={{color:'#064AAC'}} className="counting">2,200</Typography>
            </Box>
          </Box>
        </Box>
        <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex',gap:'4%' ,bgcolor:'rgba(223, 138, 9, 0.1)' ,borderRadius:'0.5rem'}}>
          <Box sx={{width:'18%' , ml:'8%', mt:'8%' }} className='count-logo'>
          <Image src={'/T-breeders.svg'} alt="T-breeders"  width={42} height={42}/>
          </Box>
          <Box sx={{width:'65%' , mt:'10%' ,ml:'4%'}} className='count-text-box'>
            <Box>
              <Typography variant="myVariant9" sx={{color:'#DF8A09'}} className="counting-t">Total Breeders</Typography>
            </Box>
            <Box>
              <Typography variant="myVariant10" sx={{color:'#DF8A09'}} className="counting">2,200</Typography>
            </Box>
          </Box>
        </Box>
       <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex' ,bgcolor:'rgba(83, 126, 142, 0.1)' ,borderRadius:'0.5rem'}}>
          <Box sx={{width:'18%' , ml:'8%', mt:'8%' ,}} className='count-logo'>
          <Image src={'/doglisted.svg'} alt="doglisted"  width={42} height={42}
          />
          </Box>
          <Box sx={{width:'65%' , mt:'10%' ,ml:'4%'}} className='count-text-box'>
            <Box>
              <Typography variant="myVariant9" sx={{color:'#537E8E'}} className="counting-t">Total Dog Listed</Typography>
            </Box>
            <Box>
              <Typography variant="myVariant10" sx={{color:'#537E8E'}} className="counting">1,500</Typography>
            </Box>
          </Box>
        </Box>
        <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex',gap:'4%' ,bgcolor:'rgba(128, 120, 188, 0.1)' ,borderRadius:'0.5rem'}}>
          <Box sx={{width:'18%' , ml:'8%', mt:'8%' }} className='count-logo'>
          <Image src={'/dogsold.svg'} alt="dogsold"  width={42} height={42}/>
          </Box>
          <Box sx={{width:'65%' , mt:'10%',ml:'4%' }} className='count-text-box'>
            <Box>
              <Typography variant="myVariant9" sx={{color:'#8078BC'}} className="counting-t">Total Dog Sold</Typography>
            </Box>
            <Box>
              <Typography variant="myVariant10" sx={{color:'#8078BC'}} className="counting">700</Typography>
            </Box>
          </Box>
        </Box>
    </Box>
    </Box>
   {/* graphs div */}
   <Box sx={{width:'90%',display:'flex' , flexDirection:'row',mt:'2%',
    ml:'4%' ,gap:'2.5%' ,
    '@media (max-width: 600px)': {
      flexDirection:'column',ml:'10%'
    }, }} className="grap-box">
    {/* graph1 */}
    <Box sx={{width:'49%',bgcolor:'#fff',display:'flex', flexDirection:'column' , gap:'0.5rem',
   '@media (max-width: 600px)': {
    width:'90%', mb:'1rem'
  },}} >
    <Box sx={{display:'flex', gap:'0.3rem' ,width:'22rem'}}>
        {/* count */}
        <Box>
      {/* Dropdown */}
      <Select
       value={selectedOption}
        onChange={handleOptionChange}
        sx={{ width: "10rem", height:'2rem' ,bgcolor:'#F9F9F9' ,borderRadius:'0.45rem',zIndex:'1' }}
        IconComponent={ExpandMoreIcon} 
      >
        <MenuItem value="Total Breeder"><Typography variant="myVariant11">Total Breeder</Typography></MenuItem>
        <MenuItem value="Dog Listed"><Typography variant="myVariant11">Total Dog Listed</Typography></MenuItem>
        <MenuItem value="Dog Sold"><Typography variant="myVariant11">Total Dog Sold</Typography></MenuItem>
        <MenuItem value="Dog Lover"><Typography variant="myVariant11">Total Dog Lover</Typography></MenuItem>
      </Select>

    </Box>
        {/* year */}
        <Box>
        <Select
       value={selectedOptionYear}
        onChange={handleOptionChange}
        sx={{ width: "6rem", height:'2rem' ,position:'absolute',bgcolor:'#F9F9F9' ,borderRadius:'0.45rem'}}
        IconComponent={ExpandMoreIcon} 
      >
        <MenuItem value="2023"><Typography variant="myVariant11">2023</Typography></MenuItem>
        <MenuItem value="2022"><Typography variant="myVariant11">2022</Typography></MenuItem>
        <MenuItem value="2021"><Typography variant="myVariant11">2021</Typography></MenuItem>
        <MenuItem value="2020"><Typography variant="myVariant11">2020</Typography></MenuItem>
      </Select>
        </Box>
      </Box>
      <Box sx={{width:'100%' , bgcolor:'#F9F9F9'}}>
        <Box sx={{width:'92%' , bgcolor:'#F9F9F9',ml:'3%'}}>
        <BarChart color={'#064AAC'}/>
       </Box>
       </Box>
       </Box>
    {/* graph2 */}

    <Box sx={{width:'49%',bgcolor:'#fff',display:'flex', flexDirection:'column' , gap:'0.5rem',
   '@media (max-width: 600px)': {
    width:'90%'
  },}} >
    <Box sx={{display:'flex', gap:'0.3rem' ,width:'22rem'}}>
        {/* count */}
        <Box>
      {/* Dropdown */}
      <Select
       value={selectedOption}
        onChange={handleOptionChange}
        sx={{ width: "10rem", height:'2rem' ,bgcolor:'#F9F9F9',position:'relative' ,borderRadius:'0.45rem'}}
        IconComponent={ExpandMoreIcon} 
      >
        <MenuItem value="Total Breeder"><Typography variant="myVariant11">Total Breeder</Typography></MenuItem>
        <MenuItem value="Dog Listed"><Typography variant="myVariant11">Total Dog Listed</Typography></MenuItem>
        <MenuItem value="Dog Sold"><Typography variant="myVariant11">Total Dog Sold</Typography></MenuItem>
        <MenuItem value="Dog Lover"><Typography variant="myVariant11">Total Dog Lover</Typography></MenuItem>
      </Select>

    </Box>
        {/* year */}
        <Box>
        <Select
       value={selectedOptionYear}
        onChange={handleOptionChange}
        sx={{ width: "6rem", height:'2rem' ,bgcolor:'#F9F9F9' ,borderRadius:'0.45rem'}}
        IconComponent={ExpandMoreIcon} 
      >
        <MenuItem value="2023"><Typography variant="myVariant11">2023</Typography></MenuItem>
        <MenuItem value="2022"><Typography variant="myVariant11">2022</Typography></MenuItem>
        <MenuItem value="2021"><Typography variant="myVariant11">2021</Typography></MenuItem>
        <MenuItem value="2020"><Typography variant="myVariant11">2020</Typography></MenuItem>
      </Select>
        </Box>
      </Box>
      <Box sx={{width:'100%' , bgcolor:'#F9F9F9'}}>
        <Box sx={{width:'92%' , bgcolor:'#F9F9F9',ml:'3%'}}>
        <BarChart color={'#E8D1A7'}/>
       </Box>
       </Box>
       </Box>
      </Box>
      <Box sx={{ width:'90%' , ml:'4%',gap:'80%',display:'flex' , mt:'2.7%',
    '@media (max-width: 600px)': {
      gap:'50%' , ml:'6%'
    },}}>
       <Typography variant="myVariant12">Listing verification</Typography>
      <Typography variant="myVariant13">View all</Typography>
     </Box>
   
      {/* table */}
      <Box sx={{width:'90%' , ml:'4%' , mt:'0.7rem'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" className="first-name-cell" >
              <Typography variant="myVariant15" className="th" >FIRST NAME</Typography>
              </StyledTableCell>
            <StyledTableCell align="left"><Typography variant="myVariant15" className="th" >SECOND NAME</Typography></StyledTableCell>
            <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Dog breed</Typography></StyledTableCell>
            <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Sex</Typography></StyledTableCell>
            <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Amount</Typography></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: { FirstName: any; SecondName: any; DogBreed: any; Sex: any; Amount: any; }) => (
             <StyledTableRow key={row.FirstName}>
              <StyledTableCell component="th" scope="row" align="left">
              <Typography variant="myVariant11" sx={{ml:'13%'}}>{row.FirstName}</Typography>
              </StyledTableCell>
              <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'12%'}}>{row.SecondName}</Typography></StyledTableCell>
              <StyledTableCell align="left"><Typography variant="myVariant14" sx={{ml:'15%'}}>{row.DogBreed}</Typography></StyledTableCell>
              <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'24%'}}>{row.Sex}</Typography></StyledTableCell>
              <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'19%'}}>${row.Amount}</Typography></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>

    </Box>
  </Box>
    </ThemeProvider>
  )
}








// 'use client'
// import { Box, Button, TextField, Typography , InputAdornment, IconButton, Paper, Select,MenuItem, Table, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";
// import Image from "next/image";
// import {  createTheme , ThemeProvider } from "@mui/material/styles";
// import React, { useState } from "react";
// import Link from "next/link";
// import SideBar from "@/app/components/SideBar";
// import Searchbar from "@/app/components/Searchbar";
// import Titles from "@/app/components/Titles";
// import CloseIcon from '@mui/icons-material/Close';
// import ListIcon from '@mui/icons-material/List';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMoreSharp';
// import BarChart from "@/app/components/BarChart";
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TablePagination from '@mui/material/TablePagination';

// const theme = createTheme({
//   typography: {
//     myVariant13: {
//       color: "#787878",
//       fontSize: "1rem",
//       fontFamily: "Sans-Serif",
//       font:'Sofia Pro',
//       fontStyle: "normal",
//       fontWeight: "400",
//       lineHeight: '1rem',
//       letterSpacing: '0.01rem',
//     },
//     myVariant11: {
//       color: "#787878",
//       fontSize: "0.92rem",
//       fontFamily: 'Sans-Serif',
//       font:'Sofia Pro',
//       fontStyle: "normal",
//       fontWeight: "400",
//       marginTop:'1rem',
//       lineHeight: '1rem',
//     },

//     myVariant9: {

//       font: 'Sofia Pro',
//       fontSize: '1.3rem',
//       fontStyle: 'normal',
//       fontWeight: '400',
//       lineHeight: '1.5rem', 
//       letterSpacing: '0.01rem',
   

//     },
//     myVariant10: {
      
//       font:' Sofia Pro',
//       fontSize:' 2.25rem',
//       fontStyle:' normal',
//       fontWeight:' 500',
//       lineHeight:' 4rem', 
//       letterSpacing:' -0.09rem',
   

//     },
//     myVariant12: {
//       color: '#787878',
//       fontSize: "1.1rem",
//       fontFamily: "Sans-Serif",
//       font:'Sofia Pro',
//       fontWeight: "700",
//       lineHeight: '1.6rem',
//       letterSpacing: '0.01rem',
//    },
//    myVariant14: {
//     color: "#787878",
//     fontSize: "1rem",
//     font:'Roboto',
//     fontStyle: "normal",
//     fontWeight: "400",
//     marginTop:'1rem',
//     lineHeight: '1.4rem',
//  },
//  myVariant15: {
//  color:'black',
//   font: 'Sofia Pro',
//   fontSize: '0.95rem',
//   fontStyle: 'normal',
//   fontWeight: '400',
//   lineHeight: '1.5rem', 
//   letterSpacing: '0.01rem',
//   marginLeft:'2.5rem',


// },
   
//   },
// });

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor:'#F0F0F0',
//     color: theme.palette.common.black,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(even)': {
//     backgroundColor: '#F9F9F9',
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
//   "&.first-name-cell": {
//     width: "2%",
//   },
// }));

// function createData(
//   FirstName: string,
//   SecondName: String,
//   DogBreed: String,
//   Sex: String,
//   Amount: number,
// ) {
//   return { FirstName, SecondName, DogBreed, Sex,Amount};
// }

// const rows = [
//   createData('collin', 'Rose Smart', 'Bulldog', 'Male', 100),
//   createData('Akinyemi', 'Ayomide Joy', 'huskey', 'Female', 200),
//   createData('Collin','Rose Smart', 'Rottweller', 'Male', 300),
//   createData('Akinyemi', 'Ayomide Joy', 'Rottweller','Female', 400),
//   createData('Collin','Rose Smart', 'BullDog', 'Male', 5000),
//   createData('Collin','Rose Smart', 'Rottweller', 'Male', 6200),
//   createData('Akinyemi', 'Ayomide Joy', 'Rottweller','Female', 7200),
//   createData('Collin','Rose Smart', 'BullDog', 'Male', 82000),
//   createData('collin', 'Rose Smart', 'Bulldog', 'Male', 900),
//   createData('Akinyemi', 'Ayomide Joy', 'huskey', 'Female', 1000),
//   createData('Collin','Rose Smart', 'Rottweller', 'Male', 1100),
//   createData('Akinyemi', 'Ayomide Joy', 'Rottweller','Female', 1200),
//   createData('Collin','Rose Smart', 'BullDog', 'Male', 13000),
//   createData('Collin','Rose Smart', 'Rottweller', 'Male', 14200),
//   createData('Akinyemi', 'Ayomide Joy', 'Rottweller','Female', 15200),
//   createData('Collin','Rose Smart', 'BullDog', 'Male', 16000),
// ];
// export default function Index() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [selectedOption, setSelectedOption] = useState('Total Breeder');
//   const [selectedOptionYear, setSelectedOptionYear] = useState(2021);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const selectedIndex=0;
//   const handleOptionChange = (event:any) => {
//     setSelectedOption(event.target.value);
//     setSelectedOptionYear(event.target.value);

//   };
//   // srt
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(3);

//   const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
//     setPage(newPage);
//   };
  
//   const handleChangeRowsPerPage = (event:any) => {
//     setRowsPerPage(parseInt(event.target.value, 3));
//     setPage(0);
//   };
  

//   // end
//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{width:'100%' , height:'75rem' ,display:'flex',flexDirection:'row' }}>
//       {/* sidebar  */}
//      <Box sx={{width:{xs:'0rem',sm:'0rem',md:'14.6rem',xl:'14.6rem'} , height:{xs:'0rem',sm:'0rem',md:'75rem',xl:'75rem'}  ,bgcolor:'#064AAC' }}>
//       <SideBar selectedIndex={selectedIndex}/>
//     </Box>
//     <IconButton
//             sx={{ position: "absolute", display: { xs: "block", sm: "block" ,md:'none'} }}
//             onClick={toggleSidebar}>
//             {isSidebarOpen ?<ListIcon /> : <Box sx={{width:'15rem' ,position:'absolute', height:'75rem' ,bgcolor:'#064AAC' ,zIndex:'1000'}}>
//       <SideBar selectedIndex={selectedIndex}/>
//     </Box> }
//           </IconButton>
//     {/* other components of page  */}
//     <Box sx={{width:{ xs: "100%", md: "87.4%" }  , height:'58rem' ,bgcolor:'#fff'
//     ,display:'flex',flexDirection:'column' }}>
//        {/* searchbar */}
//     <Box sx={{width:'100%'  ,bgcolor:'yellow' }}>
//        <Searchbar/>
//     </Box>
//     {/* count-box */}
//     <Box sx={{width:'90%' ,height:'12.65rem' ,bgcolor:'#F9F9F9', mt:'5%' ,ml:'4%',
//     '@media (max-width: 900px)': {
//       height:'10.65rem'
//     }, }}>
//     <Box sx={{width:'90%' ,height:'8.25rem' , mt:'2.3%',mb:'2.3%' ,ml:'4.5%' ,display:'flex',flexDirection:'row'}} >
//         <Box  sx={{width:'23%',height:'100%' , display:'flex',gap:'4%' ,bgcolor:'rgba(6, 74, 172, 0.1)' ,borderRadius:'0.5rem'}}>
//           <Box sx={{width:'18%' , ml:'6%', mt:'8%' }} className='count-logo'>
//           <Image src={'/doglover.svg'} alt="doglover"  width={42} height={42}/>
//           </Box>
//           <Box sx={{width:'65%' , mt:'10%',ml:'4%' }} className='count-text-box'>
//             <Box>
//               <Typography variant="myVariant9" sx={{color:'#064AAC'}} className="counting-t">Total Dog Lover</Typography>
//             </Box>
//             <Box>
//               <Typography variant="myVariant10" sx={{color:'#064AAC'}} className="counting">2,200</Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex',gap:'4%' ,bgcolor:'rgba(223, 138, 9, 0.1)' ,borderRadius:'0.5rem'}}>
//           <Box sx={{width:'18%' , ml:'8%', mt:'8%' }} className='count-logo'>
//           <Image src={'/T-breeders.svg'} alt="T-breeders"  width={42} height={42}/>
//           </Box>
//           <Box sx={{width:'65%' , mt:'10%' ,ml:'4%'}} className='count-text-box'>
//             <Box>
//               <Typography variant="myVariant9" sx={{color:'#DF8A09'}} className="counting-t">Total Breeders</Typography>
//             </Box>
//             <Box>
//               <Typography variant="myVariant10" sx={{color:'#DF8A09'}} className="counting">2,200</Typography>
//             </Box>
//           </Box>
//         </Box>
//        <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex' ,bgcolor:'rgba(83, 126, 142, 0.1)' ,borderRadius:'0.5rem'}}>
//           <Box sx={{width:'18%' , ml:'8%', mt:'8%' ,}} className='count-logo'>
//           <Image src={'/doglisted.svg'} alt="doglisted"  width={42} height={42}
//           />
//           </Box>
//           <Box sx={{width:'65%' , mt:'10%' ,ml:'4%'}} className='count-text-box'>
//             <Box>
//               <Typography variant="myVariant9" sx={{color:'#537E8E'}} className="counting-t">Total Dog Listed</Typography>
//             </Box>
//             <Box>
//               <Typography variant="myVariant10" sx={{color:'#537E8E'}} className="counting">1,500</Typography>
//             </Box>
//           </Box>
//         </Box>
//         <Box  sx={{width:'23%',height:'100%' ,ml:'3%', display:'flex',gap:'4%' ,bgcolor:'rgba(128, 120, 188, 0.1)' ,borderRadius:'0.5rem'}}>
//           <Box sx={{width:'18%' , ml:'8%', mt:'8%' }} className='count-logo'>
//           <Image src={'/dogsold.svg'} alt="dogsold"  width={42} height={42}/>
//           </Box>
//           <Box sx={{width:'65%' , mt:'10%',ml:'4%' }} className='count-text-box'>
//             <Box>
//               <Typography variant="myVariant9" sx={{color:'#8078BC'}} className="counting-t">Total Dog Sold</Typography>
//             </Box>
//             <Box>
//               <Typography variant="myVariant10" sx={{color:'#8078BC'}} className="counting">700</Typography>
//             </Box>
//           </Box>
//         </Box>
//     </Box>
//     </Box>
//    {/* graphs div */}
//    <Box sx={{width:'90%',display:'flex' , flexDirection:'row',mt:'2%',
//     ml:'4%' ,gap:'2.5%' ,
//     '@media (max-width: 600px)': {
//       flexDirection:'column',ml:'10%'
//     }, }} className="grap-box">
//     {/* graph1 */}
//     <Box sx={{width:'49%',bgcolor:'#fff',display:'flex', flexDirection:'column' , gap:'0.5rem',
//    '@media (max-width: 600px)': {
//     width:'90%', mb:'1rem'
//   },}} >
//     <Box sx={{display:'flex', gap:'0.3rem' ,width:'22rem'}}>
//         {/* count */}
//         <Box>
//       {/* Dropdown */}
//       <Select
//        value={selectedOption}
//         onChange={handleOptionChange}
//         sx={{ width: "10rem", height:'2rem' ,bgcolor:'#F9F9F9' ,borderRadius:'0.45rem',zIndex:'1' }}
//         IconComponent={ExpandMoreIcon} 
//       >
//         <MenuItem value="Total Breeder"><Typography variant="myVariant11">Total Breeder</Typography></MenuItem>
//         <MenuItem value="Dog Listed"><Typography variant="myVariant11">Total Dog Listed</Typography></MenuItem>
//         <MenuItem value="Dog Sold"><Typography variant="myVariant11">Total Dog Sold</Typography></MenuItem>
//         <MenuItem value="Dog Lover"><Typography variant="myVariant11">Total Dog Lover</Typography></MenuItem>
//       </Select>

//     </Box>
//         {/* year */}
//         <Box>
//         <Select
//        value={selectedOptionYear}
//         onChange={handleOptionChange}
//         sx={{ width: "6rem", height:'2rem' ,position:'absolute',bgcolor:'#F9F9F9' ,borderRadius:'0.45rem'}}
//         IconComponent={ExpandMoreIcon} 
//       >
//         <MenuItem value="2023"><Typography variant="myVariant11">2023</Typography></MenuItem>
//         <MenuItem value="2022"><Typography variant="myVariant11">2022</Typography></MenuItem>
//         <MenuItem value="2021"><Typography variant="myVariant11">2021</Typography></MenuItem>
//         <MenuItem value="2020"><Typography variant="myVariant11">2020</Typography></MenuItem>
//       </Select>
//         </Box>
//       </Box>
//       <Box sx={{width:'100%' , bgcolor:'#F9F9F9'}}>
//         <Box sx={{width:'92%' , bgcolor:'#F9F9F9',ml:'3%'}}>
//         <BarChart color={'#064AAC'}/>
//        </Box>
//        </Box>
//        </Box>
//     {/* graph2 */}

//     <Box sx={{width:'49%',bgcolor:'#fff',display:'flex', flexDirection:'column' , gap:'0.5rem',
//    '@media (max-width: 600px)': {
//     width:'90%'
//   },}} >
//     <Box sx={{display:'flex', gap:'0.3rem' ,width:'22rem'}}>
//         {/* count */}
//         <Box>
//       {/* Dropdown */}
//       <Select
//        value={selectedOption}
//         onChange={handleOptionChange}
//         sx={{ width: "10rem", height:'2rem' ,bgcolor:'#F9F9F9',position:'relative' ,borderRadius:'0.45rem'}}
//         IconComponent={ExpandMoreIcon} 
//       >
//         <MenuItem value="Total Breeder"><Typography variant="myVariant11">Total Breeder</Typography></MenuItem>
//         <MenuItem value="Dog Listed"><Typography variant="myVariant11">Total Dog Listed</Typography></MenuItem>
//         <MenuItem value="Dog Sold"><Typography variant="myVariant11">Total Dog Sold</Typography></MenuItem>
//         <MenuItem value="Dog Lover"><Typography variant="myVariant11">Total Dog Lover</Typography></MenuItem>
//       </Select>

//     </Box>
//         {/* year */}
//         <Box>
//         <Select
//        value={selectedOptionYear}
//         onChange={handleOptionChange}
//         sx={{ width: "6rem", height:'2rem' ,bgcolor:'#F9F9F9' ,borderRadius:'0.45rem'}}
//         IconComponent={ExpandMoreIcon} 
//       >
//         <MenuItem value="2023"><Typography variant="myVariant11">2023</Typography></MenuItem>
//         <MenuItem value="2022"><Typography variant="myVariant11">2022</Typography></MenuItem>
//         <MenuItem value="2021"><Typography variant="myVariant11">2021</Typography></MenuItem>
//         <MenuItem value="2020"><Typography variant="myVariant11">2020</Typography></MenuItem>
//       </Select>
//         </Box>
//       </Box>
//       <Box sx={{width:'100%' , bgcolor:'#F9F9F9'}}>
//         <Box sx={{width:'92%' , bgcolor:'#F9F9F9',ml:'3%'}}>
//         <BarChart color={'#E8D1A7'}/>
//        </Box>
//        </Box>
//        </Box>
//       </Box>
//       <Box sx={{ width:'90%' , ml:'4%',gap:'80%',display:'flex' , mt:'2.7%',
//     '@media (max-width: 600px)': {
//       gap:'50%' , ml:'6%'
//     },}}>
//        <Typography variant="myVariant12">Listing verification</Typography>
//       <Typography variant="myVariant13">View all</Typography>
//      </Box>
   
//       {/* table */}
//       <Box sx={{width:'90%' , ml:'4%' , mt:'0.7rem'}}>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left" className="first-name-cell" >
//               <Typography variant="myVariant15" className="th" >FIRST NAME</Typography>
//               </StyledTableCell>
//             <StyledTableCell align="left"><Typography variant="myVariant15" className="th" >SECOND NAME</Typography></StyledTableCell>
//             <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Dog breed</Typography></StyledTableCell>
//             <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Sex</Typography></StyledTableCell>
//             <StyledTableCell align="left"><Typography variant="myVariant15" className="th">Amount</Typography></StyledTableCell>
//           </TableRow>
//         </TableHead>
       
//         <TableBody>
       
//         {(rowsPerPage > 0
//     ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     : rows
//   ).map((row) => (
//              <StyledTableRow key={row.FirstName}
//              >
//               <StyledTableCell component="th" scope="row" align="left">
//               <Typography variant="myVariant11" sx={{ml:'13%'}}>{row.FirstName}</Typography>
//               </StyledTableCell>
//               <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'12%'}}>{row.SecondName}</Typography></StyledTableCell>
//               <StyledTableCell align="left"><Typography variant="myVariant14" sx={{ml:'15%'}}>{row.DogBreed}</Typography></StyledTableCell>
//               <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'24%'}}>{row.Sex}</Typography></StyledTableCell>
//               <StyledTableCell align="left"><Typography variant="myVariant11" sx={{ml:'19%'}}>${row.Amount}</Typography></StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     {/* pagination */}
//     <TablePagination
     
    
//   component="div"
//   count={rows.length}
//   page={page}
//   onPageChange={handleChangePage}
//   rowsPerPage={rowsPerPage}
//   onRowsPerPageChange={handleChangeRowsPerPage}
  
// />
//     </Box>

//     </Box>
//   </Box>
//     </ThemeProvider>
//   )
// }







// real page
