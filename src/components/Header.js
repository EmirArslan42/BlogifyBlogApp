"use client";
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import PenIcon from "@mui/icons-material/Create"; // örnek icon
import { useState } from "react";
import AppPostForm from "./AddPostForm"; // AddPostForm bileşenini içe aktar
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  return ( 
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" />
            <Typography variant="h6" color="secondary" sx={{ flexGrow: 1 }}>
              <a href="/posts">Blogify</a>
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<PenIcon />}
              //href="/posts/new"
              onClick={handleOpen} // Butona tıklandığında formu aç
            >
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>
      </Container>

      <AppPostForm open={open} handleClose={handleClose} />
    </div>
  );
}
