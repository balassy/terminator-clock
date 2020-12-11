import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { MenuAppBar, SectionContent } from '../components';

class CalibrationPageComponent extends Component {
  render() {
    return (
      <MenuAppBar sectionTitle="Calibration">
        <SectionContent title='Calibration' titleGutter>
          <Typography variant='body1' paragraph>
            Coming soon...
          </Typography>
        </SectionContent>
      </MenuAppBar>
    )
  }
}

export default CalibrationPageComponent;
