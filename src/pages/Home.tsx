import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from '@mui/material';  
import constructionWorker from '../../public/pics/constructionWorker.jpg';
import meeting2 from '../../public/pics/meeting2.jpg';
import girlOnTheBed from '../../public/pics/girlOnTheBed.jpg';
import theme from '../theme';

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//     color: theme.palette.text.darkBlue,
// }));

interface OptionProps {
    option: string
    picture: string
}

const imageData: OptionProps[] = [
  {
    option: 'Design Your Desired Life',
    picture: constructionWorker,
  },
  {
    option: 'Create Your Life Strategy',
    picture: meeting2,
  },
  {
    option: 'Strategic Life: Applying Boardroom Thinking to Personal Success',
    picture: girlOnTheBed,
  }
]


const OptionCard = ({ option, picture }: OptionProps) => {
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
          <Typography variant="body2" color="text.secondary">
            Al contrario del pensamiento popular, el texto de 
            Lorem Ipsum no es simplemente texto aleatorio. 
            Tiene sus raices en una pieza clasica de la literatura 
            del Latin, que data del año 45 antes de Cristo, 
            haciendo que este adquiera mas de 2000 años de antiguedad.
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ pb: 2 }}>
        <Button size="small">Learn More</Button>
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
            />
          ))
        }
      </Box>
    );
};

export default Home;
