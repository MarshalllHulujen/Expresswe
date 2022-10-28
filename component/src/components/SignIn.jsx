import {useRef} from 'react';

export const SignIn = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const handleSubmit = event => {
    console.log([{name : firstRef.current.value, email : lastRef.current.value}]);
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>UserName</h1>
        <input
          ref={firstRef}
          id="first_name"
          name="first_name"
          type="text"
        />
        <h1>Email</h1>
        <input
          ref={lastRef}
          id="last_name"
          name="last_name"
          type="text"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
