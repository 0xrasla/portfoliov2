import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const fonts = {
    heading: `'Secular One', sans-serif`,
    body: `'Signika Negative', sans-serif`,
    fancy: `'Kelly Slab', serif`,
}

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode("#041C32", "#ECDBBA")(props),
            color: mode("#ECDBBA", "#041C32")(props),
        }
    })
}

const colors = {
    primary: "#041C32",
    secondary: "#04293A",
    text: "#ECDBBA",
    contrast: "#064663",
}

export const theme = extendTheme(config, { fonts, colors, styles });