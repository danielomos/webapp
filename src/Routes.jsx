import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const StationDetails = React.lazy(() => import("pages/StationDetails"));
const NoStation = React.lazy(() => import("pages/NoStation"));
const Integration = React.lazy(() => import("pages/Integration"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/nostation" element={<NoStation />} />
          <Route path="/stationdetails" element={<StationDetails />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
