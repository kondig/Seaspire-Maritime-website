import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Ship from './cardShip';
import InfoIcon from '@mui/icons-material/Info';

import ship1 from './slider/balticspire.jpg';
import ship2 from './slider/saronicspire2.jpg';
import ship3 from './slider/ionianspire.jpg';
import ship4 from './slider/aegeanspire.jpg';

function FleetAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters={true} sx={{ backgroundColor: 'transparent' }} >
        <AccordionSummary expandIcon={<InfoIcon sx={{color:'#1A6D8F', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel1bh-content" id="panel1bh-header" sx={{ width: '100%', backgroundColor: '#ffffff !important'}} >
          <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1A6D8F', fontSize:'1.5em', textShadow:'1px 1px 1px #afbdc5' }}>
            Baltic Spire
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
          <Ship image={ship1} direction={`RL`} ship={'Baltic Spire'}
                type={'Single Decker self-trimmed bulk carrier / Log-fitted'} buildBy={'Imabari Shipbuilding Co. Ltd Japan / 1997'}
                deadweight={'28.545 dwt'} flag={'Bahamas'} engine={'MITSUI B&W 6S42MC'} managed={'2014'} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<InfoIcon sx={{color:'#1A6D8F', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel2bh-content" id="panel2bh-header" sx={{width: '100%'}} >
          <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1A6D8F', fontSize:'1.5em', textShadow:'1px 1px 1px #afbdc5' }}>
              Saronic Spire
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
          <Ship image={ship2} direction={`RL`} ship={'Saronic Spire'}
                type={'Open/Box type bulk carrier'} buildBy={'Kanda Yard Japan / 2004'}
                deadweight={'32.355 dwt'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2016'}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<InfoIcon sx={{color:'#1A6D8F', width:'1.3em', height:'1.3em', padding: '5px'}} />}
                          aria-controls="panel3bh-content" id="panel3bh-header" sx={{ width: '100%', backgroundColor: '#ffffff !important'}} >
            <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1A6D8F', fontSize:'1.5em', textShadow:'1px 1px 1px #afbdc5' }}>
                Ionian Spire
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship3} direction={`RL`} ship={'Ionian Spire'}
                  type={'Open/Box type bulk carrier'} buildBy={'Kanda Yard Japan / 2008'}
                  deadweight={'32.269 dwt'} flag={'Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'2017'}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disableGutters={true} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<InfoIcon sx={{color:'#1A6D8F', width:'1.3em', height:'1.3em', padding: '5px'}} />}
            aria-controls="panel4bh-content" id="panel4bh-header" sx={{width: '100%'}}>
            <Typography className="ship-tag" sx={{ width: '100%', flexShrink: 0, textAlign: 'center', color:'#1A6D8F', fontSize:'1.5em', textShadow:'1px 1px 1px #afbdc5' }}>
                Aegean Spire
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'transparent', padding:0 }}>
            <Ship image={ship4} direction={`RL`} ship={'Aegean Spire'}
            type={'Open/Box type bulk carrier'} buildBy={'Shin Kochiyuko Co. Ltd Japan / 2008'}
            deadweight={'33.401 dwt'} flag={'Panama tbc Bahamas'} engine={'KOBE DIESEL CO.LTD. 6UEC52LA'} managed={'Jan. 2018'}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FleetAccordion;
