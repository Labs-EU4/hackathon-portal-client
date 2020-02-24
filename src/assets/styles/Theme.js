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
            // light: color.primaryLight,
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
        },
        black: {
            regular: color.black,
        },
        red: {
            regular: color.red,
            bright: color.brightRed
        },
        // grey: color.grey,
        grey: {
            regular: color.grey
        },
        green: {
            light: color.lightGreen,
            regular: color.green,
            dark: color.darkGreen
        },
    },
    shadow: {
        text: `text-shadow: .15px .15px 1px ${color.black}, .75px .5px 1.5px ${color.black}, .15px .15px 1px ${color.black};`,
        text_links: `1px .75px 1.5px ${color.black}`,
        box: `box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .2)`,
        card: `box-shadow: 1px .5px 3px rgba(0, 0, 0, .15)`,
        intenseBox: `box-shadow: 0 2.5px 10px ${color.black};`,
        filter: `filter: drop-shadow(.5px .25px 1.5px ${color.black});
        filter: drop-shadow(.15px .15px 1px ${color.black}, .5px .25px 1.5px ${color.black}, .65px .4px 1px ${color.black});`,
        icon: `filter: drop-shadow(.5px .25px 1.5px ${color.black});
        filter: drop-shadow(25px .25px 10px ${color.black}, .5px .25px 1.5px ${color.black}, .65px .4px 1px ${color.black});`,
        btn: `2px 2px 3px ${color.black}`
    },
    flex: {
        center: 'display: flex; justify-content: center; align-items: center;',
        columnCenter: 'display: flex; flex-direction: column; justify-content: center; align-items: center;',
        column: 'display: flex; flex-direction: column;',

        custom: (justify='start', align='start', direction='row') => {
            return `
                display: flex; 
                flex-direction: ${direction}
                justify-content: ${justify}; 
                align-items: ${align};
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