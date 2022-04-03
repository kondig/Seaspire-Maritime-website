import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SmAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx={{width:'100%'}}
          expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel1bh-content" id="panel1bh-header"
        >
          <Typography sx={{ width: '30%', flexShrink: 0, fontSize: '0.8rem', textAlign: 'left' }}>2022 Apr</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>Aegean Spire delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary sx={{width:'100%'}}
          expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel2bh-content" id="panel2bh-header"
        >
          <Typography sx={{ width: '30%', flexShrink: 0, fontSize: '0.8rem', textAlign: 'left' }}>2021 Sep</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>Trade Winds Articles (3)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary sx={{width:'100%'}}
          expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel3bh-content" id="panel3bh-header"
        >
          <Typography sx={{ width: '30%', flexShrink: 0, fontSize: '0.8rem', textAlign: 'left' }}>2021 Feb</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>Naftika Chronika 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left' }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary sx={{width:'100%'}}
          expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel4bh-content" id="panel4bh-header"
        >
          <Typography sx={{ width: '30%', flexShrink: 0, fontSize: '0.8rem', textAlign: 'left' }}>2022 Dec</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>Marine Money 2019</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left' }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export {SmAccordion};
