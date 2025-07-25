import Button from '@mui/material/Button'
import {blue, grey,green} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:blue,
        secondary: green,
    }
})

export default function Send_Button(){
    return (
        <ThemeProvider theme={theme}>
            <Button color='secondary'>Enviar</Button>
        </ThemeProvider>
    )
}