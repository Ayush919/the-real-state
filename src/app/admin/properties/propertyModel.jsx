"use client";
import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField,} from "@mui/material";

export default function AddPropertyModal({
                                             open,
                                             onClose,
                                             onSubmit,
                                             formValues,
                                             onChange,
                                         }) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Property</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    {/* Row 1: Title + Location */}
                    <Grid size={6} item>
                        <TextField
                            label="Title"
                            name="title"
                            value={formValues?.title}
                            onChange={(e) => {
                                onChange(e)
                            }}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid size={6} item>
                        <TextField
                            label="Location"
                            name="location"
                            value={formValues?.location}
                            onChange={(e) => onChange(e)}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    {/* Row 2: Rooms + Bathrooms */}
                    <Grid item size={6}>
                        <TextField
                            label="Number of Rooms"
                            name="rooms"
                            value={formValues?.rooms}
                            onChange={(e) => onChange(e)}
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={6}>
                        <TextField
                            label="Number of Bathrooms"
                            name="bathrooms"
                            value={formValues?.bathrooms}
                            onChange={(e) => onChange(e)}
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    {/* Row 3: Size + Property Type */}
                    <Grid item size={6}>
                        <TextField
                            label="Size (sq ft)"
                            name="size"
                            value={formValues?.size}
                            onChange={(e) => onChange(e)}
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={6}>
                        <TextField
                            label="Property Type"
                            name="type"
                            value={formValues?.type}
                            onChange={(e) => onChange(e)}
                            select
                            fullWidth
                            variant="outlined"
                        >
                            <MenuItem value="sale">Sale</MenuItem>
                            <MenuItem value="rent">Rent</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Row 4: Price + Images */}
                    <Grid item size={6}>
                        <TextField
                            label="Price"
                            name="price"
                            value={formValues?.price}
                            onChange={(e) => onChange(e)}
                            type="number"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={6}>
                        <TextField
                            label="Images (comma-separated URLs)"
                            name="images"
                            value={formValues?.images}
                            onChange={(e) => onChange(e)}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    {/* Row 5: Full-width Description */}
                    <Grid item size={6}>
                        <TextField
                            label="Description"
                            name="description"
                            value={formValues?.description}
                            onChange={(e) => onChange(e)}
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions sx={{p: 2}}>
                <Button onClick={onClose} variant="outlined">
                    Cancel
                </Button>
                <Button onClick={() => onSubmit(formValues)} variant="contained" color="primary">
                    {formValues?._id ? "Update" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
