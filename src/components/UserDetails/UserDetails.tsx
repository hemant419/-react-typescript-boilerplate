import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { deleteUser, setIsEdit, setUsers, updateUser } from "../../slices/userSlice";
import { RootState } from "../../reducers/reducers";
import { fetchUsers } from "../../apis/userApi";

const UserList: React.FC = () => {
  const userData = useSelector((state: RootState) => state.userDetails.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUsers();
      dispatch(setUsers(userData));
    };

    fetchData();
  }, []);

  const handleAddUser = () => {
    navigate("/user/add");
  };

  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  const handleEdit = (userId: number) => {
    dispatch(setIsEdit(true));
    navigate(`/user/edit/${userId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Button onClick={handleAddUser} variant='outlined' color='success'>
        Add User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map(({ id, name, email }: any) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(id)} variant='outlined' color='error'>
                  Edit
                </Button>
                <Button onClick={() => handleDelete(id)} variant='outlined' color='error'>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
