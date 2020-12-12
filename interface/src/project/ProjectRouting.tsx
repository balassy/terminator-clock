import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router';

import { PROJECT_PATH } from '../api';
import { AuthenticatedRoute } from '../authentication';

import DemoProject from './demo/DemoProject';
import { AlarmsPageComponent } from './alarms/AlarmsPage.component';
import { CalibrationPageComponent } from './calibration/CalibrationPage.component';
import { SoundsPageComponent } from './sounds/SoundsPage.component';

class ProjectRouting extends Component {

  render() {
    return (
      <Switch>
        {
          /*
          * Add your project page routing below.
          */
        }
        <AuthenticatedRoute exact path={`/${PROJECT_PATH}/sounds/*`} component={SoundsPageComponent} />
        <AuthenticatedRoute exact path={`/${PROJECT_PATH}/alarms/*`} component={AlarmsPageComponent} />
        <AuthenticatedRoute exact path={`/${PROJECT_PATH}/calibration/*`} component={CalibrationPageComponent} />
        <AuthenticatedRoute exact path={`/${PROJECT_PATH}/demo/*`} component={DemoProject} />
        {
          /*
          * The redirect below caters for the default project route and redirecting invalid paths.
          * The "to" property must match one of the routes above for this to work correctly.
          */
        }
        <Redirect to={`/${PROJECT_PATH}/sounds/`} />
      </Switch>
    )
  }

}

export default ProjectRouting;
