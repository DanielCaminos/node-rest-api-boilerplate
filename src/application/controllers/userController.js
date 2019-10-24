const fetch = require('node-fetch');


const URL ='https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
const options = { "method": "GET" };

const getUrl = (url, method) => {
  return fetch(url, method)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error ${err}`);
    });
};
let userController = {
    getAll: async (req, res) => {
      const data = await getUrl(URL, options); 
      const users = data.users ; 
      const aux = users.filter(d => d.is_active = true);
      aux.sort(function (a, b) {
        if (a.lastname > b.lastname) {
          return 1;
        }
        if (a.lastname < b.lastname) {
          return -1;
        }
        return 0;
      })         
   // for(i=0;i<aux.length;i++){
     //   Object.defineProperty(aux[i],'Edad',{value:10});       
       // }
     res.json(aux);
    }};
module.exports =userController;