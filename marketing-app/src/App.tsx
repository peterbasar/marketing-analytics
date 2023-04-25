import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
/* Pages */
import ApiKeyPage from 'Pages/ApiKeyPage/ApiKeyPage';
import PartitionPage from 'Pages/PartitionPage/PartitionPage';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
import PartitionDataPage from 'Pages/PartitionDataPage/PartitionDataPage';
/* Components */
import DataManager from 'Components/DataManager/DataManager';
/* Zustand */
import { useAppStore } from 'App.store';
/* Initialize i18n */
import { AVAILABLE_LANGUAGES } from 'i18n/resources';
import i18n from 'i18n/i18n';


function App() {
  /* Zustand */
  const setActiveEndpoint = useAppStore((state) => state.setActiveEndpoint)
  const windowWidth = useAppStore((state) => state.windowWidth)
  const setWindowWidth = useAppStore((state) => state.setWindowWidth)

  /* Set the current location endpoint variable each page change */
  const location = useLocation()
  useEffect(() => {
    setActiveEndpoint(window.location.pathname)
    window.scrollTo(0, 0)
  }, [location, setActiveEndpoint])

  /* Save window width */
  useEffect(() => {
    const handleResize = () => {setWindowWidth(window.innerWidth)}
    window.addEventListener('resize', handleResize);
    handleResize();

    return( () => { /* Unmount */
        window.removeEventListener('resize', handleResize)
    });
  }, [])
  

  return (
    <div className='app'>
      <DataManager>
        <Routes>
          <Route path={FRONTEND_ENDPOINTS.APIKEY} element={<ApiKeyPage />} />
          <Route path={FRONTEND_ENDPOINTS.PARTITION} element={<PartitionPage />} />
          <Route path={FRONTEND_ENDPOINTS.DASHBOARD} element={<DashboardPage />} />
          <Route path={FRONTEND_ENDPOINTS.PARTITION_DATA} element={<PartitionDataPage />} />
          <Route path="*" element={<ApiKeyPage />} />
        </Routes>
      </DataManager>
    </div>
  );
}

export default App;
