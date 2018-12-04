// Only import the compile function from handlebars instead of the entire library
import { compile } from 'handlebars';
import update from '../helpers/update';
import { getInstance } from '../firebase/firebase';

const firebase = getInstance();

// Import the template to use
const registerTemplate = require('../templates/register.handlebars');

// Add to firebase
const firebaseReg = (email, password) => {
  return new Promise((resolve, reject) =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        resolve(user);
      })
      .catch(error => reject(error));
  });
};

// Is the 'agree to terms & conditions' checked? => const checked = 


export default () => {
  update(compile(registerTemplate)());

  const buttonRegister = document.getElementById("register");
  buttonRegister.addEventListener('click', e => {
    if(firebaseReg)
    //als aangevinkt staat terms
  })

};
