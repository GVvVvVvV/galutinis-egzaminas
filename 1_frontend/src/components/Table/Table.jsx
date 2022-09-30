import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  deleteUser,
  updateUser,
} from "../../redux/actions/userActions";
import Button from "../Button/Button";

import { StyledMain, StyledTable, Tbody } from "./Table.style";

const Table = () => {
  // state
  const [data, setData] = useState(null);
  const [Loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { loading, user: client, error } = useSelector((state) => state.get);
  const { user: updateMessage } = useSelector((state) => state.update);
  const { user: deleteMessage } = useSelector((state) => state.delete);
  // useEffect
  useEffect(() => {
    if (Loader) {
      dispatch(getUser(page));
      setLoader(false);
    }
    if (client) {
      setData(client.user);
      console.log("useEffect", client.user);
    }
  }, [client]);

  // function

  const deleteUser = async (e) => {
    const { userId } = e.target.Dataset;

    await dispatch(deleteUser(userId));

    await dispatch(getUser(page));
  };
  return (
    <StyledMain>
      <StyledTable>
        <thead className="thead">
          <tr className="thnamecontainer">
            <th className="name"> Name </th>
            <th>Surname</th>
            <th>Email</th>
            <th>Date</th>
            <th>time</th>
            <th className="update btn">Update</th>
            <th className="delete btn">Delete</th>
          </tr>
        </thead>
        <Tbody>
          {data &&
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <Button
                    className="btn"
                    text="Update"
                    action={updateUser}
                    userId={item._id}
                  />
                </td>
                <td>
                  <Button
                    className="btn"
                    text="Delete"
                    action={deleteUser}
                    userId={item._id}
                  />
                </td>
              </tr>
            ))}
        </Tbody>
      </StyledTable>
    </StyledMain>
  );
};

export default Table;
