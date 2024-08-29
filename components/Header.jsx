import { Combobox } from "./Combobox";
import { ModeToggle } from "./ModeToggle";
import Searchbar from "./Searchbar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-4">
      <div className="flex justify-between gap-3">
        <div className="flex gap-3 items-center">
          <p className="text-14 font-bold">Show</p>
          <Combobox />
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-14 font-bold">Entries</p>
          <Searchbar />
        </div>
      </div>
      <div className="flex gap-3">
        <Button className="px-3 py-2 bg-violet-1 dark:hover:bg-accent dark:focus:bg-accent">
          <p className="text-14 text-white-1 font-bold">Add Customer</p>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
