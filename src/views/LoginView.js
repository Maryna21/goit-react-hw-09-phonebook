import React,  { useState} from 'react';
import { useDispatch} from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
const getToken = state => state.auth.token;

// };

export default function LoginView() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };


  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;
      
  //     case 'password':
  //       setPassword(value);
  //       break;
      
  //     default:
  //       console.warn(`тип name - ${name} немає`)
  //   }
  // }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }))
   setEmail('');
   setPassword('')
  };

    return (
      <div>
        <h1>Сторінка логіна</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
        //   autoComplete="off"
        >
          <label style={styles.label}>
            Пошта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <button type="submit">Увійти</button>
        </form>
      </div>
    );
  }



