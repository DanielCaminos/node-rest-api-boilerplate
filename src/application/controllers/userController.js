const fetch = require('node-fetch');


const URL = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
const options = { method: 'GET' };

const getUrl = (url, method) => fetch(url, method)
  .then((res) => res.json())
  .catch((err) => {
    console.error(`Error ${err}`);
  });
const userController = {
  getAll: async (req, res) => {
    const data = await getUrl(URL, options);
    const { users } = data;
    const aux = users.filter((d) => d.is_active = true);
    aux.sort((a, b) => {
      if (a.lastname > b.lastname) {
        return 1;
      }
      if (a.lastname < b.lastname) {
        return -1;
      }
      return 0;
    });
    aux.forEach((a) => {
        const birthday = a.birthday.substring(0, 4);
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthday;

        a.age = age;
      });

    // for(i=0;i<aux.length;i++){
    //   Object.defineProperty(aux[i],'Edad',{value:10});
    // }
    res.json(aux);
  },
};
module.exports = userController;
