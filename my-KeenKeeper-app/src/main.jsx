import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './Layout/Rootlayout.jsx';
import Home from './Pages/Homepage/Home.jsx';
import Timeline from './Pages/Timeline/Timeline.jsx';
import Stats from './Pages/Stats/Stats.jsx';
import Frienddtails from './Pages/Frienddetail/Frienddtails.jsx';
import Contextprovider from './Contextapi/Contextprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/:id',
      element:<Frienddtails></Frienddtails>
    },
    {
      path:'/Timeline',
      element:<Timeline></Timeline>
    },
    {
      path:'/Stats',
      element:<Stats></Stats>
    },
  ],
  errorElement:<h1>Not pound page</h1>
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextprovider>
      <RouterProvider router={router} />,
    </Contextprovider>
  </StrictMode>,
)
