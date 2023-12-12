import ReactDOM from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/home/Home.tsx"
import Root from "./pages/root/Root.tsx"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import gsap from "gsap"
import Trips from "./pages/trips/Trips.tsx"
import TripDetail from "./pages/tripDetail/TripDetail.tsx"
gsap.registerPlugin(ScrollTrigger)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trip" element={<TripDetail />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
