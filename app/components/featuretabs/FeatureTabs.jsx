import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { muiStyle, tabStyle } from "./style/muiStyling";
import TabPanel from "./components/TabPanel";
import TabContent from "./components/TabContent";
import { feature1, feature2, feature3 } from "./data/featuresData";
import MotionDiv from "./components/MotionDiv";

const FeatureTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <div className="defaultpadding_tabs">
      {/* Material UI Tabs */}
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={muiStyle}
        >
          <Tab label="Live Classes" className={tabStyle} wrapped />
          <Tab label="Recorded Courses" className={tabStyle} wrapped />
          <Tab label="Practice Zone" className={tabStyle} wrapped />
        </Tabs>

        <MotionDiv
          value={value}
        >
          {/* Panel 1 */}
        <TabPanel value={value} index={0}>
          <TabContent featuresList={feature1} />
        </TabPanel>

        {/* Panel 2 */}
        <TabPanel value={value} index={1}>
          <TabContent featuresList={feature2} />
        </TabPanel>

        {/* Panel 3 */}
        <TabPanel value={value} index={2}>
          <TabContent featuresList={feature3} />
        </TabPanel>

        </MotionDiv>
      </div>
    </div>
  );
};

export default FeatureTabs;
