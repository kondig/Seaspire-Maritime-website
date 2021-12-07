import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function ServiceCard(props) {
  const theme = useTheme();
  const direction = props.direction;
  return (
    <div>
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column-reverse', margin: '20px auto', justifyContent: 'center', width: '80%'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
              <CardContent sx={{  }}>
                <Typography component="div" variant="h5" sx={{ color: '#1864ac', margin: '10px 2px', }}>
                  {props.service}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div"
                            sx={{ textAlign: 'left', margin: '5px 5px !important', fontSize: '0.7rem'}}>
                  {props.desc}
                </Typography>
              </CardContent>
            </Box>
          <CardMedia
            component="img"
            sx={{ height: '200px' }}
            image={props.image}
            alt={props.service}
            title={props.service}
          />
        </Card>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} sx={{ display: 'flex', justifyContent: 'center', backgroundColor:'red'}}>
        {direction == "LR" &&
          <Card sx={{ display: 'flex', margin: '20px auto', justifyContent: 'space-between', width: '80%'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }} >
            <CardContent sx={{  }}>
              <Typography component="div" variant="h5" sx={{ color: '#1864ac', margin: '10px 5px'}}>
                {props.service}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                {props.desc}
              </Typography>
            </CardContent>
          </Box>
            <CardMedia
              component="img"
              sx={{ width: '45%' }}
              image={props.image}
              alt={props.service}
              title={props.service}
            />
          </Card>
        }
        {direction == "RL" &&
          <Card sx={{ display: 'flex', margin: '20px auto', justifyContent: 'space-between', width: '80%'}}>
            <CardMedia
              component="img"
              sx={{ width: '45%' }}
              image={props.image}
              alt={props.service}
              title={props.service}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }} >
              <CardContent sx={{  }}>
                <Typography component="div" variant="h5" sx={{ color: '#1864ac', margin: '10px 5px'}}>
                  {props.service}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                  {props.desc}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        }
      </Box>
    </div>
  );
}

class Service extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { service, desc, image, alt, title, direction } = this.props;
    return (
      <div>
        <ServiceCard
          service = { service }
          desc = { desc }
          image = { image }
          direction = { direction }
         />
      </div>
    );
  }
}

export {Service};
