import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { Grid, Tabs, Tab, useTheme, makeStyles } from '@material-ui/core'

import { Palette, People, Camera } from '@material-ui/icons'

import './profileTabs.style.scss'
import { TabPanel_1 } from './components/tabPanel-1/tabPanel-1.components'
import { TabPanel_2 } from './components/tabPanel-2/tabPanel-2.component'
import { TabPanel_3 } from './components/tabPanel-3/TabPanel-3.component'

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Grid
      item
      container
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid item container p={3}>
          {children}
        </Grid>
      )}
    </Grid>
  )
}

const a11Props = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}))

export const ProfileTabs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setvalue] = useState(0)

  const handleChangeIndex = (index) => {
    setvalue(index)
  }

  const handleChange = (e, newValue) => {
    setvalue(newValue)
  }

  return (
    <div>
      <Grid item container className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="scrollable force tabs example"
          style={{
            width: '100%',
            overflow: 'visible',
            marginTop: 20,
            paddingLeft: 0,
            marginBottom: 0,
          }}
          className="centered"
        >
          <Tab label="WORK" icon={<Palette />} {...a11Props(0)} />

          <Tab label="CONNECTIONS" icon={<People />} {...a11Props(1)} />

          <Tab label="MEDIA" icon={<Camera />} {...a11Props(2)} />
        </Tabs>
      </Grid>
      <Grid item container>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ width: '100%' }}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <TabPanel_1 />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TabPanel_2 />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <TabPanel_3 />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </div>
  )
}
