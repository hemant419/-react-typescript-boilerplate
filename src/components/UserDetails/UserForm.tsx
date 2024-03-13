import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Box } from "@mui/material";
import { addUser, updateUser } from "../../slices/userSlice";
import { RootState } from "../../reducers/reducers";

const UserForm: React.FC = () => {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isEdit, users } = useSelector((state: RootState) => state.userDetails);

  useEffect(() => {
    if (isEdit && userId) {
      const singleUser = users.find((user: { id: number; }) => user.id === Number(userId));
      if (singleUser) {
        setName(singleUser.name);
        setEmail(singleUser.email);
      }
    } else {
      // Clear fields when adding a new user
      setName("");
      setEmail("");
    }
  }, [userId, isEdit]);

  const handleSubmit = () => {
    if (isEdit && userId) {
      // Update user
      const updatedUser = {
        id: Number(userId),
        name,
        email,
      };
      dispatch(updateUser(updatedUser)); // Assuming you have an 'updateUser' action
    } else {
      // Add new user
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      dispatch(addUser(newUser));
    }
    navigate("/users");
  };

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        {isEdit ? "Update User" : "Add User"}
      </Button>
    </Box>
  );
};

export default UserForm;
