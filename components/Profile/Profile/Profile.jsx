import React from "react";
import style from "./Profile.module.scss";
import {IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const initialValues = {
  full_name: "",
  name: "",
  email: "",
  showPassword: false,
};

const Profile = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleClickShowPassword = () => {
    formik.setFieldValue("showPassword", !formik.values.showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.profile_block}>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.input_blocks}>
          <div className={style.input_block}>
            <TextField
              id="standard-number"
              label="ФИО*"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </div>
          <div className={style.input_block}>
            <TextField
              id="standard-number"
              label="Отображаемое имя"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </div>
          <div className={style.input_block}>
            <TextField
              id="standard-number"
              label="E-mail"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </div>
        </div>
        <h2 className={style.password_title}>Смена пароля</h2>
        <div className={style.input_blocks}>
          <div className={style.input_block}>
            <InputLabel htmlFor="standard-adornment-password">Действующий пароль</InputLabel>
            <Input
              sx={{ width: "100%" }}
              id="standard-adornment-password"
              type={formik.values.showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formik.values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className={style.input_block}>
            <InputLabel htmlFor="standard-adornment-password">Новый пароль</InputLabel>
            <Input
              sx={{ width: "100%" }}
              id="standard-adornment-password"
              type={formik.values.showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formik.values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className={style.input_block}>
            <InputLabel htmlFor="standard-adornment-password">Подтвердите новый пароль</InputLabel>
            <Input
              sx={{ width: "100%" }}
              id="standard-adornment-password"
              type={formik.values.showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formik.values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </div>
        <button type={"submit"} className={style.submit_btn}>
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};

export default Profile;
