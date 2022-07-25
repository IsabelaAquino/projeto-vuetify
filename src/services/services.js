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
	  post: (dados) => {
        let uri = '/products';
        return api['post'].call(api, uri, dados);
    },
    get: (uri) => {
      // let uri = '/products'
      return api.get(uri);
    },
    // post(endpoint, body) {
    //   return axiosInstance.post(endpoint, body);
    // },
    // put(endpoint, body) {
    //   return axiosInstance.put(endpoint, body);
    // },
    delete(id) {
      let uri = '/products/' + id
      return api['delete'].call(api, uri);
    }
};

export default ProdutosService;
