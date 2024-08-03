import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Buildresume from "./src/components/BuildResume";
import Next from "./src/components/Next";
import LoginForm from "./src/components/Login";
import RegistrationForm from "./src/components/Registration";
import { BrowserRouter,  Routes , Route } from "react-router-dom";

const AppLayout = () => {
        return (
               <div className="container">
              <Header />
              <Body />
              <Footer />
          </div>
        );
      } 
      const App = () => {
          return (
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<AppLayout />} />
                      <Route path="/BuildResume.js" element={<Buildresume />} />
                      <Route path="/Next.js" element={<Next />} />
                      <Route path="/src/components/Login.js" element={<LoginForm />} />
                      <Route path="/src/components/Registration.js" element={<RegistrationForm />} />
                  </Routes>
              </BrowserRouter>
          );
      };
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);   
 /*const appRouter = createBrowserRouter([
     {
          path:"/",
          element:<AppLayout />,
          children:[
               {
                    path:"/Buildresume",
                    element:<Buildresume />,
               },
          ]
     },
     
 ])
      
 const root = ReactDOM.createRoot(document.getElementById("root"));
 //root.render(<AppLayout />);
 root.render(<RouterProvider router={appRouter} />);*/
