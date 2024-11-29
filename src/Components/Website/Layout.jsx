import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useContext } from "react";
import { myContext } from "../../App";


function Layout(){

  let {isLogin , setIsLogin , isDark , setIsDark,isAscending, setIsAscending ,isClickedOrder,setIsClickedOrder} = useContext(myContext)

  return <>
    <Navbar isLogin={isLogin} setIsLogin={setIsLogin} isDark={isDark} setIsDark={setIsDark} isAscending={isAscending} setIsAscending={setIsAscending} isClickedOrder={isClickedOrder} setIsClickedOrder={setIsClickedOrder} />
    <Outlet />
    <Footer />
  </>
}

export default Layout;