import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, 
  ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from '@mui/material';  
import meeting1_m from '../../public/pics/meeting1_m.jpg';
import design1_m from '../../public/pics/design1_m.jpg';
import workWithNotesOnTheWall_m from '../../public/pics/workWithNotesOnTheWall_m.jpg';
// import theme from '../theme';
import ButtonRouter from '../router/ButtonRouter';


// const StyledListItem = styled(ListItem)(({ theme }) => ({
//     color: theme.palette.text.darkBlue,
// }));

// interface OptionProps {
//     option: string
//     picture: string
//     text: string
// }

const imageData = [
  {
    option: 'Design Your Desired Life',
    picture: design1_m,
    text: 'Design your life with intention, purpose and clarity. Create a life that is meaningful and fulfilling.'
  },
  {
    option: 'Create Your Life Strategy',
    picture: workWithNotesOnTheWall_m,
    text: 'Create a life strategy that is aligned with your values and goals. Live a life that is meaningful and fulfilling.'
  },
  {
    option: 'Strategic Life: Applying Boardroom Thinking to Personal Success',
    picture: meeting1_m,
    text: 'Learn how to apply boardroom thinking to personal success. Create a life that is strategic and focused.'
  }
]


const OptionCard = ({ option, picture, text }) => {
  return (
    <Card 
      raised 
      sx={{ 
        maxWidth: {lg: 350, md: 310 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }} 
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          sx={{ 
            height: 180,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          image={picture}
          title={option}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {option}
          </Typography>
          <Typography variant="body1" color="text.darkBlue">
            {text}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ pb: 2 }}>
        <ButtonRouter text='Learn More' href={'/about'}/>
      </CardActions>
    </Card>
  )
     
}

const Home = () => {
    // const [DialogComponent, openDialog] = useDialog();

    return (
      <Box
        sx={{
          gap: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
          zIndex: 1,
          width: 'auto'
        }}
      >
        {
          imageData.map((item) => (
            <OptionCard 
              key={item.option}
              option={item.option}
              picture={item.picture}
              text={item.text}
            />
          ))
        }
      </Box>
    );
};

export default Home;
