import { Add, Header, List, Status } from "../component";

export default function Home() {
	return (
		<>
			<img className="w-full h-60 absolute top-0 left-0 object-cover z-[-1]" src={"/bg-desktop-dark.jpg"} alt="" />

			<div className="w-11/12 max-w-[600px] mx-auto pt-4">
				<Header />
				<Add />

				<div className="mt-4 overflow-hidden rounded-none md:rounded-md">
					<List />
					<Status />
				</div>

				<div className="h-20 my-4 flex items-center justify-center">
					<p className="text-gray-500">Drag and drop to recorder list</p>
				</div>
			</div>
		</>
	);
}
