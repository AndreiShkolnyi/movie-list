import React from 'react';
import {  Container, Box, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import styles from './Header.module.scss';
import { ColorModeContext } from '../../App';
import { Link } from 'react-router-dom';


export const Header = () => {
  const {darkMode, setDarkMode} = React.useContext(ColorModeContext);

  console.log(darkMode);

  return (
    <Box
      sx={{
        bgcolor: 'color.default',
      }}
      classes={{ root: styles.root }}>
      <Container classes={{ root: styles.container }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h5"
          sx={{
            color: 'text.primary',
          }}>
          <Link to='/'>React Movie</Link>
        </Typography>
        <div className={styles.rightSide}>
          <div className={styles.links}>
            <Link to='/'>
              <Typography
          gutterBottom
          variant="p"
          component="p"
          sx={{
            color: 'text.primary',
          }}>
            Home
          </Typography>
              </Link>
            <Link to='/about'>
              <Typography
          gutterBottom
          variant="p"
          component="p"
          sx={{
            color: 'text.primary',
          }}>
            About
          </Typography>
              </Link>
            <IconButton
              sx={{ ml: 1, color: 'text.primary' }}
              onClick={() => setDarkMode(!darkMode)}
              color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </div>
      </Container>
    </Box>
  );
};
