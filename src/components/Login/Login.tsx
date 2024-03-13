import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess, logout } from "../../slices/authSlice";
import { RootState } from "../../reducers/reducers";
import { userLogin } from "../../apis/authAPI";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state: RootState) => state.authUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const isUserLoggedIn = await userLogin(email, password);
      if (isUserLoggedIn) {
        dispatch(loginSuccess());
        // Redirect to "/users" if authenticated
        navigate("/users");
      } else {
        dispatch(loginFailure("Invalid email or password"));
      }
    } catch (err) {
      console.error("An error occurred during login:", err);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container maxWidth="xs">
      {isAuthenticated ? (
        <div>
          <Typography variant="h4" align="center">
            Welcome, User!
          </Typography>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Login
            </Button>
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
          </form>
        </div>
      )}
    </Container>
  );
};

export default Login;
