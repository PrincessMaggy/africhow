import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
  } from "react-router-dom";

  import React from 'react'
import Rewards from "./components/Rewards/Rewards";
import Achievements from "./components/Rewards/Achievements";
import EarnStars from "./components/Rewards/EarnStars";
import Catalog from "./components/Rewards/catalog/Catalog";
import CatalogDetails from "./components/Rewards/catalog/CatalogDetails";
  
  const Allroutes = () => {
    return (
      <>
        <BrowserRouter>
            <Routes>
                {/* you can specify the different pages here element is the component you want the Route to open as shown below, the path is the url right after localhost or base url */}
                {/* you can also nest Routes example is the meal component that has meal list screen and details list screen */}

                {/* rewards route */}
                <Route path="rewards">
                    <Route path="" element={<Rewards />} />
                    <Route path="my-rewards" element={<Achievements />} />
                    <Route path="earn-stars" element={<EarnStars />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="reward-details" element={<CatalogDetails />} />
                </Route>


                
            </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default Allroutes