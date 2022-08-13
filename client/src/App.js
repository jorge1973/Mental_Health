import { useAuth0 } from "@auth0/auth0-react";
import { UserLogin } from "./Components/UserLogin";
import { UserLogout } from "./Components/UserLogout";
import { Profile } from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Customer/Home";
import GlobalStyle from "./GlobalStyle";
import AdminPage from "./Pages/Admin/AdminPage";
import { AddProf } from "./Pages/Admin/AddProf";
import SearchPage from "./Pages/Customer/SearchPage";
import ListProf from "./Pages/Admin/ListProf";
import ProfDetails from "./Pages/Customer/ProfDetails";
const App = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/AdminPage" element={<AdminPage />} />
					<Route exact path="/AddProf" element={<AddProf />} />
					<Route exact path="/ListProf" element={<ListProf />} />
					<Route exact path="/Search" element={<SearchPage />} />
					<Route exact path="/proDetails/:id" element={<ProfDetails />} />
					<Route path="">404: Oops!</Route>
				</Routes>
			</BrowserRouter>
			{/* <h1>We are Up..</h1>
			{isAuthenticated ? (
				<>
					<Profile />
					<UserLogout />
				</>
			) : (
				<UserLogin />
			)} */}
		</>
	);
};

export default App;
