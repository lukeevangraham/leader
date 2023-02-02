import axios from "axios";

const login = async (req, res) => {
  try {
    const response = await axios.post(
      `https://admin.rbcommunity.org/auth/local`,
      {
        identifier: req.body.identifier,
        password: req.body.password,
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.log("E: ", error);
    return res;
  }
};

export default login;
