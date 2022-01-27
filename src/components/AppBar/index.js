import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    Button
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const TopBar = ({handleClickOpen}) => {

  return (
    <AppBar position="static" sx={{ background: 'rgb(255, 255, 255)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            <img src="logo.jpg" alt="logo" style={{ width: 150, margin: 10 }}/>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                sx={{ my: 2, color: 'white', display: 'block', padding: '10px 15px', display: 'flex', alignItems: 'center' }}
              >
                <AccountBalanceWalletIcon />
                <span style={{ fontSize: 18 }}>Connect wallet</span>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
