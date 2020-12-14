import axios from "axios";

// const REACT_APP_API_KEY = process.env.API_KEY;06827465
const proxyUrl = "https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/v2/products?barcode=";

export default {
  fromInputBarcode: barcodeInput => {
    return axios.get(
      proxyUrl + barcodeInput + "&formatted=y&key=hrsh89sx6t7478jna9yf81jqmxbhke"
    );
  },
  postusersProduct: usersProduct=> {
    return axios.post("/Products", usersProduct)
    .then(result => result.data);
  }
};


//   retrieveProduct: () => {
//     return axios.post('/api/products/all')
//     // .then(result => result.data);
//   },
//   getOneProduct: id => {
//     return axios.get(`/api/products/id=${id}`);
//   },
//   deleteProduct: id => {
//     return axios.delete(`/api/products/del/id=${id}`);
//   },

//   saveProduct: id => {
//     return axios.patch(`/api/products/update/id=${id}`);
//   },
// };

