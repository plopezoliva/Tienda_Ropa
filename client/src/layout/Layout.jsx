

// import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Routes from "../routes/Routers";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <DraftsIcon />,
  },
];
const Layout = () => {
  return (
    <>
      <NavBar  navArrayLinks={navArrayLinks}/>
      <div>
        <Routes />
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
