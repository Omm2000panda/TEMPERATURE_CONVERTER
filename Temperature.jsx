import { useState } from "react";
import {Container,Box,Typography} from "@mui/material"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./temp.css";
export default function temperature({setdegree,setunit})
{
    
    const [initial,setInitial]=useState('');
    const [final,setFinal]=useState('');
   
    const [temp,setTemp]=useState('');
    const [val, setVal] = React.useState('');
    const [value,setValue]=React.useState('');
    
  function handlefinal(e){
    let f=e.target.value
    let degree
    // alert(initial+"  "+final)
    switch(initial){
      case 'c':
          if(f=='c')
              degree=(Number)(temp);
          else if(f=='k')
              degree=(Number)(temp)+273.15;
           else
              degree=((Number)(temp)*1.8 + 32)
          break;
       case 'f':
          if(f=='f'){
              degree=(Number)(temp);
              // console.log(degree)
          }
              else if(f=='c')
              degree=((Number)(temp)-32)*(5/9);
              else
              
                  degree=((Number)(temp)-32)*(5/9)+273.15

              
              break;
      case 'k':
          if(f=='k')
          degree=(Number)(temp);
          else if(f=='c')
          degree=(Number)(temp)-273.15;
          else
          degree=((Number)(temp)-273.15)*1.8 + 32

      break;

  }
  //alert(degree)
  if(f=='k' && degree<0)
  degree=0;
  if(f==''||initial=='')
  degree=''

  setdegree((degree!='')? (degree.toFixed(3)):'')

  }

  function handleinitial(e){
    let i=e.target.value
    let degree
  
    switch(i){
      case 'c':
          if(final=='c')
              degree=(Number)(temp);
          else if(final=='k')
              degree=(Number)(temp)+273.15;
           else
              degree=((Number)(temp)*1.8 + 32)
          break;
       case 'f':
          if(final=='f'){
              degree=(Number)(temp);
             
          }
              else if(final=='c')
              degree=((Number)(temp)-32)*(5/9);
              else
              
                  degree=((Number)(temp)-32)*(5/9)+273.15

              
              break;
      case 'k':
          if(final=='k')
          degree=(Number)(temp);
          else if(final=='c')
          degree=(Number)(temp)-273.15;
          else
          degree=((Number)(temp)-273.15)*1.8 + 32

      break;

  }
  
  if(final=='k' && degree<0)
  degree=0;
  if(final==''||initial=='')
  degree=''

  setdegree((degree!='')? (degree.toFixed(3)):'')

  }

  

    function handlechange(e)
    {
      let degree;
      let tempe=e.target.value;
        switch(initial){
          case 'c':
            if(final=='c')
            degree=(Number)(tempe);
          else if(final=='k')
          degree=(Number)(tempe)+273.15;
        else
        degree=((Number)(tempe)*1.8 + 32)
      break;

      case 'f':
        if(final=='f'){
          degree=(Number)(tempe);
          
        }
        else if(final=='c')
        degree=((Number)(tempe)-32)*(5/9);
      else
        degree=((Number)(tempe)-32)*(5/9)+273.15
        break;

      case 'k':
        if(final=='k')
        degree=(Number)(tempe);
        else if(final=='c')
        degree=(Number)(tempe)-273.15;
        else
        degree=((Number)(tempe)-273.15)*1.8 + 32
        break;
                
      }
       
            if(final=='k' && degree<0)
            degree=0;
          if(final==''||initial==''||tempe=='')
          degree=''
        setTemp(tempe);
        setdegree((degree!='')? (degree.toFixed(3)):'')
    }
    return (
        
        <Container sx={{height:"100%",display:"flex",flexDirection:"column",justifyContent:'space-evenly',alignItems:'center'}}>
       
        <Typography sx={{typography:{xs:'h4',sm:'h4',md:'h2'}  }} >Temperture Converter</Typography> 
        
         <Box sx={{display:'flex' ,alignItems:'center'}}>   
        <input type="number" className="input" placeholder="temperature..." value={temp} onChange={handlechange}/>
        


  <FormControl sx={{ m: 1, minWidth: 85 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Initial</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={val}
          onChange={(e)=>{
            setInitial(e.target.value)
            setVal(e.target.value)
            handleinitial(e)
        }}
          autoWidth
          label="Temp"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
          <MenuItem value={'f'}>F</MenuItem>
          <MenuItem value={'k'}>K</MenuItem>
        </Select>
      </FormControl>
  

</Box>
      
        <Typography sx={{typography:{xs:'h4',sm:'h4',md:'h2'}  }}>Convert in</Typography>
       
        <Box>
        


<FormControl sx={{ m: 1, minWidth: 85 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Final</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={(e)=>{
            setunit(e.target.value)
            setFinal(e.target.value)
            setValue(e.target.value)
            handlefinal(e)
        }}
          autoWidth
          label="Temp"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
          <MenuItem value={'f'}>F</MenuItem>
          <MenuItem value={'k'}>K</MenuItem>
        </Select>
      </FormControl>

       
    </Box>
   
   </Container> 



    )
}
