// components/ConfirmDialog.tsx
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function ConfirmDialog({
                                          open,
                                          onClose,
                                          onConfirm,
                                          message,
                                      }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="error" onClick={onConfirm}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}
