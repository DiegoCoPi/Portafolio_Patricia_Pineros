import Button from '@mui/material/Button'
import {green} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:{
            main:"#0d47a1"
        },
        secondary: green,
    }
})

export default function Send_Button(){
    return (
        <ThemeProvider theme={theme}>
            <Button type="submit" variant="contained" color='primary'>Enviar</Button>
        </ThemeProvider>
    )
}