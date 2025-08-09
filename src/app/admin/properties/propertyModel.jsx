"use client";
import React, {useEffect, useState} from "react";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import {uploadImageToUploadcare} from "@/lib/imageUpload";
import {featureOptions} from "@/utils/constants";

export default function AddPropertyModal({
                                             open,
                                             onClose,
                                             onSubmit,
                                             formValues,
                                             localFormValues,
                                             setLocalFormValues,
    imageFiles,
    setImageFiles
                                         }) {
    const [isValid, setIsValid] = useState(false);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        setLocalFormValues({...formValues, type: formValues?.type || "sale"});
    }, [formValues]);

    useEffect(() => {
        validateForm();
    }, [localFormValues]);

    const handleChange = (e) => {
        const {name, value, files} = e.target;

        if (name === "images") {
            const selectedFiles = Array.from(files);
            setImageFiles(selectedFiles);
        } else if (name === "features") {
            // Ensure value is always an array
            setLocalFormValues((prev) => ({
                ...prev,
                [name]: Array.isArray(value) ? value : [],
            }));
        } else {
            setLocalFormValues((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const validateForm = () => {
        const requiredFields = [
            "title",
            "location",
            "rooms",
            "bathrooms",
            "size",
            "type",
            "price",
            "retailPrice",
            "description",
        ];
        const isFilled = requiredFields.every(
            (field) =>
                localFormValues[field] !== undefined &&
                localFormValues[field] !== null &&
                localFormValues[field] !== ""
        );

        const hasAssets = imageFiles.length > 0;
        setIsValid(isFilled && hasAssets);
    };

    const uploadToUploadcare = async () => {
        const uploadedUrls = [];
        for (const file of imageFiles) {
            const url = await uploadImageToUploadcare(file);
            uploadedUrls.push(url);
        }
        return uploadedUrls;
    };

    const handleSubmit = async () => {
        try {
            setUploading(true);
            const uploadedImageUrls = await uploadToUploadcare();

            const finalFormData = {
                ...localFormValues,
                images: uploadedImageUrls,
            };

            formValues = finalFormData; // Update formValues with the final data
            onSubmit(finalFormData);
            setUploading(false);
            setLocalFormValues({features: []})
        } catch (error) {
            setUploading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{formValues?._id ? "Update" : "Add"} Property</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Title"
                            name="title"
                            value={localFormValues.title || ""}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Location"
                            name="location"
                            value={localFormValues.location || ""}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Rooms"
                            name="rooms"
                            value={localFormValues.rooms || ""}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Bathrooms"
                            name="bathrooms"
                            value={localFormValues.bathrooms || ""}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Size (sq ft)"
                            name="size"
                            value={localFormValues.size || ""}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Property Type"
                            name="type"
                            value={localFormValues.type || ""}
                            onChange={handleChange}
                            select
                            fullWidth
                            required
                        >
                            <MenuItem value="sale">Sale</MenuItem>
                            <MenuItem value="rent">Rent</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Price"
                            name="price"
                            value={localFormValues.price || ""}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={6}>
                        <TextField
                            label="Retail Price"
                            name="retailPrice"
                            value={localFormValues.retailPrice || ""}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={6} item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="features-label">Features</InputLabel>
                            <Select
                                labelId="features-label"
                                multiple
                                name="features"
                                value={localFormValues.features || []}
                                onChange={(e) =>
                                    setLocalFormValues((prev) => ({
                                        ...prev,
                                        features: e.target.value,
                                    }))
                                }
                                input={<OutlinedInput label="Features"/>}
                                renderValue={(selected) => selected.join(", ")}
                                variant="outlined"
                            >
                                {featureOptions.map((feature) => (
                                    <MenuItem key={feature} value={feature}>
                                        <Checkbox checked={(localFormValues.features || [])?.includes(feature)}/>
                                        <ListItemText primary={feature}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid size={6} item xs={6} row={1}>
                        <Button variant="outlined" component="label" sx={{height: 55}} fullWidth>
                            Upload Images
                            <input
                                type="file"
                                name="images"
                                accept="image/*"
                                multiple
                                hidden
                                onChange={handleChange}
                            />
                        </Button>
                        <Grid container spacing={2} mt={1}>
                            {imageFiles.map((file, index) => (
                                <Grid item xs={4} key={index}>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`preview-${index}`}
                                        style={{
                                            width: "100%",
                                            height: 100,
                                            objectFit: "cover",
                                            borderRadius: 4,
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                    <Grid size={12} item xs={12}>
                        <TextField
                            label="Description"
                            name="description"
                            value={localFormValues.description || ""}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                            required
                        />
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions sx={{p: 2}}>
                <Button onClick={() => {
                    onClose()
                    setImageFiles([])
                    setLocalFormValues({})
                }}
                        variant="outlined">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || uploading}
                    variant="contained"
                    color="primary"
                >
                    {uploading ? "Uploading..." : formValues?._id ? "Update" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

