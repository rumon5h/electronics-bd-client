import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


const theme = createTheme();

function LogIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userInfo = {
            email: data.get('email'),
            password: data.get('password'),
        };
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Log In Now
                    </Typography>
                    <Box sx={{marginTop: 2}}>
                        <IconButton aria-label="google" size="large">
                            <GoogleIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="facebook" size="large">
                            <FacebookIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="github" size="large">
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                        
                        
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Grid container>
                            <Grid item xs>
                                <Link to='#' variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/signup' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LogIn;