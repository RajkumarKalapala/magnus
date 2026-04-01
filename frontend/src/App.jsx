import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Import all More features
import Popups from './pages/More/Popups';
import MultipleTabs from './pages/More/MultipleTabs';
import Images from './pages/More/Images';
import Collapsible from './pages/More/Collapsible';
import Slider from './pages/More/Slider';
import Tooltips from './pages/More/Tooltips';
import MenuDemo from './pages/More/MenuDemo';
import Autocomplete from './pages/More/Autocomplete';
import Links from './pages/More/Links';
import CssProperties from './pages/More/CssProperties';
import Iframes from './pages/More/Iframes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="more/popups" element={<Popups />} />
          <Route path="more/tabs" element={<MultipleTabs />} />
          <Route path="more/images" element={<Images />} />
          <Route path="more/collapsible" element={<Collapsible />} />
          <Route path="more/slider" element={<Slider />} />
          <Route path="more/tooltips" element={<Tooltips />} />
          <Route path="more/menu" element={<MenuDemo />} />
          <Route path="more/autocomplete" element={<Autocomplete />} />
          <Route path="more/links" element={<Links />} />
          <Route path="more/css" element={<CssProperties />} />
          <Route path="more/iframes" element={<Iframes />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
