import { useContext } from "react";
import { AppContext } from "../context/App";

export default function Header() {
	const appContext = useContext(AppContext);

	const fTheme = () => appContext?.dispatch({ type: "TOGGLE_THEME" });

    return (
		<header className="py-8 flex items-center justify-between">
			<h1 className="text-4xl font-semibold tracking-[.3em] text-gray-100">TODO</h1>
			<button className="" onClick={fTheme}>
				<img src={appContext?.isDarkTheme ? "/icon-sun.svg" : "/icon-moon.svg"} alt="theme" />
			</button>
		</header>
	);
}
