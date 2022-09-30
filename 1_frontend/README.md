# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
getUser,
updateUser,
deleteUser,
} from "../../redux/actions/userActions";

import Button from "../Button/Button";

import { TableContainer, StyledTable } from "./Table.style";

const Table = () => {
// state
const [post, setPost] = useState([]);
const [total, setTotal] = useState(10);
const [page, setPage] = useState(1);
const [state, setState] = useState(null);
const [loader, setLoader] = useState(false);

const dispatch = useDispatch();
const { loading, user: client, error } = useSelector((state) => state.get);
// side effects
useEffect(() => {
setLoader(true);
if (!loader) {
dispatch(getUser(page));
setLoader(true);
}
if (client) {
setState(client.paginatedUsers);
setTotal(client.total);
}
}, [client, total, page, loader, dispatch]);
// custom functions
const UpdateUser = (e) => {
const { userId } = e.target.dataset;

    const trToUpdate = e.target.parentNode.parentNode;

    const user = {
      name: trToUpdate.children[0].innerText,
      surname: trToUpdate.children[1].innerText,
      email: trToUpdate.children[2].innerText,
      date: trToUpdate.children[3].innerText,
      time: trToUpdate.children[4].innerText,
    };
    dispatch(updateUser(userId, user));

};

const DeleteUser = async (e) => {
const { userId } = e.target.dataset;

    await dispatch(deleteUser(userId));

    await dispatch(getUser(page));

};

const Pages = (item) => {
setPage(item);
dispatch(getUser(item));
};

return (
<TableContainer>
<StyledTable>
<thead>
<tr>
<th className="name">Name</th>
<th className="surname">Surname</th>
<th>Email</th>
<th>Date</th>
<th>Time</th>
<th className="btn">Update</th>
<th className=" delete-button">Delete</th>
</tr>
</thead>
<tbody>
{loading && (
<tr>
<td>Loading...</td>
</tr>
)}
{error && (
<tr>
<td>{error}</td>
</tr>
)}
{state &&
state.map((item) => (
<tr key={item._id} data-id={item._id}>
<td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
{item.name}
</td>
<td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
{item.surname}
</td>
<td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
{item.email}
</td>
<td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
{item.date}
</td>
<td
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                >
{item.time}
</td>
<td className="btn">
<Button text="Update" action={UpdateUser} userId={item._id} />
</td>
<td className="btn">
<Button text="Delete" action={DeleteUser} userId={item._id} />
</td>
</tr>
))}
</tbody>
</StyledTable>

      <>
        {!total ? (
          <p>loading...</p>
        ) : (
          <div>
            {Array.from(Array(Math.ceil(total / 10)).keys()).map((item) => (
              <Button
                key={item}
                text={item + 1}
                action={() => Pages(item + 1)}
              />
            ))}
          </div>
        )}
      </>
    </TableContainer>

);
};
export default Table;

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, updateUser, deleteUser } from "../redux/actions/userActions";
// import "../style/table.css";
// import Button from "./Button/Button";
// const Table = () => {
// // state
// const [total, setTotal] = useState(null);
// const [data, setData] = useState(null);
// const [Loader, setLoader] = useState(true);
// const [page, setPage] = useState(1);

// const dispatch = useDispatch();
// const { loading, user: client, error } = useSelector((state) => state.get);
// // console.log("from app,js", data);
// //
// // useEffect
// useEffect(() => {
// if (!Loader) {
// dispatch(getUser(page));
// setLoader(true);
// }
// if (client) {
// setData(client.user);
// setTotal(client.total);
// }
// }, [client, total, page, dispatch]);

// // funtion
// const UpdateUser = (e) => {
// const { userId } = e.target.dataset;

// const trToUpdate = e.target.parentNode.parentNode;

// const user = {
// name: trToUpdate.children[0].innerText,
// surname: trToUpdate.children[1].innerText,

// email: trToUpdate.children[2].innerText,
// date: trToUpdate.children[3].innerText,
// time: trToUpdate.children[4].innerText,
// };
// dispatch(updateUser(userId, user));
// };
// const DeleteUser = async (e) => {
// const { userId } = e.target.dataset;

// await dispatch(deleteUser(userId));

// await dispatch(getUser(page));
// console.log("asd");
// };
// return (
// <main>
// <h1>Appoint users Page</h1>

// <table className="container">
// <thead className="thead">
// <tr>
// <th className="name">Name</th>
// <th className="surname">Surname</th>
// <th>Email</th>
// <th>Date</th>
// <th>Time</th>
// <th className="th-btn">Update</th>
// <th className="th-btn th-delete">Delete</th>
// </tr>
// </thead>
// <tbody>
// {loading && (
// <tr>
// <td>Loading...</td>
// </tr>
// )}
// {error && (
// <tr>
// <td>{error}</td>
// </tr>
// )}
// {data &&
// data.map((item) => (
// <tr key={item._id} data-id={item._id}>
//
// <td
// contentEditable={true}
// suppressContentEditableWarning={true}
// >
// {item.email}
// </td>
// <td
// contentEditable={true}
// suppressContentEditableWarning={true}
// >
// {item.date}
// </td>
// <td
// contentEditable={true}
// suppressContentEditableWarning={true}
// >
// {item.time}
// </td>
// <td className="td-btn">
// <Button text="Update" action={UpdateUser} userId={item._id} />
// </td>
// <td className="td-btn">
// <Button text="Delete" action={DeleteUser} userId={item._id} />
// </td>
// </tr>
// ))}
// </tbody>

// {/_ <div className="smallContaner">
// {data &&
// data.map((user) => (
// <tbody className="tbody" style={{ display: "flex" }}>
// <tr>{user.name}</tr>
// </tbody>
// ))}
// </div>
// <div className="smallContaner">
// {data &&
// data.map((user) => (
// <tbody className="tbody" style={{ display: "flex" }}>
// <tr>{user.surname}</tr>
// </tbody>
// ))}
// </div>
// <div className="smallContaner">
// {data &&
// data.map((user) => (
// <tbody className="tbody" style={{ display: "flex" }}>
// <tr>{user.email}</tr>
// </tbody>
// ))}
// </div>
// <div className="smallContaner">
// {data &&
// data.map((user) => (
// <tbody className="tbody" style={{ display: "flex" }}>
// <tr>{user.date}</tr>
// </tbody>
// ))}
// </div>
// <div className="smallContaner">
// {data &&
// data.map((user) => (
// <tbody className="tbody" style={{ display: "flex" }}>
// <tr>{user.time}</tr>
// </tbody>
// ))}
// </div>{" "} _/}
// </table>
// </main>
// );
// };

// export default Table;
