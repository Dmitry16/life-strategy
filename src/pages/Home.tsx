import React from 'react';
import { Box, Stack, Typography, Card, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import lagoonnebula from '../../public/pics/lagoonnebula.jpeg';
import messier33 from '../../public/pics/messier33.jpeg';
import nebulaandplanets from '../../public/pics/nebulaandplanets.jpeg';
import theme from '../theme';




// const StyledListItem = styled(ListItem)(({ theme }) => ({
//     color: theme.palette.text.darkBlue,
// }));

interface OptionProps {
    option: string
    // image: string;
}

// const OptionCard = ({ option }: OptionProps) => {
//     return (
//       <Card
//         raised
//         sx={{
//             width: {lg: '32%', md: '46%', sm: '100%', xs: '100%'},
//             height: '50vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}
//         style={{
//             backgroundImage: `url(${image})`,
//             backgroundSize: 'cover',
//             backgroundBlendMode: `difference`,
//             // backgroundColor: theme.palette.text.darkBlue,
//             opacity: 0.8,
//         }}
//       > 
//         {/* <img src={image} alt={option} /> */}
//         <Typography variant="h5" component="h1" color={theme.palette.text.darkGrey}>
//             {option}
//         </Typography>
//       </Card>
//     )
// }

const OptionBox = ({ option }: OptionProps) => {
  return (
    <Box
      sx={{
        // display: 'flex',
        // flexDirection: 'column',
        backgroundColor: theme.palette.secondary.second,
        width: {lg: '32%', md: '46%', sm: '100%', xs: '100%'},
      }}
    >
    <Typography variant='h5' align='center' color={theme.palette.text.white}>
      {option}
    </Typography>
    </Box>
  )
}

const Home = () => {
    // const [DialogComponent, openDialog] = useDialog();

    return (
      <Box
        sx={{
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', 
        }}
      >
        <Box 
            sx={{ 
                my: 0,
                gap: 2,
                flexDirection: { md: 'row', sm: 'column', xs: 'column'}, 
                display: "flex", 
                justifyContent: 'space-between', 
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
            {/* <OptionCard 
              option='Design Your Desired Life'
            //   image='./pics/lagoonnebula.jpg'
              image={lagoonnebula}
            />
            <OptionCard 
              option='Create Your Life Strategy'
            //   image='./pics/messier33.jpg'
              image={messier33}
            />
            <OptionCard 
              option='Strategic Life: Applying Boardroom Thinking to Personal Success' 
            //   image='./pics/nebulaandplanets.jpg'
              image={nebulaandplanets}
            /> */}
        </Box>
      </Box>
    );
};

export default Home;
