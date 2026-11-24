import AdminMain from "./components/admin/AdminMain"
import AdminAddCountries from "./components/admin/AdminAddCountries"
import AdminCountries from "./components/admin/AdminCountries"
import AdminUsers from "./components/admin/AdminUsers"
import CountryDetailPage from "./pages/CountryDetailPage"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProfilePage from "./pages/ProfilePage"
import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path={`/country-details/:id`} element={<CountryDetailPage/>}></Route>
      <Route path="/profile" element={<ProfilePage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/admin-panel" element={<AdminMain/>}></Route>
      <Route path="/admin-panel/countries" element={<AdminCountries/>}></Route>
      <Route path="/admin-panel/users" element={<AdminUsers/>}></Route>
      <Route path="/admin-panel/add-country" element={<AdminAddCountries/>}></Route>




    </Routes>
    </>
  )
}

export default App