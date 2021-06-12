import Router from "next/router";

const Users = (props) => {
  return (
    <>
      <h1>Users</h1>
      {props.users.map((item) => (
        <div className="list-group" key={item.id}>
          <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={e=>Router.push("/users/[id]",`/users/${item.id}`)}>
            <img
              src={item.avatar}
              className="img-fluid"
              style={{ borderRadius: "50%" }}
              alt=""
            />
            <div>
              <p>{item.email}</p>
              <p>
                {item.first_name} {item.last_name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
