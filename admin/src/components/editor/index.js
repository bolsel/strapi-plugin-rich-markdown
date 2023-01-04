import React from 'react';
import Editor from 'rich-markdown-editor';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldHint, FieldError, FieldLabel } from '@strapi/design-system/Field';
import { useIntl } from 'react-intl';
import embeds from '../embeds';
import './styles.css';

const EditorWrapper = (props) => {
  const { attribute, onChange, name, value, disabled, labelAction, intlLabel, required, description, error } = props;

  const { formatMessage } = useIntl();
  const options = attribute.options ?? {};
  const { showLabel } = options;

  return (
    <Field
      name={name}
      id={name}
      // GenericInput calls formatMessage and returns a string for the error
      error={error}
      hint={description && formatMessage(description)}
    >
      <Stack spacing={1}>
        {showLabel && (
          <FieldLabel action={labelAction} required={required}>
            {formatMessage(intlLabel)}
          </FieldLabel>
        )}
        <Editor
          placeholder={'Mulai tulis konten.'}
          onChange={(value) => {
            onChange({ target: { name, value: value() } });
          }}
          uploadImage={(file) => {
            console.log('File upload triggered: ', file);

            // Delay to simulate time taken to upload
            return new Promise((resolve) => {
              setTimeout(() => resolve(URL.createObjectURL(file)), 1500);
            });
          }}
          embeds={embeds}
          defaultValue={value}
        />

        <FieldHint />
        <FieldError />
      </Stack>
    </Field>
  );
};
export default EditorWrapper;
