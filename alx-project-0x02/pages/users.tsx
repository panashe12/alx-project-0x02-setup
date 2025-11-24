import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const formattedUsers: UserProps[] = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));

      setUsers(formattedUsers);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <Header />

      <div style={{ padding: "40px" }}>
        <h1>Users Page</h1>
        <p>Here are users fetched from an external API:</p>

        <div style={{ marginTop: "20px" }}>
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </>
  );
}
