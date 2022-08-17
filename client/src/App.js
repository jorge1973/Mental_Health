import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Customer/Home";
import GlobalStyle from "./GlobalStyle";
import AdminPage from "./Pages/Admin/AdminPage";
import { AddProf } from "./Pages/Admin/AddProf";
import SearchPage from "./Pages/Customer/SearchPage";
import ListProf from "./Pages/Admin/ListProf";
import ProfDetails from "./Pages/Customer/ProfDetails";
import UpdateProf from "./Pages/Admin/UpdateProf";
import ModifyProf from "./Pages/Admin/ModifyProf";
import Delete from "./Pages/Admin/Delete";
const App = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Search" element={<SearchPage />} />
					<Route exact path="/ListProf" element={<ListProf />} />
					<Route exact path="/proDetails/:id" element={<ProfDetails />} />
					<Route exact path="/AdminPage" element={<AdminPage />} />
					<Route exact path="/AddProf" element={<AddProf />} />
					<Route exact path="/UpdateProf" element={<UpdateProf />} />
					<Route exact path="/ModifyProf/:id" element={<ModifyProf />} />
					<Route exact path="/DeleteProf/" element={<Delete />} />

					<Route path="">404: Oops!</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
