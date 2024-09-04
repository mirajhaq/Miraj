import React from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";

// Function to determine if the layout should be horizontal or vertical
const isHorizontal = window.innerWidth < 600;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "var(--navy) !important", // fallback or your choice of color
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `0px solid #ccc`, // Use a default color or your choice
  },

}));

// Accessibility props for Tabs
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

// TabPanel component to handle content rendering for each tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Revcap: {
      jobTitle: "IT Analyst",
      duration: "FEB 2022 - PRESENT",
      desc: [
        "Oversaw the maintenance of IT systems and infrastructure. Developed detailed documentation, ensuring clarity in processes and configurations, contributing to improved system management and knowledge sharing",
        "Business Continuity Planning: Actively participated in business continuity planning, contributing to the development of robust strategies that enhance organizational resilience and preparedness.",
        "Fronted the development of a local version of the 'Have I Been Pwned' password checker. This project involved scripting in Python, PowerShell, HTML, and PHP.",
        "Excelled in working collaboratively within the IT team and across departments, supporting successful project execution and fostering a productive work environment."
      ]
    },
    "CampbellReith": {
      jobTitle: "Graduate Structural Engineer",
      duration: "AUG 2021 - FEB 2022",
      desc: [
        "Performed Load Calculations: Accurately calculated structural loads, pressures, and stress distributions on building components to ensure compliance with engineering standards and safety regulations.",
        "Developed Computer Models: Created detailed computer models and structural drawings using advanced software to evaluate the integrity and performance of structures. Cross-verified results with manual calculations to ensure accuracy.",
        "Conducted Site Inspections: Executed thorough site inspections to assess the load-bearing capacity of ceiling beams and other structural elements.",
        "Produced Technical Documentation: Generated comprehensive reports and documentation for structural assessments, including load analysis and compliance checks, to support project approvals and construction phases."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
      orientation={!isHorizontal ? "vertical" : "horizontal"}
      variant={isHorizontal ? "fullWidth" : "scrollable"}
      value={value}
      onChange={handleChange}
      sx={{
        "& .MuiTabs-indicator": {
          height: '2px',
          backgroundColor: 'var(--green-bright)', // Use your custom color
        },
      }}
    >
      {Object.keys(experienceItems).map((key, i) => (
        <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
      ))}
    </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={i} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
