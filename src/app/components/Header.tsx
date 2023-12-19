import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="px-5 py-2 z-10 w-full flex items-center justify-between font-mono text-sm lg:flex-wrap">
      <h1>
        STOCKELITO
      </h1>
      <DarkModeButton />
    </header>
  );
}
export default Header;