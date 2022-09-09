import { Route, Routes } from "react-router-dom"
import Switch from "../pages/Switch"
import Login from "../pages/Login"
import Settings from "../pages/Settings"

export const BlazeAppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
    </>
  )
}
