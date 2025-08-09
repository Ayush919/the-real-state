// app/admin/properties/page.tsx
"use client";
import {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';
import {tableCellClasses} from '@mui/material/TableCell';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import ConfirmDialog from "@/app/admin/properties/confirmDialog";
import PropertyModal from "@/app/admin/properties/propertyModel";
import Logout from "@/app/admin/logout/logout";
import {useRouter} from "next/navigation";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function PropertiesPage() {
    const router = useRouter();
    const [properties, setProperties] = useState([]);
    const [editProperty, setEditProperty] = useState({type: "sale"});
    const [openModal, setOpenModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [page, setPage] = useState(0); // MUI starts pages at index 0
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [localFormValues, setLocalFormValues] = useState({features: []});
    const [imageFiles, setImageFiles] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/admin/login') // Redirect if no token
        } else {
            // Optional: You can validate token with server here
            setIsAuthenticated(true)
        }

        fetchProperties();
    }, []);

    const handleSubmit = async (data) => {
        console.log("handleSubmit : =: = :", editProperty, data)
        const method = data?._id ? "PUT" : "POST";
        const url = data?._id ? `/api/properties/${data._id}` : "/api/properties";
        const token = localStorage.getItem('token')
        console.log("data :: ", data)
        const res = await fetch(url, {
            method, headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        onClose(); // close modal & refresh list in parent
        fetchProperties().then();
    };

    const onClose = () => {
        setOpenModal(false);
        setEditProperty(null);
        setImageFiles([])
        setLocalFormValues({features: []})
    }

    const fetchProperties = async () => {
        const res = await fetch("/api/properties");
        const data = await res.json();
        localStorage.setItem("properties", data.data);
        setProperties(data.data);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token')

        await fetch(`/api/properties/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        await fetchProperties();
        setConfirmDelete(null);
    };
    if (!isAuthenticated) return null

    return (
        <Box sx={{overflowX: 'auto'}} p={4}>
            <Logout/>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} mt={5}>
                <Typography variant="h4">Properties List</Typography>
                <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
                    Add Property
                </Button>
            </Box>

            <Table sx={{minWidth: 1200, border: '1px solid #ccc'}}>
                <TableHead>
                    <StyledTableRow>
                        {["Title", "Location", "Rooms", "Bathrooms", "Size (sq ft)", "Images", "Price",  "Retail Price","Type", "Actions"].map((head) => (
                            <StyledTableCell key={head} sx={{border: '1px solid #ccc', fontWeight: 'bold'}}>
                                {head}
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {properties?.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} align="center" sx={{border: '1px solid #ccc'}}>
                                No properties found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        properties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p) => (
                            <StyledTableRow key={p._id}>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.title}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.location}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.rooms}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.bathrooms}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.size}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>
                                    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1}>
                                        {(p.images || []).slice(0, 6).map((url, i) => (
                                            <Box
                                                key={i}
                                                component="img"
                                                src={url}
                                                alt={`img-${i}`}
                                                sx={{
                                                    width: '100%',
                                                    height: 60,
                                                    objectFit: 'cover',
                                                    borderRadius: 1,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.price}</StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>
                                    {p.retailPrice ?? "-"}
                                </StyledTableCell>
                                <StyledTableCell sx={{border: '1px solid #ccc'}}>{p.type}</StyledTableCell>
                                <TableCell sx={{border: '1px solid #ccc'}}>
                                    {/*<Button variant="contained" size="small" onClick={() => handleEdit(p)}>*/}
                                    {/*    Edit*/}
                                    {/*</Button>*/}
                                    <Button variant="contained" size="small" color="error"
                                            sx={{ml: 2}} // ml = margin-left
                                            onClick={(e) => {
                                                setConfirmDelete(p._id)
                                            }}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </StyledTableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={properties.length}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0); // reset to first page
                }}
                rowsPerPageOptions={[5, 10, 20, 50]}
            />

            <PropertyModal
                open={openModal}
                onClose={onClose}
                onSubmit={handleSubmit}
                property={editProperty}
                localFormValues={localFormValues}
                setLocalFormValues={setLocalFormValues}
                imageFiles={imageFiles}
                setImageFiles={setImageFiles}
            />

            <ConfirmDialog
                open={!!confirmDelete}
                onClose={() => setConfirmDelete(null)}
                onConfirm={() => confirmDelete && handleDelete(confirmDelete)}
                message="Are you sure you want to delete this property?"
            />
        </Box>
    );
}
