import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AdminPage from "../Pages/Admin/AdminPage";

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(useAuth0());
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<h3>Email:{user.email}</h3>
				<AdminPage />
			</div>
		)
	);
};
