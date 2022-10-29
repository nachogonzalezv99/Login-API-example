import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getSingleUser, deleteUser, updateUser } from "../features/users/userSlice";

function useForm({ userId, defaultValues }) {
  const [input, setInput] = useState(defaultValues);
  const [currentValues, setCurrentValues] = useState({});
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  //Al cargar, trar el usuario con el id correspondiente

  useEffect(() => {
    userId && dispatch(getSingleUser(userId));
  }, [userId]);

  useEffect(() => {
    if (userId) {
      setInput({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
      });
      setCurrentValues({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  //Asignar Disabled, comprobando que ningun campo este vacio y algun valor haya cambiado
  useEffect(() => {
    const isEqual = (a, b) => {
      return Object.values(a).every(
        (value, index) => value === Object.values(b)[index]
      );
    };
    if (
      Object.values(input).includes("") ||
      (userId && isEqual(input, currentValues))
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [input]);

  const onChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onDelete = (e) => {
    dispatch(deleteUser(userId))
    navigate("/all-users");
  };
  const onUpdate = (e) => {
    dispatch(updateUser({userId, input}))
  };

  return { input, disabled, onChange, onDelete, onUpdate };
}

export default useForm;
