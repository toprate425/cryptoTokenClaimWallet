import * as React from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Avatar,
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: 400
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, handleClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Choose Wallet
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="metamask" src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" />
                <Typography gutterBottom>Metamask</Typography>
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="metamask" src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" />
                <Typography gutterBottom>Trust Wallet</Typography>
            </IconButton>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
