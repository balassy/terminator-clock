import React, { Component } from 'react';
import { restController, RestControllerProps, RestFormLoader } from '../../components';
import { ENDPOINT_ROOT } from '../../api';
import { SoundsSettings } from './sounds.types';
import { SoundsForm } from './SoundsForm.component';

const SOUNDS_ENDPOINT = ENDPOINT_ROOT + "sounds";

type SoundsControllerProps = RestControllerProps<SoundsSettings>;

class SoundsControllerComponent extends Component<SoundsControllerProps> {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <RestFormLoader
        {...this.props}
        render={props => (
          <SoundsForm {...props} />
        )}
      />
    )
  }
}

export default restController(SOUNDS_ENDPOINT, SoundsControllerComponent);
