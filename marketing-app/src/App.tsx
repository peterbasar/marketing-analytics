import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
/* Pages */
import ApiKeyPage from 'Pages/ApiKeyPage/ApiKeyPage';
import PartitionPage from 'Pages/PartitionPage/PartitionPage';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
/* Components */
import DataManager from 'Components/DataManager/DataManager';
/* Zustand */
import { AppStore } from 'App.store';
/* Initialize i18n */
import { AVAILABLE_LANGUAGES } from 'i18n/resources';
import i18n from 'i18n/i18n';
i18n.changeLanguage(AVAILABLE_LANGUAGES['en-US']);


function App() {
  /* Set the current location endpoint variable each page change */
  const setActiveEndpoint = AppStore((state) => state.setActiveEndpoint)
  const location = useLocation()
  useEffect(() => {
    setActiveEndpoint(window.location.pathname)
    window.scrollTo(0, 0)
  }, [location, setActiveEndpoint])
  

  return (
    <div className='app'>
      <DataManager>
        <Routes>
          <Route path={FRONTEND_ENDPOINTS.APIKEY} element={<ApiKeyPage />} />
          <Route path={FRONTEND_ENDPOINTS.PARTITION} element={<PartitionPage />} />
          <Route path={FRONTEND_ENDPOINTS.DASHBOARD} element={<DashboardPage />} />
          <Route path="*" element={<ApiKeyPage />} />
        </Routes>
      </DataManager>
    </div>
  );
}

export default App;
