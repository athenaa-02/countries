import AdminMainPage from "./pages/AdminMainPage"
import AdminCountryPage from "./pages/AdminCountryPage"
import AdminUsersPage from "./pages/AdminUsersPage"
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
      <Route path="/admin-panel" element={<AdminMainPage/>}></Route>
      <Route path="/admin-panel/country" element={<AdminCountryPage/>}></Route>
      <Route path="/admin-panel/users" element={<AdminUsersPage/>}></Route>

    </Routes>
    </>
  )
}

export default App