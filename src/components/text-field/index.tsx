import { TextFieldProps, TextField, styled } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  console.log('theme', theme)

  return {
    '& .MuiInputLabel-root': {
      transform: 'none',
      lineHeight: '1.5',
      position: 'relative',
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize
    },
    '& .MuiInputBase-root': {
      borderRadius: 8,
      backgroudColor: 'tranparent !important',
      border: `1px solid rbga(${theme.palette.customColors.main}, 0.2)`,
      transition: theme.transitions.create(['border-color', 'box-shadow'], {
        duration: theme.transitions.duration.shorter
      }),
      '&:before, &:after': {
        display: 'none'
      },
      '.MuiInputBase-input': {
        padding: '8px 10px'
      }
    }
  }
})

const CustomTextField = (props: TextFieldProps) => {
  const { size = 'small', InputLabelProps, variant = 'filled', ...rest } = props

  return (
    <TextFieldStyled
      size={size}
      variant={variant}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps
      }}
      {...rest}
    />
  )
}

export default CustomTextField
