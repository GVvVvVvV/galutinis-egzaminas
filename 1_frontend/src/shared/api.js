import axios from 'axios';

const HOST = 'http://localhost:5000';

class API {
    // appoint an appointment

    async signup(userData) {
        const { data } = await axios.post(HOST + '/api/users', userData);
        console.log("post data",data)
        console.log("post userdata",userData)
        return data;
      }
// get all appointments


async getUsers() {
    const { data } = await axios.get(HOST + '/api/users');
    console.log("get api", data)
    return data;
  }
// delete appointment by id

async delete(id) {
    const { data } = await axios.delete(HOST + `/api/users/${id}`);

    return data;
  }
//   update
async update(id ,userData) {
    const { data } = await axios.post(HOST + `/api/users/${id}`, userData);

    return data;
  }

}

const api = new API();

export default api;
