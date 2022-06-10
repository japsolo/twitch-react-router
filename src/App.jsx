import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products/*" element={<Products />} />
        <Route path="search" element={<SearchResults />} />
      </Route>
      <Route path="*" element={<NotFound />} />

      {/* <Route path="/account" element={<AccountLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="edit" element={<ProfileEdit />} />
      </Route> */}
    </Routes>
  )
}

export default App