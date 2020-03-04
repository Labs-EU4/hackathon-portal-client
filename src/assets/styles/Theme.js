import * as color from './variables/colors';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const theme = {
    color: {
        primary: {
            light: '#81DBFD',
            regular: color.primary,
            // dark: color.primaryDark
        },
        secondary: {
            // light: color.secondaryLight,
            regular: color.secondary,
            // dark: color.secondaryDark
        },
        white: {
            regular: color.white,
            bg: color.bgWhite
        },
        black: {
            light: '#212121',
            regular: color.black,
        },
        red: {
            regular: color.red,
            bright: color.brightRed
        },
        blue: {
            light: color.lightBlue,
            regular: color.blue,
            bg: '#2196f3'
        },
        grey: {
            light: '#696969',
            regular: color.grey,
            dark: '#444',
            bg: color.bgGrey,
            border: 'rgba(14,19,24,.15)'
        },
        green: {
            light: color.lightGreen,
            regular: color.green,
            dark: color.darkGreen
        },
        success: color.success,
        warning: color.warning,
        danger: color.danger,
        info: color.info,
        link: {
            hover: 'rgba(14,19,24, .07)',
        }
    },
    fontSize: {
        smaller: "font-size: 1.2rem",
        small: "font-size: 1.4rem;",
        base: "font-size: 1.6rem;",
        medium: "font-size: 1.8rem",
        large: "font-size: 2rem",
        h1: "font-size: 7.5rem;",
        h2: "font-size: 5.5rem;",
        h3: "font-size: 3.5rem;",
        h4: "font-size: 2.5rem;",
        button: "font-size: 1.8rem;"
    },
    shadow: {
        text: `text-shadow: .5px .5px 1px ${color.black}`,
        text_links: `1px .75px 1.5px ${color.black}`,
        box: `box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .2)`,
        card: `box-shadow: 1px .5px 3px rgba(0, 0, 0, .15)`,
        intenseBox: `box-shadow: 0 2.5px 10px ${color.black};`,
        filter: `filter: drop-shadow(.15px .15px 1.5px ${color.black});
        filter: drop-shadow(-.15px -.15px 1px ${color.black});`,
        btn: `2px 2px 3px ${color.black}`
    },
    flex: {
        center: 'display: flex; justify-content: center; align-items: center;',
        columnCenter: 'display: flex; flex-direction: column; justify-content: center; align-items: center;',
        column: 'display: flex; flex-direction: column;',

        custom: (justify='start', align='start', direction='row', wrap='no-wrap') => {
            return `
                display: flex; 
                flex-direction: ${direction}
                justify-content: ${justify}; 
                align-items: ${align};
                flex-wrap: ${wrap};
            `
        },
    },
    device: {
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopL: `(min-width: ${size.desktop})`
    }
};