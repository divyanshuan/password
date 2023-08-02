import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login/login";
import Rootlayout from "./layout/rootlayout";

import Cardlayout from "./card/cardlayout";
import Addmenue from "./add/addmenue";
import AuthContextProvider from "./Authcontext/authcontext";
import Editmenue from "./add/editmenue";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="password" element={<Rootlayout />}>
        <Route path="all" element={<Cardlayout />} />
        <Route path="add" element={<Addmenue />} />
        <Route path="edit/:id" element={<Editmenue />} />
      </Route>
    </>
  )
);
export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}
