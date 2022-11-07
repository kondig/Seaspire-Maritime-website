import * as React from 'react';
import Box from '@mui/material/Box';
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
    <Box sx={{ zIndex:'1000', }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel1bh-content" id="panel1bh-header"
        >
          <Typography color='primary' sx={{ width: '25%', flexShrink: 0, fontSize: '0.8rem', textAlign: 'left' }}>2022 Jul</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>TradeWinds article</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
          <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
            Load Line makes bulker asset play amid choppier S&P markets.
            <br/><a href="https://www.tradewindsnews.com/bulkers/load-line-makes-bulker-asset-play-amid-choppier-s-p-markets/2-1-1262316"
                    target="_blank" rel="noopener noreferrer" className="news-link">
                Read more
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel2bh-content" id="panel2bh-header"
        >
          <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2021 Sep</Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>Naftika Chronika No.242</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
          <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
            Newcomers in the Shipping Industry: Challenges and Opportunities, Issue no. 242,  page 52.
            <br/><a href="https://s3.eu-central-1.amazonaws.com/naftikachronika-issues/242.pdf"
                    target="_blank" rel="noopener noreferrer" className="news-link">
                Read more
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel3bh-content" id="panel3bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2021 Mar</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Messinian Spire Delivery</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Messinian Spire (Ex-Darya Mahesh) was delivered to her new managers, Seaspire Maritime Inc., on March 24th, 2021.
              MV Messinian Spire is a 56,056-dwt dry cargo vessel with 4x30T Cranes and 4x13.5cbm Grabs built in 2008 in Mitsui Tamano, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel4bh-content" id="panel4bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2019 Nov</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Corinthian Spire Delivery</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Corinthian Spire (Ex-Crane Island) was delivered to her new managers, Seaspire Maritime Inc., on November 05th, 2019.
              MV Corinthian Spire is a 32,154-dwt open-box type dry cargo vessel with 4x30T Cranes built in 2009 in Kanda, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel5bh-content" id="panel5bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2019 Oct</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>Marine Money Athens</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              2019 Greek Ship Finance Forum - Greek Shipping Staying Ahead
              <br/><a href="https://www.marinemoney.com/events-2-0-2/2019-greek-ship-finance-forum"
                      target="_blank" rel="noopener noreferrer" className="news-link">
                  Read more
              </a>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel6bh-content" id="panel6bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2019 Jul</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>TradeWinds article</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              Greek handysize bulker buying picks up steam in July
              <br/><a href="https://www.tradewindsnews.com/bulkers/greek-handysize-bulker-buying-picks-up-steam-in-july/2-1-646098"
                      target="_blank" rel="noopener noreferrer" className="news-link">
                  Read more
              </a>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel7bh-content" id="panel7bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2018 Feb</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>TradeWinds article</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              Seaspire confirms handy bulker buys
              <br/><a href="https://www.tradewindsnews.com/seaspire-confirms-handy-bulker-buys/2-1-281861"
                      target="_blank" rel="noopener noreferrer" className="news-link">
                  Read more
              </a>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel8bh-content" id="panel8bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2018 Jan</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Aegean Spire Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Aegean Spire (Ex-Atlantic Treasure) was delivered to her new managers, Seaspire Maritime Inc., on January 25th, 2018.
              MV Aegean Spire is a 33,401-dwt open-box type dry cargo vessel with 4x30T Cranes built in 2008 in Shin Kochiyuko Co. Ltd, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel9bh-content" id="panel9bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2017 Jun</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Ionian Spire Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Ionian Spire (Ex-C.S. Ocean)was delivered to her new managers, Seaspire Maritime Inc., on June 21st, 2017.
              MV Ionian Spire is a 32,269-dwt open-box type dry cargo vessel with 4x30T Cranes built in 2008 in Kanda, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel10bh-content" id="panel10bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2016 Oct</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Saronic Spire Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Saronic Spire (Ex-CS Salina) was delivered to her new managers, Seaspire Maritime Inc., on October 2nd, 2016.
              MV Saronic Spire is a 32,355-dwt open-box type dry cargo vessel with 4x30T Cranes built in 2004 in Kanda, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary sx={{width:'100%', alignItems:'center'}} expandIcon={<ExpandMoreIcon sx={{padding:'5px'}}/>}
          aria-controls="panel11bh-content" id="panel11bh-header"
        >
            <Typography color='primary' sx={{ width: '25%', fontSize: '0.8rem', textAlign: 'left' }}>2014 Oct</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>MV Baltic Spire Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:{xs:'5px 10px 10px', md:'8px 16px 16px'}}}>
            <Typography sx={{ textAlign: 'left', fontSize:'0.8rem', lineHeight:'1.2' }}>
              MV Baltic Spire (Ex-Baltic ID) was delivered to her new managers, Seaspire Maritime Inc., on October 22nd, 2014.
              MV Baltic Spire is a 28,545-dwt log-fitted dry cargo vessel with 4x30T Cranes built in 1997 in Imabari Shipbuilding Co. Ltd, Japan
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export {SmAccordion};
