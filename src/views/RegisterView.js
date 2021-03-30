import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
      
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

    dispatch(authOperations.register({ name, email, password }))
    
   setName('');
   setEmail('');
   setPassword('')
  };

    return (
      <div>
        <h1>Сторінка регістрації</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          // autoComplete="off"
        >
          <label style={styles.label}>
            Ім'я
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>

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

          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
  }


