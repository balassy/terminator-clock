import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { MenuAppBar, SectionContent } from '../../components';

export class AlarmsPageComponent extends Component {
  render() {
    return (
      <MenuAppBar sectionTitle="Alarms">
        <SectionContent title='Alarms' titleGutter>
          <Typography variant='body1' paragraph>
            Coming soon...
          </Typography>
        </SectionContent>
      </MenuAppBar>
    )
  }
}
