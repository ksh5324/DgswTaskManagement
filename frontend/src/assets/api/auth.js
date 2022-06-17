import axios from "axios";
import { config } from "../../config/config.json";

class Auth {
  async LoginRequest(id, password) {
    return await axios.post(`${config}/auth/login`, {
      id,
      password,
    });
  }
}

export default new Auth();
