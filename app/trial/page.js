'use client'

const Test = () => {
  const login = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      body: JSON.stringify({
        identifier: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log("RESULT: ", result);
  };

  const loginForm = (
    <form onSubmit={login}>
      <input
        type="username"
        name="username"
        id="username"
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>Submit</button>
    </form>
  );

  return <>{loginForm}</>;
};

export default Test;
