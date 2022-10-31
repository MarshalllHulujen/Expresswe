import { useRef } from 'react';

export const SignIn = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);


  window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      if (e.target.id == 'first_name') {
        lastRef.current.focus()
      } else {
        firstRef.current.value = '';
        lastRef.current.value = '';
      }
    }
  })

  const handleSubmit = event => {
    console.log([{ name: firstRef.current.value, email: lastRef.current.value }]);
    event.preventDefault();
  };

  return (
    <div id='sign-up'>
      <form onSubmit={handleSubmit}>
        <div id='text69'>team <div id='text2'></div></div>
        <h1> Login </h1>
        <h3>.</h3>
        <input
          ref={firstRef}
          id="first_name"
          name="first_name"
          type="text"
          placeholder='type the username here....'
        />
        <h3>.</h3>
        <input
          ref={lastRef}
          id="last_name"
          name="last_name"
          type="email"
          placeholder='type the email here...'
        />
        <button type='submit' id='btn123456'>Submit</button>
      </form>
    </div>
  );
};
