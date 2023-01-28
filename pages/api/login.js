import axios from "axios";

const login = async (req, res) => {
  const credentials = req.body;

  // console.log("credentials: ", credentials);

  try {
    const response = await axios.post(
      `https://admin.rbcommunity.org/auth/local`,
      {
        identifier: req.body.identifier,
        password: req.body.password,
      }
    );
    // console.log("RES: ", response);
    // return res.response;
    // res.status(201).end(JSON.stringify(response))
    // res.statusCode = 200;
    // res.end(JSON.stringify(response));
    res.status(response.status).json(response.data);
  } catch (error) {
    console.log("E: ", error);
    return res;
  }
};

export default login;
