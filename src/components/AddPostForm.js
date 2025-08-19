"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import base64 from "base64-encode-file";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
//import { createPost } from "@/api";
import { createPost } from "../../server/controllers/posts";
const AddPostForm = ({ open, handleClose }) => {
  const tags = ["fun", "programming", "healtg", "science"];

  const [img, setImg] = useState(null);

  // File input için base64 okuma
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const postSchema = yup.object().shape({
    title: yup.string().required("Başlık zorunludur"),
    subtitle: yup.string().required("Alt başlık zorunludur"),
    content: yup
      .string()
      .min(20)
      .required("İçerik en az 20 karakter olmalıdır"),
    tag: yup.mixed().oneOf(tags),
  });

  const clearForm = () => {
    reset();
    setImg(null);
    handleClose();
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    //console.log(data);
    if (img) data.img = img;

    try {
      const res = await axios.post("http://localhost:5000/posts/", data);
      dispatch(createPost(res.data));
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Yeni Yazı Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Yazı bir yazı eklemek için aşağıdaki formu doldurun.
          </DialogContentText>

          <div>
            <form
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="title"
                label="Başlık"
                name="title"
                variant="outlined"
                fullWidth
                size="small"
                //inputRef={register}
                {...register("title")}
                error={!!errors.title}
              />
              <TextField
                id="subtitle"
                label="Alt Başlık"
                name="subtitle"
                variant="outlined"
                fullWidth
                size="small"
                //inputRef={register}
                {...register("subtitle")}
                error={!!errors.subtitle}
              />

              <Controller
                name="tag"
                control={control}
                defaultValue={""}
                rules={{ required: "Tag seçimi zorunludur" }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.tag}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="">
                        <em>Seçiniz</em>
                      </MenuItem>
                      {tags.map((tag, index) => (
                        <MenuItem key={index} value={tag}>
                          {tag}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.tag && (
                      <FormHelperText>{errors.tag.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />

              <TextField
                id="content"
                label="İçerik"
                name="content"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                size="small"
                //inputRef={register}
                {...register("content")}
                error={!!errors.subtitle}
              />

              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
                style={{ marginTop: "16px" }}
              />

              <DialogActions>
                <Button onClick={clearForm} color="inherit">
                  Vaxgeç
                </Button>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  onClick={() => handleSubmit(onSubmit)}
                >
                  Yayınla
                </Button>
              </DialogActions>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {img && (
        <img className="w-36 h-36" src={img} alt="oopss!image not found" />
      )}
    </div>
  );
};

export default AddPostForm;
