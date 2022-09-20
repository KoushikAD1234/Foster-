import { color, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7edb', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration:"underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: 'black',
                textDeocrationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyles: props => ({
            color: mode('black', 'black')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: 'M PLUS Rounded 1c',
    // color: 'black'
}

const colors = {
    glassTeal: '#88cca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme ({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme