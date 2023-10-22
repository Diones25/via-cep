import axios from "axios";

const getcep = async (req, res) => {

  const { cep } = req.params;

  const options = {
    method: 'GET',
    url: `https://viacep.com.br/ws/${cep}/json/`,
  }

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.status(response.status).json(response.data);
  }
  catch (error) {
    console.error(error);
    return res.json(error);
  }
}

export default {
  getcep
}