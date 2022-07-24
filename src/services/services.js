import api from './api';

const ProdutosService = {
    // buscarAtrativos: () => {
    //     let uri = '/atrativos'
    //     return crm.get(uri);
    // },
    // editAtrativo: (dados, id) => {
    //     let uri = '/atrativos/' + id;
    //     return crm['put'].call(crm, uri, dados);
    // },
	  // storeAtrativos: (dados) => {
    //     let uri = '/atrativos';
    //     return crm['post'].call(crm, uri, dados);
    // },
    get: () => {
      let uri = '/products'
      return api.get(uri);
    },
    // post(endpoint, body) {
    //   return axiosInstance.post(endpoint, body);
    // },
    // put(endpoint, body) {
    //   return axiosInstance.put(endpoint, body);
    // },
    // delete(endpoint) {
    //   return axiosInstance.delete(endpoint);
    // }
};

export default ProdutosService;
