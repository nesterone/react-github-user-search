import { NavBar } from "./NavBar";

export default function App() {
  return (
    <>
      <NavBar>
        <input
          name="search"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Search"
          type="search"
        />
      </NavBar>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-4">Results here</div>
        </div>
      </main>
    </>
  );
}
