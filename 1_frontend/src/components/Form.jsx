import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

const Form = () => {
  const dispatch = useDispatch();

  const { loading, user: client, error } = useSelector((state) => state.signup);

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    time: "",
    date: "",
  });

  // console.log(Form);
  const handeSumbitUser = (e) => {
    e.preventDefault();
    dispatch(signupUser(user));
  };
  console.log("from form", client);

  return (
    <>
      <form onSubmit={handeSumbitUser}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              value={user.surname}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, surname: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={user.date}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="time">Time</label>
            <select
              name="time"
              value={user.time}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, time: e.target.value }))
              }
            >
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
            </select>
          </div>
          <div>
            <input type="submit" id="appoint" />
          </div>
        </div>
      </form>

      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {client && <p>{client}</p>}
    </>
  );
};

export default Form;
