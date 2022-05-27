import React, { useState } from "react";

export default function Dashboard() {
  const [usersData, setusersData] = useState();
  const [resourcesData, setResourcesData] = useState();

  async function handleUser() {
    document.getElementsByClassName("AllUsersData")[0].style.display = "flex";
    document.getElementsByClassName("AllResourcesData")[0].style.display =
      "none";
    console.log("handleUser is run");
    await fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let requsersdata = myJson.data;
        console.log(requsersdata);
        setusersData(requsersdata);
      });
  }

  async function handleResources() {
    console.log("this is run");
    document.getElementsByClassName("AllUsersData")[0].style.display = "none";
    document.getElementsByClassName("AllResourcesData")[0].style.display =
      "flex";
    await fetch("https://reqres.in/api/unknown")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson.data);
        let resResourcesData = myJson.data;
        setResourcesData(resResourcesData);
      });
  }

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

      <div className="AllUsersData">
        {/* <h1 style={{ textAlign: "center" }}> All Users Data</h1> */}
        {usersData?.map((user) => (
          <div key={user.id} className="OneUserdata">
            <h3 key={user.id}>Id: {user.id}</h3>
            <h3 key={user.first_name}>First Name: {user.first_name}</h3>
            <h3 key={user.last_name}>Last Name: {user.last_name}</h3>
            <h3 key={user.email}>Email: {user.email}</h3>
          </div>
        ))}
      </div>

      <div className="AllResourcesData">
        {/* <h1 style={{ textAlign: "center" }}> All Resources Data</h1>     */}
        {resourcesData?.map((resource) => (
          <div key={resource.id} className="OneResourcedata">
            <h3 key={resource.id}>Id: {resource.id}</h3>
            <h3 key={resource.name}>First Name: {resource.name}</h3>
            <h3 key={resource.year}>Last Name: {resource.year}</h3>
            <h3 key={resource.color}>Email: {resource.color}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
