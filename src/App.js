import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard.js/Dashboard";
import MyOrder from "./Pages/Dashboard.js/MyOrder";
import AddReview from "./Pages/Dashboard.js/AddReview";
import MyProfile from "./Pages/Dashboard.js/MyProfile";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageOrder from "./Pages/Dashboard.js/ManageOrder";
import AddProduct from "./Pages/Dashboard.js/AddProduct";
import ManageProduct from "./Pages/Dashboard.js/ManageProduct";
import MakeAdmin from "./Pages/Dashboard.js/MakeAdmin";
import Payment from "./Pages/Dashboard.js/Payment";
import NotFound from "./Pages/Shared/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Announcement from "./Pages/Home/Announcement";
import AllProducts from "./Pages/AllProducts/AllProducts";
import DashboardHome from "./Pages/Dashboard.js/DashboardHome";

function App() {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/allproducts"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome></DashboardHome>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
