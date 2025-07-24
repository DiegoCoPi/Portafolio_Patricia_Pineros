import Button from '@mui/material/button'
import {blue, grey} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:blue,
        secondary: grey,
    }
})

export default function Butons(){
    return (
        <ThemeProvider theme={theme}>
            <Button color='primary'>Enviar</Button>
        </ThemeProvider>
    )
}