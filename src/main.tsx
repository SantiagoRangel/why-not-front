import React from "react"
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
import Example from "./pages/Example.tsx"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/hola" element={<Example />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
