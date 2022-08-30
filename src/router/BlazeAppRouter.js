import { Route, Routes } from "react-router-dom"
import { Login } from "../pages"


export const BlazeAppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth" />
    </Routes>
    </>
  )
}
