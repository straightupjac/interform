// FormElements.jsx

import React from 'react';
import {
  Formik,
  Form as FormikForm,
  ErrorMessage,
  useFormikContext,
} from 'formik';
import { Checkbox, CheckboxGroup, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';

export function Form(props: any) {
  return (
    <Formik
      {...props}
    >
      <FormikForm className="needs-validation">
        {props.children}
      </FormikForm>
    </Formik>)
}

export function TextField(props: any) {
  const { question, description, label, placeholder, isRequired, ...rest } = props;
  return (
    <>
      <HStack>
        <h3>{question}</h3>
        {isRequired && <Text color="red.400">*</Text>}
      </HStack>      {description && <Text color="gray.600">{description}</Text>}
      <Input
        className="form-control"
        type="text"
        name={label}
        id={label}
        placeholder={placeholder || ""}
        {...rest}
      >
      </Input>
      <ErrorMessage name={label} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export function SelectField(props: any) {
  const { question, description, label, options, isRequired } = props;
  return (
    <>
      <HStack>
        <h3>{question}</h3>
        {isRequired && <Text color="red.400">*</Text>}
      </HStack>
      {description && <Text color="gray.600">{description}</Text>}
      <Select
        id={label}
        name={label}
      >
        <option value="" >Choose...</option>
        {options.map((optn: any, idx: number) => <option key={idx} value={optn.value} label={optn.label || optn.value} />)}
      </Select>
      <ErrorMessage name={label} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export function Multiselect(props: any) {
  const { question, description, label, options, isRequired } = props;
  return (
    <>
      <HStack>
        <h3>{question}</h3>
        {isRequired && <Text color="red.400">*</Text>}
      </HStack>
      {description && <Text color="gray.600">{description}</Text>}
      <CheckboxGroup>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {options.map((optn: any, idx: number) => <Checkbox key={idx} value={optn.value} name={label}>{optn.label || optn.value}</Checkbox>)}
        </Stack>
      </CheckboxGroup>
      <ErrorMessage name={label} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
    </>
  )
}

export function SubmitButton(props: any) {
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
  )
}