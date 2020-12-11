import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { MenuAppBar, SectionContent } from '../components';

class AlarmSoundsPageComponent extends Component {
  render() {
    return (
      <MenuAppBar sectionTitle="Alarms and Sounds">
        <SectionContent title='Alarms and Sounds' titleGutter>
          <Typography variant='body1' paragraph>
            Coming soon...
          </Typography>
        </SectionContent>
      </MenuAppBar>
    )
  }
}

export default AlarmSoundsPageComponent;
