import React, { Component } from 'react';
import { MenuAppBar, SectionContent } from '../../components';
import SoundsControllerComponent from './SoundsController.component';

export class SoundsPageComponent extends Component {
  render() {
    return (
      <MenuAppBar sectionTitle="Sounds">
        <SectionContent title='Sounds' titleGutter>
          <SoundsControllerComponent>
          </SoundsControllerComponent>
        </SectionContent>
      </MenuAppBar>
    )
  }
}
