import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"

export const BlazeAppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" />
    </Routes>
    </>
  )
}
