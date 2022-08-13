import React from "react";
import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
	const [getProf, setGetPro] = useState(null);

	useEffect(() => {
		fetch("/pro/listpro")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setGetPro(data.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			<SearchContext.Provider value={{ getProf }}>
				{children}
			</SearchContext.Provider>
		</>
	);
};

export default SearchContext;
