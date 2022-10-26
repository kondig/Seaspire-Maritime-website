import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Ship from './cardShip';
import { PrevShips } from './cardShip';
import InfoIcon from '@mui/icons-material/Info';

// import ship1 from './slider/balticspire.jpg';
import ship2 from '../images/Saronic-Spire.jpg';
import ship3 from '../images/Ionian-Spire.jpg';
import ship4 from '../images/Aegean-Spire.jpg';
import ship5 from '../images/Corinthian-Spire.jpg';
import ship6 from '../images/Messinian-Spire.jpeg';

function FleetAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#1864ac', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel1bh-content" id="panel1bh-header" sx={{width: '100%', backgroundColor: '#ffffff !important'}} >
            <Typography className="ship-tag" sx={{ width: '100%', color:'#1864ac', textAlign: 'center', fontSize:'1.4em', textShadow:'1px 1px 1px #afbdc5' }}>
                Saronic Spire
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship2} direction={`RL`} ship={'Saronic Spire'}
                  type={'Open Hatch/Box type bulk carrier'} buildBy={'Kanda Yard, Japan / 2004'}
                  deadweight={'32.355 dwt on 10.02m ssw'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2016'}/>
        </AccordionDetails>
      </Accordion>
      {/*<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters={true} sx={{ backgroundColor: 'transparent' }} >
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#1864ac', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel2bh-content" id="panel2bh-header" sx={{ width: '100%', backgroundColor: '#ffffff !important'}} >
          <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1864ac', fontSize:'1.4em', textShadow:'1px 1px 1px #afbdc5' }}>
            Ionian Spire
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', padding:0 }}>
            <Ship image={ship3} direction={`RL`} ship={'Ionian Spire'}
                  type={'Open Hatch/Box type bulk carrier'} buildBy={'Kanda Yard, Japan / 2008'}
                  deadweight={'32.269 dwt on 10.02m ssw'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2017'}/>
        </AccordionDetails>
      </Accordion>*/}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters={true} sx={{ backgroundColor: '#1864ac' }}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#ffffff', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel2bh-content" id="panel2bh-header" sx={{width: '100%'}} >
          <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#ffffff', fontSize:'1.4em', textShadow:'1px 1px 1px #afbdc5' }}>
              Aegean Spire
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship4} direction={`RL`} ship={'Aegean Spire'}
                  type={'Open Hatch/Box type bulk carrier'} buildBy={'Shin Kochiyuko Co. Ltd, Japan / 2008'}
                  deadweight={'33.401 dwt on 10.031m ssw'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2018'}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#1864ac', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel3bh-content" id="panel3bh-header" sx={{ width: '100%', backgroundColor: '#ffffff !important'}} >
            <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1864ac', fontSize:'1.4em', textShadow:'1px 1px 1px #afbdc5' }}>
                Corinthian Spire
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship5} direction={`RL`} ship={'Corinthian Spire'}
                  type={'Open Hatch/Box type bulk carrier'} buildBy={'KANDA SHIPBUILDING, Japan / 2009'}
                  deadweight={'32,154 dwt on 10.022m ssw'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2021'}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disableGutters={true} sx={{ backgroundColor: '#1864ac' }}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#ffffff', width:'1.3em', height:'1.3em', padding: '5px'}} />}
            aria-controls="panel4bh-content" id="panel4bh-header" sx={{width: '100%'}}>
            <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#ffffff', fontSize:'1.4em', textShadow:'1px 1px 1px #afbdc5' }}>
                Messinian Spire
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship6} direction={`RL`} ship={'Aegean Spire'}
                  type={'Bulk carrier / Grab-fitted'} buildBy={'MITSUI, Japan / 2008'}
                  deadweight={'56,056 dwt on 12.573m ssw'} flag={'Bahamas'} engine={'MITSUI MAN 6S50MC-C'} managed={'2021'}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{color:'#1864ac', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel5bh-content" id="panel5bh-header" sx={{ width: '100%', backgroundColor: '#ffffff !important'}} >
            <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1864ac', fontSize:'1em', textShadow:'1px 1px 1px #afbdc5' }}>
                Previously under management
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <PrevShips ships={['Ionian Spire','Baltic Spire']}
                      year={['2008','1997']}
                      deadweight={['32.269 dwt','28.545 dwt']}
                      buildBy={['Kanda Yard','Imabari Shipbuilding Co. Ltd']} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FleetAccordion;
