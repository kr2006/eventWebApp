import { createTheme } from '@material-ui/core';

export const theme = createTheme ({
    palette:{
        background:{
            default: '#fff'
        },
        primary:{
            main: '#000',
        },
        secondary:{
            main: '#fff',
        }
    },
    typography: {
        fontFamily: '"Aeroport", Open Sans',
        body1:{
            fontSize: 18,
            lineHeight: '32px'
        },
        body2:{
            fontSize: 18,
            fontWeight: 900
        },
        h2:{
            fontSize: 35,
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: 40,
        },
        h3:{
            fontSize: 80,
            lineHeight: '150px',
            fontWeight: 900
        },
        h4:{
            fontSize: 30,
            fontWeight: 400,
            textTransform: 'uppercase',
        },
    },
    shape:{
        borderRadius: 0,
    },
    spacing: 5, //spacing between elements
    overrides:{
        MuiLink:{
            root:{
                variant: 'body2',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'none',
                }
            }
        },
        MuiButton:{
        root:{
            fontSize: '20px',
            fontWeight: 400,
            '&:hover': {
                backgroundColor: 'transparent',
                }
            },
            outlined:{
                padding: '10px 20px'
            },
        },
        MuiInput:{
            inputActive:{
                width: '500px',
            } 
        },
        MuiMobileStepper:{
            root:{
                marginTop: 20,
                justifyContent: 'center',
            }
        },
    }
  });

  