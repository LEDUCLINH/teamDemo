import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from '@material-ui/core'
import React, { useState } from 'react'

interface TEXTFIELD {
  label: string
  placeholder: string
  type: 'TEXTFIELD'
}

interface SELECT {
  label: string
  placeholder: string
  type: 'SELECT'
  options: string[]
}
interface CHECKBOX {
  label: string
  type: 'CHECKBOX'
  options: string[]
}
interface SWITCH {
  label: string
  type: 'BOOLEAN'
  children?: SELECT
}

export type InputElementsType = TEXTFIELD | SELECT | CHECKBOX | SWITCH

const InputElements = ({
  prop,
  handleChange,
  parent,
  attributes,
}: {
  prop: InputElementsType
  attributes: any
  handleChange: (
    value: any,
    name: string,
    parent: string,
    children?: string
  ) => void
  parent: string
}): JSX.Element => {
  const [checkboxOpen, setCheckboxOpen] = useState(false)

  const getDefaultValue = (type: string, param?: any) => {
    attributes
    if (type === 'TEXTFIELD') {
      const child =
        attributes && attributes[parent]
          ? attributes[parent][prop.label]
          : undefined
      return child
    } else if (type === 'CHECKBOX') {
      const child =
        attributes && attributes[parent] ? attributes[parent][param] : false
      return child ?? false
    } else if (type === 'BOOLEAN') {
      const child =
        attributes && attributes[parent]
          ? attributes[parent][prop.label]
          : false
      if (checkboxOpen !== child) setCheckboxOpen(child)
      return child
    }
  }

  return (
    <>
      <Grid
        container
        justifyContent="flex-start"
        sm={12}
        lg={12}
        style={{ margin: 'auto', marginLeft: '16%', marginBottom: '30px' }}
      >
        <InputLabel
          style={{
            minWidth: '50%',
            textAlign: 'center',
            alignSelf: 'center',
            width: 'min-content',
            fontWeight: 500,
          }}
          variant="standard"
        >
          {prop.label}
        </InputLabel>
        {prop.type === 'TEXTFIELD' && (
          <FormGroup>
            <TextField
              id="outlined-basic"
              variant="standard"
              label="Write here"
              defaultValue={getDefaultValue(prop.type)}
              placeholder={prop.placeholder}
              onChange={(e) => {
                handleChange(e.target.value, prop.label, parent)
              }}
              style={{ margin: '8px', width: '200px' }}
            />
          </FormGroup>
        )}
        {prop.type === 'CHECKBOX' && (
          <FormGroup>
            {prop.options.map((option: string) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked={getDefaultValue(prop.type, option)}
                    onChange={(e: any) => {
                      handleChange(e.target.checked, option, parent)
                    }}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        )}
        {prop.type === 'SELECT' && (
          <Select
            onChange={(e) => {
              handleChange(e.target.value, prop.label, parent)
            }}
            value={
              attributes && attributes[parent] && attributes[parent][prop.label]
            }
            variant="standard"
            style={{ width: '200px' }}
          >
            {prop.options.map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
        {prop.type === 'BOOLEAN' && (
          <>
            <Switch
              color="primary"
              defaultChecked={getDefaultValue(prop.type)}
              onChange={(e) => {
                handleChange(
                  e.target.checked,
                  prop.label,
                  parent,
                  prop.children?.label
                )
                setCheckboxOpen(e.target.checked)
              }}
            />
            {checkboxOpen && prop.children && (
              <Select
                value={
                  attributes &&
                  attributes[parent] &&
                  attributes[parent][prop.label]
                }
                onChange={(e) => {
                  handleChange(e.target.value, prop.children!.label, parent)
                }}
                defaultValue={getDefaultValue(prop.type, prop.children.options)}
                variant="standard"
                style={{ width: '200px' }}
              >
                {prop.children.options.map((option: string) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          </>
        )}
      </Grid>
    </>
  )
}
export default InputElements
