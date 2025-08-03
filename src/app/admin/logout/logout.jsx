// components/Header.tsx
"use client";
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Logout() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/"); // redirect to login page
    };

    return (
        <AppBar position="static">
            <Toolbar className="flex justify-between">
                <Typography variant="h6">Admin Dashboard</Typography>
                <Button color="error" variant={'contained'} onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}
