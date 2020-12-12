import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@material-ui/icons/Save';
import { RestFormProps, FormActions, FormButton } from '../../components';

import { SoundsSettings } from './sounds.types';

type SoundsFormProps = RestFormProps<SoundsSettings>;

export function SoundsForm(props: SoundsFormProps) {
  const { data, saveData, handleValueChange } = props;

  return (
    <ValidatorForm onSubmit={saveData}>
      <TextValidator
        validators={['required']}
        errorMessages={['Boot sound file ID is required']}
        name="bootFileId"
        label="Boot File ID"
        fullWidth
        variant="outlined"
        value={data.bootFileId}
        onChange={handleValueChange('bootFileId')}
        margin="normal"
        type="number"
      />
      <FormActions>
        <FormButton startIcon={<SaveIcon />} variant="contained" color="primary" type="submit">
          Save
        </FormButton>
      </FormActions>
    </ValidatorForm>
  );
}
