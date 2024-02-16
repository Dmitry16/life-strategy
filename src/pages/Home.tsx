import React from 'react';
import { Box, Typography } from '@mui/material';  
// import { styled } from '@mui/material/styles';
// import lagoonnebula from '../../public/pics/lagoonnebula.jpeg';
// import messier33 from '../../public/pics/messier33.jpeg';
// import nebulaandplanets from '../../public/pics/nebulaandplanets.jpeg';
import theme from '../theme';




// const StyledListItem = styled(ListItem)(({ theme }) => ({
//     color: theme.palette.text.darkBlue,
// }));

interface OptionProps {
    option: string
}


const OptionBox = ({ option }: OptionProps) => {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: {lg: '33%', md: '46%', sm: '90%', xs: '90%'},
        }}
      >
        <Box
          sx={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: {lg: 'flex-start', md: 'center', sm: 'center', xs: 'center'},
            // flexDirection: 'column',
            height: {lg: '6em', md: '5em', sm: '4em'},
            backgroundColor: theme.palette.secondary.second,
            p: 2,
          }}
        >
          <Typography 
            variant='h6'
            align='left' 
            color={theme.palette.text.white}
            sx={{
              fontSize: {lg: '1.3em', md: '1em', sm: '1em', xs: '0.95em'},
            }}
          >
            {option}
          </Typography>
        </Box>
        <Box 
          sx={{
            height: {lg: '20em', md: '14em'},
            backgroundColor: theme.palette.primary.second,
            p: 2
          }}
          >
          <Typography 
            color={theme.palette.text.primary}
            sx={{
              fontSize: {lg: '1em', md: '0.87em', sm: '0.85em', xs: '0.8em'},
            }}
          >
            Lorem Ipsum es simplemente el 
            texto de relleno de las imprentas y 
            archivos de texto. Lorem Ipsum ha sido el 
            texto de relleno estándar de las industrias 
            desde el año 1500, cuando un impresor 
            (N. del T. persona que se dedica a la imprenta) 
            desconocido usó una galería de textos y los mezcló de 
            tal manera que logró hacer un libro de textos especimen.
          </Typography>
        </Box>
      </Box>
  )
}

const Home = () => {
    // const [DialogComponent, openDialog] = useDialog();

    return (
      <Box
        sx={{
          // height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
      >
        <Box 
            sx={{ 
                flexDirection: { md: 'row', sm: 'column', xs: 'column'}, 
                alignItems: {md: 'stretch', sm: 'center', xs: 'center'},
                display: "flex", 
                justifyContent: 'center', 
                alignSelf: 'flex-start'
            }}
        >
            <OptionBox 
              option='Design Your Desired Life'
            />
            <OptionBox 
              option='Create Your Life Strategy'
            />
            <OptionBox 
              option='Strategic Life: Applying Boardroom Thinking to Personal Success'
            />
        </Box>
      </Box>
    );
};

export default Home;
