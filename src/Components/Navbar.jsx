const Navbar = () => {
	return (
		<nav className=" fixed w-full z-20 top-0 start-0 bg-neutral-950">
			<div className="md:px-8 lg:px-20 flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
						Stream Flix
					</span>
				</a>
				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
					>
						Login
					</button>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-white font-medium"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 text-neutral-400 ">
								TV Shows
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 text-neutral-400 ">
								Movies
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 px-3 text-neutral-400 ">
								Live Show
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
