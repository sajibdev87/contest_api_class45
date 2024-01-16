import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Componets/Home/Home";
import Registration from "../Componets/Registration/Registration";
import Login from "../Componets/Login/Login";
import Product from "../Componets/Product/Product";

export const router= createBrowserRouter([
          {
                    path:'/',
                    element:<Main></Main>,
                    children:[
                              {
                                 path:'/',
                                 element:<Home></Home>         
                              },
                              {
                                        path:'/register',
                                        element:<Registration></Registration>
                              },
                              {
                                        path:'/login',
                                        element:<Login></Login>
                              },
                              {
                                        path:'/product',
                                        element:<Product></Product>
                              },
                    ]
          }
]);