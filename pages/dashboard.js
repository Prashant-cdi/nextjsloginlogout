var total = "";

export default function Dashboard() {
  function handleUser() {
    console.log("handleuser is run");
    async function fetchdata() {
      console.log("fecthdata is run");
      let response = await fetch("https://reqres.in/api/users");
      return await response.json();
    }

    async function renderUsers() {
      console.log("renderUsers is run");
      let data = await fetchdata();

      data.data.forEach((user) => {
        console.log("foreach is run");

        let segment = (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.email}</div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
          </div>
        );

        console.log(segment);
        total = total + segment;
      });
      console.log(total);
      return total;
    }

    renderUsers();
  }

  function handleResources() {}
  return (
    <>
      <div>
        <button type="button" className="buttons" onClick={handleUser}>
          Users
        </button>
      </div>

      <div>
        <button type="button" className="buttons" onClick={handleResources}>
          Resources
        </button>
      </div>
    </>
  );
}
