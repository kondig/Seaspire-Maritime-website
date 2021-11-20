import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(spec, value) {
  return { spec, value };
}

function ShipCard(props) {
  const theme = useTheme();
  const direction = props.direction;
  const rows = [
    createData('Type', props.type),
    createData('Build by / Year', props.buildBy),
    createData('Deadweight', props.deadweight),
    createData('Flag', props.flag),
    createData('Main Engine', props.engine),
    createData('Managed since', props.managed),
  ];
  return (
    <div>
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column-reverse', margin: '20px auto', justifyContent: 'center', width: '90%'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
            <CardContent sx={{  }}>
              <Typography component="div" variant="h5" sx={{ color: '#1A6D8F', margin: '10px 5px'}}>
                {props.ship}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                {props.desc}
              </Typography>

            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ height: '300px' }}
            image={props.image}
            alt={props.ship}
            title={props.ship}
          />
        </Card>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{backgroundColor:'transparent'}}>
        {direction == "LR" &&
          <Card sx={{ display: 'flex', margin: '20px auto', justifyContent: 'space-between', width: '80%', backgroundColor: 'red'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '65%', backgroundColor:'transparent' }}>
              <CardContent sx={{  }}>
                <Typography component="div" variant="h5" sx={{ color: '#1A6D8F', margin: '10px 5px', backgroundColor:'transparent'}}>
                  {props.ship}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ textAlign: 'left', margin: '10px 5px !important'}}>
                  {props.desc}
                </Typography>

              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '35%' }}
              image={props.image}
              alt={props.ship}
              title={props.ship}
            />
          </Card>
        }
        {direction == "RL" &&
          <Card sx={{ display: 'flex', margin: '0', justifyContent: 'space-between', width: '100%', backgroundColor:'transparent',
                      boxShadow:'0px 0px 0px #333', border:'0',}}>
            <CardMedia
              component="img"
              sx={{ width: '45%' }}
              image={props.image}
              alt={props.ship}
              title={props.ship}
            />
            <Box sx={{  }} sx={{backgroundColor:'transparent'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.spec} sx={{'&:last-child td, &:last-child th': {  }  }} >
                          <TableCell component="th" scope="row" sx={{ backgroundColor: '#1A6D8F', color: '#afbdc5' }} >
                            {row.spec}
                          </TableCell>
                          <TableCell align="right" sx={{ backgroundColor: '#1A6D8F', color: '#ffffff' }}>
                            {row.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Box>
          </Card>
        }
      </Box>
    </div>
  );
}

class Ship extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { ship, desc, image, alt, direction,
            type, buildBy, deadweight, flag, engine, managed } = this.props;
    return (
      <div>
        <ShipCard
          ship = { ship }
          desc = { desc }
          image = { image }
          direction = { direction }
          type = { type }
          buildBy = { buildBy }
          deadweight = { deadweight }
          flag = { flag }
          engine = { engine }
          managed = { managed }
         />
      </div>
    );
  }
}

export default Ship;
