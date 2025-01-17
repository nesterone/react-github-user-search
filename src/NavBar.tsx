interface NavBarProps {
  children: React.ReactElement
}
export function NavBar({ children }: NavBarProps) {
    return (
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between">
                    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2 px-4">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="#">
                                <img
                                    className="h-8 w-auto"
                                    src="./assets/github-mark.svg"
                                    alt="Github Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                        <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                            <div className="w-full">
                                <label for="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

