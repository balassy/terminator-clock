import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import MusicNote from '@material-ui/icons/MusicNote';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

import { PROJECT_PATH } from '../api';

class ProjectMenu extends Component<RouteComponentProps> {

  render() {
    const path = this.props.match.url;
    return (
      <List>
        <ListItem to={`/${PROJECT_PATH}/sounds/`} selected={path.startsWith(`/${PROJECT_PATH}/sounds/`)} button component={Link}>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Sounds" />
        </ListItem>
        <ListItem to={`/${PROJECT_PATH}/alarms/`} selected={path.startsWith(`/${PROJECT_PATH}/alarms/`)} button component={Link}>
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <ListItemText primary="Alarms" />
        </ListItem>
        <ListItem to={`/${PROJECT_PATH}/calibration/`} selected={path.startsWith(`/${PROJECT_PATH}/calibration/`)} button component={Link}>
          <ListItemIcon>
            <ControlCameraIcon />
          </ListItemIcon>
          <ListItemText primary="Calibration" />
        </ListItem>
        <ListItem to={`/${PROJECT_PATH}/demo/information`} selected={path.startsWith(`/${PROJECT_PATH}/demo/`)} button component={Link}>
          <ListItemIcon>
            <SettingsRemoteIcon />
          </ListItemIcon>
          <ListItemText primary="Demo Project" />
        </ListItem>
      </List>
    )
  }

}

export default withRouter(ProjectMenu);
