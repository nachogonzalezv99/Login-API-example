import { AiOutlineCloseCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import RowInput from "../Components/RowInput";
import Wrapper from "../Wrappers/FormWrapper";
import useForm from "../Hooks/useForm";
import { useSelector } from "react-redux/es/exports";
import {useNavigate} from 'react-router-dom'

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
};
const SingleUser = () => {
  const { id: userId } = useParams();
  const { input, disabled, onChange, onDelete, onUpdate } = useForm({
    userId,
    defaultValues,
  });

  const navigate = useNavigate()
  const { status } = useSelector((store) => store.user);

  if (status === 'failed'){
    navigate('/error')
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>SingleUser</h2>
        <div className="info-container flex">
          <div className="left">
            <Link to="/all-users">
              <AiOutlineCloseCircle className="close-icon" />
            </Link>
          </div>
          {status === 'succeded' ? (
          <div className="right">
            <form className="form">
              <RowInput
                type="text"
                id="first_name"
                label="First name"
                name="first_name"
                value={input.first_name}
                onChange={onChange}
              />
              <RowInput
                type="text"
                id="last_name"
                label="Last name"
                name="last_name"
                value={input.last_name}
                onChange={onChange}
              />
              <RowInput
                type="email"
                id="email"
                label="Email"
                name="email"
                value={input.email}
                onChange={onChange}
              />
            </form>
            <div className="btn-container">
              <button
                className="btn btn-primary"
                onClick={onUpdate}
                disabled={disabled}
              >
                <AiFillEdit />
                Update
              </button>
              <button className="btn btn-secondary" onClick={onDelete}>
                <AiFillDelete />
                Delete
              </button>
            </div>
          </div>) : <div>Loading</div>}
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleUser;
