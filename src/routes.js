import Customers from "./Componets/Customers/Customers";
import EditCustomer from "./Componets/Customers/EditCustomer";
import ViewCustomer from "./Componets/Customers/ViewCustomer";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Home from "./Componets/Home/Home";
import PlaceOrder from "./Componets/Home/PlaceOrder";
import ChatMessage from "./Componets/Message/ChatMessage";
import Message from "./Componets/Message/Message";
import Notification from "./Componets/Notification/Notification";
import Order from "./Componets/Order/Order";
import Product from "./Componets/Product/Product";
import EmpManage from "./Componets/Setting/EmpManage";
import LangAndReg from "./Componets/Setting/LangAndReg";
import OpeningHour from "./Componets/Setting/OpeningHour";
import PersonalInfo from "./Componets/Setting/PersonalInfo";
import ResetPass from "./Componets/Setting/ResetPass";
import Settings from "./Componets/Setting/Settings";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Home",
    //  NestedRoutes: [
    //   {
    //     path: "placeorder",
    //     component: PlaceOrder,
    //     exact: true,
    //     title: "Place Order",
    //   }
    // ],
  },
  {
    path: "/placeorder",
    component: PlaceOrder,
    exact: true,
    title: "Place Order",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    title: "Dashboard",
  },
  {
    path: "/order",
    component: Order,
    exact: true,
    title: "Order",
    //   NestedRoutes: [
    //     {
    //       path: "",
    //       component: CreateProduct,
    //       exact: true,
    //       title: "Create A product",
    //     },
    //     {
    //       path: "createvariant",
    //       component: AddVarient,
    //       exact: true,
    //       title: "Create A Variant",
    //     },
    //   ],
  },

  {
    path: "/product",
    component: Product,
    exact: true,
    title: "Product",
  },
  {
    path: "/notification",
    component: Notification,
    exact: true,
    title: "Notification",
  },
  {
    path: "/customers",
    component: Customers,
    exact: true,
    title: "Customers",
    NestedRoutes: [
      {
        path: "edit",
        component: EditCustomer,
        exact: true,
        title: "Edit Customer",
      },
      {
        path: "",
        component: ViewCustomer,
        exact: true,
        title: "View Customer",
      },
    ],
  },
  {
    path: "/message",
    component: Message,
    exact: true,
    title: "Message",
  },
  {
    path: "message/chatroom",
    component: ChatMessage,
    exact: true,
    title: "Message",
  },
  {
    path: "/setting",
    component: Settings,
    exact: true,
    title: "Settings",
    NestedRoutes: [
      {
        path: "",
        component: PersonalInfo,
        exact: true,
        title: "Personal Information",
      },
      {
        path: "employee",
        component: EmpManage,
        exact: true,
        title: "Employee Management",
      },
      {
        path: "opening_hour",
        component: OpeningHour,
        exact: true,
        title: "Opening Hours",
      },
      {
        path: "reset_pass",
        component: ResetPass,
        exact: true,
        title: "Reset Password",
      },
      {
        path: "lang_and_reg",
        component: LangAndReg,
        exact: true,
        title: "Language And Region",
      },
    ],
  },
];

export default routes;
