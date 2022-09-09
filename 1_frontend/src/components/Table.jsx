import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/userActions";
import "../style/table.css";

const Table = () => {
  const [data, setData] = useState(null);
  const [Loader, setLoader] = useState(true);

  const { loading, user: client, error } = useSelector((state) => state.get);

  const dispatch = useDispatch();
  //   console.log("from app,js", data);

  useEffect(() => {
    if (Loader) {
      dispatch(getUser());
      setLoader(false);
    }
    if (client) {
      setData(client.user);
      console.log("useEffect", client.user);
    }
  }, [client]);
  return (
    <main>
      <h1>Appoint users Page</h1>

      <div className="App">
        <table className="container">
          <thead className="thead">
            <div className="smallContaner">
              <th>name</th>

              {data &&
                data.map((user) => (
                  <tbody className="tbody" style={{ display: "flex" }}>
                    <tr>{user.name}</tr>
                  </tbody>
                ))}
            </div>
            <div className="smallContaner">
              <th>Surname</th>
              {data &&
                data.map((user) => (
                  <tbody className="tbody" style={{ display: "flex" }}>
                    <tr>{user.surname}</tr>
                  </tbody>
                ))}
            </div>
            <div className="smallContaner">
              <th>Email</th>
              {data &&
                data.map((user) => (
                  <tbody className="tbody" style={{ display: "flex" }}>
                    <tr>{user.email}</tr>
                  </tbody>
                ))}
            </div>
            <div className="smallContaner">
              <th>Date</th>
              {data &&
                data.map((user) => (
                  <tbody className="tbody" style={{ display: "flex" }}>
                    <tr>{user.date}</tr>
                  </tbody>
                ))}
            </div>
            <div className="smallContaner">
              <th>Time</th>
              {data &&
                data.map((user) => (
                  <tbody className="tbody" style={{ display: "flex" }}>
                    <tr>{user.time}</tr>
                  </tbody>
                ))}
            </div>{" "}
          </thead>
        </table>
      </div>
    </main>
  );
};

export default Table;
