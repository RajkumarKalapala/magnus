import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// More Pages
import Popups from './pages/More/Popups';
import MultipleTabs from './pages/More/MultipleTabs';
import ComingSoon from './pages/More/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="more/popups" element={<Popups />} />
          <Route path="more/tabs" element={<MultipleTabs />} />
          <Route path="more/menu" element={<ComingSoon featureName="Menu" />} />
          <Route path="more/autocomplete" element={<ComingSoon featureName="Autocomplete" />} />
          <Route path="more/collapsible" element={<ComingSoon featureName="Collapsible Content" />} />
          <Route path="more/images" element={<ComingSoon featureName="Images" />} />
          <Route path="more/slider" element={<ComingSoon featureName="Slider" />} />
          <Route path="more/tooltips" element={<ComingSoon featureName="Tooltips" />} />
          <Route path="more/links" element={<ComingSoon featureName="Links" />} />
          <Route path="more/css" element={<ComingSoon featureName="CSS Properties" />} />
          <Route path="more/iframes" element={<ComingSoon featureName="iFrames" />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
