import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography, Box, InputAdornment, Button } from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import SaveIcon from '@material-ui/icons/Save';
import { RestFormProps, FormActions, FormButton } from '../../components';

import { ENDPOINT_ROOT } from '../../api';

import { SoundsSettings } from './sounds.types';
import { redirectingAuthorizedFetch } from '../../authentication';

const PLAY_ENDPOINT = ENDPOINT_ROOT + "play";

type SoundsFormProps = RestFormProps<SoundsSettings>;

export class SoundsForm extends Component<SoundsFormProps> {
  onPlayClicked = () => {
    redirectingAuthorizedFetch(PLAY_ENDPOINT, {
      method: 'POST',
      body: `{ fileId: ${this.props.data.bootFileId} }`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.props.enqueueSnackbar('Playing completed. Did you hear it?', { variant: 'success' });
        } else {
          throw Error('Invalid status code: ' + response.status);
        }
      })
      .catch(error => {
        this.props.enqueueSnackbar(error.message || 'Unknown error while playing the selected sound file', { variant: 'error' });
      });
  }

  render() {
    const { data, saveData, handleValueChange } = this.props;

    return (
      <ValidatorForm onSubmit={saveData}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} mt={2} mb={2}>
          <Typography variant="body1">
            Sound file identifiers refer to the order the files are written to the SD card, not to the name of the files!
          </Typography>
        </Box>

        <TextValidator
          validators={['required']}
          errorMessages={['Boot sound file ID is required']}
          name="bootFileId"
          label="Boot sound file ID"
          fullWidth
          variant="outlined"
          value={data.bootFileId}
          onChange={handleValueChange('bootFileId')}
          margin="normal"
          type="number"
          helperText="This sound will be played when you power on or restart your device."
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Button startIcon={<PlayArrow />} variant="contained" color="secondary" onClick={this.onPlayClicked}>
                  Play
                </Button>
              </InputAdornment>
            )
          }}
        />
        <FormActions>
          <FormButton startIcon={<SaveIcon />} variant="contained" color="primary" type="submit">
            Save
          </FormButton>
        </FormActions>
      </ValidatorForm>
    );
  }
}
