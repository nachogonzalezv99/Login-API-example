import { Link } from "react-router-dom";
import Wrapper from "../Wrappers/AllUsersWrapper";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllUsers } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, total_pages, status } = useSelector((store) => store.user);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllUsers(currentPage));
  }, [currentPage]);

  let content;
  if (status === "failed") {
    navigate("/error");
  } else if (status === "loading") {
    content = <div>Loading</div>;
  } else {
    content = (
      <>
        {users.map((user) => (
          <Link to={`/all-users/${user.id}`} key={user.id}>
            <div>
              {" "}
              {user.first_name} {user.last_name}
            </div>
            <div>{user.email}</div>
          </Link>
        ))}
      </>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <h2>All Users</h2>
        <div className="info-container">
          <div className="users-container">
            <div className="users-header">Full Name</div>
            <div className="users-header">Email</div>
            {content}
          </div>
          <div className="pagination-container">
            {Array(total_pages)
              .fill()
              .map((item, index) => (
                <div
                  key={index}
                  className={`btn ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AllUsers;
