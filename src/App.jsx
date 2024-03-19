import React, { useContext } from "react";
import { AppContext, AppContextProvider } from "./context/App";
import { Home } from "./page";

export default function App() {
	const appContext = useContext(AppContext);
	return (
		<AppContextProvider>
			<div className={appContext?.isDarkTheme ? "dark" : ""}>
				<Home />
			</div>
		</AppContextProvider>
	);
}
