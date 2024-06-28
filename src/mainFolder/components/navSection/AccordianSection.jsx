import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordianSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Program Overview
          </Typography>
          <Typography sx={{ color: 'blue' }}>Introduction and Scope</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Discover the comprehensive coverage of our Full Stack Development program. This section provides insights into the program’s objectives, duration, and the skills you will acquire to excel in the tech industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Curriculum</Typography>
          <Typography sx={{ color: 'blue' }}>
          Courses and Modules
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Explore our carefully curated curriculum that includes front-end, back-end, and database management. Each module is designed to equip you with the practical knowledge and tools needed for a successful career in Full Stack Development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Faculty
          </Typography>
          <Typography sx={{ color: 'blue' }}>
          Educators and Mentors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Meet our experienced faculty members who bring a wealth of knowledge from the industry. Learn from experts who are dedicated to providing you with the best education and mentorship in Full Stack Development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Career Services</Typography>
          <Typography sx={{ color: 'blue' }}>
          Job Placement and Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Take advantage of our robust career services, which include job placement assistance, internship opportunities, and career counseling. We are committed to helping you transition seamlessly from education to a successful career in tech.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}