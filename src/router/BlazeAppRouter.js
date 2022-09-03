import { Route, Routes } from "react-router-dom"
import Switch from "../pages/Switch"
import Login from "../pages/Login"


export const BlazeAppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/switch" element={<Switch />} />
    </Routes>
    </>
  )
}
