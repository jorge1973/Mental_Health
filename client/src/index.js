import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { SearchProvider } from "./Context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Auth0Provider
		domain="dev-z-z45c6x.us.auth0.com"
		clientId="rCkZ8V8h5ILOqTL3uLrfaWtQ2LvWDksU"
		redirectUri={"http://localhost:3000"}
	>
		<SearchProvider>
			<App />
		</SearchProvider>
	</Auth0Provider>
);
