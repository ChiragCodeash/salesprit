import { IconMenuDeep, IconShoppingCartFilled } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

const Sidebar = ({ handleOpen, OpenMenu }) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex justify-between sticky top-0   bg-light z-10">
        {/* SideBar Toggle */}
        <button
          onClick={() => {
            OpenMenu();
          }}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-dark rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <IconMenuDeep />
        </button>

        {/* Cart Toggle */}
        <button
          onClick={handleOpen}
          type="button"
          className="inline-flex items-center p-2 mt-2 me-3 text-sm  rounded-full md:hidden   text-dark"
        >
          <span className="sr-only">Open sidebar</span>
          <IconShoppingCartFilled />
        </button>
      </div>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r-2   -translate-x-full  md:translate-x-0"
      
      >
        <MenuItem />
      </aside>
    </>
  );
};

export default Sidebar;
