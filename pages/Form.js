export default function Form({ buttonText, onClickfunction }) {
  function handle(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    // console.log(email + password);
    onClickfunction(email, password);
  }

  return (
    <form onSubmit={handle}>
      <div>
        <label htmlFor="email">
          <h3>Email</h3>
        </label>
        <input type="email" name="" id="email" className="inputs" />
      </div>
      <div>
        <label htmlFor="email">
          <h3>Password</h3>
        </label>
        <input type="password" name="" id="pass" className="inputs" />
      </div>

      <input type="submit" value={buttonText} className="buttons" />
    </form>
  );
}
