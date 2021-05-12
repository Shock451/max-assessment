import {
    createMuiTheme,
    responsiveFontSizes
} from '@material-ui/core/styles';

let Theme = responsiveFontSizes(
    createMuiTheme(
        {
            spacing: unit => unit * 8,
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920,
                },
            }
        }
    )
);

export default Theme;