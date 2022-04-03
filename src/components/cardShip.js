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
          <Card sx={{ display: 'flex', flexDirection:'column', margin: '0 auto', justifyContent: 'center', width: '95%',
                      backgroundColor:'transparent', boxShadow:'0px 0px 0px #333', border:'0', borderRadius:'0px'}}>
            <CardMedia
              component="img"
              sx={{ width: '100%' }}
              image={props.image}
              alt={props.ship}
              title={props.ship}
            />
            <Box sx={{backgroundColor:'transparent', width: '100%'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '0'  }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.spec} sx={{'&:last-child td, &:last-child th': {  }  }} >
                          <TableCell component="th" scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                            {row.spec}
                          </TableCell>
                          <TableCell align="right" sx={{ backgroundColor: '#ffffff', color: '#1864ac', fontWeight:'700', border:'0', fontSize:'0.8rem', padding:'5px 5px' }}>
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
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{backgroundColor:'transparent',}}>
        {direction == "RL" &&
          <Card sx={{ display: 'flex', margin: '0', justifyContent: 'space-between', width: '100%', height:'100%', backgroundColor:'transparent',
                      boxShadow:'0px 0px 0px #333', border:'0', borderRadius:'0px'}}>
            <CardMedia
              component="img"
              sx={{ width: '55%', height:'37vh' }}
              image={props.image}
              alt={props.ship}
              title={props.ship}
            />
            <Box sx={{backgroundColor:'transparent', width:'45%'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width:'100%', height:'100%', padding:'0px !important', }}>
                <TableContainer component={Paper} sx={{ height:'100%', backgroundColor: 'transparent', borderRadius:'0px' }}>
                  <Table sx={{ minWidth: 250, height:'100%', backgroundColor: 'transparent', }} size="small" aria-label="a dense table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.spec} sx={{backgroundColor: 'transparent','&:last-child td, &:last-child th': {  }  }} >
                          <TableCell component="th" scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontSize:'0.5rem', fontWeight:'700', border:'0' }} >
                            {row.spec}
                          </TableCell>
                          <TableCell align="right" sx={{ backgroundColor: '#ffffff', color: '#1864ac', fontSize:'0.6rem', fontWeight:'700', border:'0' }}>
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


function createRowData(ship, buildBy, year, deadweight) {
  return { ship, buildBy, year, deadweight };
}

function PrevShipCard(props) {
  const theme = useTheme();
  const rows = [
    createRowData(props.ship, props.buildBy, props.year, props.deadweight),
  ];
  return (
    <div>
      <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
          <Card sx={{ display: 'flex', flexDirection:'column', margin: '0 auto', justifyContent: 'center', width: '100%',
                      backgroundColor:'transparent', boxShadow:'0px 0px 0px #333', border:'0', borderRadius:'0px'}}>
            <Box sx={{backgroundColor:'#ffffff', width: '100%'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '10px'  }}>
                <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
                    <Table sx={{ minWidth: 250, height:'100%', backgroundColor: 'transparent', }} size="small" aria-label="a dense table">
                        <TableHead sx={{'&:last-child td, &:last-child th': {  }  }} >
                            <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.6rem', padding:'5px 5px' }} >
                                Vessel
                            </TableCell>
                            <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.6rem', padding:'5px 5px' }} >
                                Build by
                            </TableCell>
                            <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.6rem', padding:'5px 5px' }} >
                                Year
                            </TableCell>
                            <TableCell align="center" scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.6rem', padding:'5px 5px' }} >
                                Deadweight
                            </TableCell>
                        </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.ship} sx={{'&:last-child td, &:last-child th': {  }  }} >
                                <TableCell align="center" sx={{ backgroundColor: '#ffffff', color: '#1864ac', fontWeight:'700', border:'0', fontSize:'0.8rem', padding:'5px 5px' }}>
                                    {row.ship}
                                </TableCell>
                                <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:{xs:'0.5em',md:'0.6em', lg:'0.7em', xl:'0.7em'}, padding:'5px 5px' }} >
                                    {row.buildBy}
                                </TableCell>
                                <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:{xs:'0.5em',md:'0.6em', lg:'0.7em', xl:'0.7em'}, padding:'5px 5px' }} >
                                    {row.year}
                                </TableCell>
                                <TableCell align="center" scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:{xs:'0.5em',md:'0.6em', lg:'0.7em', xl:'0.7em'}, padding:'5px 5px' }} >
                                    {row.deadweight}
                                </TableCell>
                            </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                </TableContainer>
              </CardContent>
            </Box>
          </Card>
      </Box>
      <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }} sx={{backgroundColor:'transparent',}}>
          <Card sx={{ display: 'flex', margin: '0', justifyContent: 'space-between', width: '100%', height:'100%', backgroundColor:'transparent',
                      boxShadow:'0px 0px 0px #333', border:'0', borderRadius:'0px'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width:'100%', height:'100%', padding:'0px !important', }}>
                <TableContainer component={Paper} sx={{ height:'100%', backgroundColor: 'transparent', borderRadius:'0px' }}>
                  <Table sx={{ minWidth: 250, height:'100%', backgroundColor: 'transparent', }} size="small" aria-label="a dense table">
                      <TableHead sx={{'&:last-child td, &:last-child th': {  }  }} >
                          <TableCell align="center" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.8rem', padding:'5px 5px' }}>
                              Vessel
                          </TableCell>
                          <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                              Build by
                          </TableCell>
                          <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                              Year
                          </TableCell>
                          <TableCell align="center" scope="row" sx={{ backgroundColor: '#ffffff', color: '#afbdc5', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                              Deadweight
                          </TableCell>
                      </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                          <TableRow key={row.ship} sx={{'&:last-child td, &:last-child th': {  }  }} >
                              <TableCell align="center" sx={{ backgroundColor: '#ffffff', color: '#1864ac', fontWeight:'700', border:'0', fontSize:'0.8rem', padding:'5px 5px' }}>
                                  {row.ship}
                              </TableCell>
                              <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                                  {row.buildBy}
                              </TableCell>
                              <TableCell align="center"scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                                  {row.year}
                              </TableCell>
                              <TableCell align="center" scope="row" sx={{ backgroundColor: '#ffffff', color: '#000000', fontWeight:'700', border:'0', fontSize:'0.7rem', padding:'5px 5px' }} >
                                  {row.deadweight}
                              </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
          </Card>
      </Box>
    </div>
  );
}
function PrevShip(props) {
    const { ship, buildBy, deadweight, year } = props;
    return (
      <div>
        <PrevShipCard
          ship = { ship }
          year = { year }
          buildBy = { buildBy }
          deadweight = { deadweight }
         />
      </div>
    );
}

export { PrevShip };
export default Ship;
