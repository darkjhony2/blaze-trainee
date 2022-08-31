import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import Login from "../pages/Login"


export const BlazeAppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/switch" element={<Home />} />
    </Routes>
    </>
  )
}
