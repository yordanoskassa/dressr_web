import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import AuthCallback from './pages/AuthCallback'
import Login from './pages/Login'
import VirtualTryOn from './pages/tools/VirtualTryOn'
import ProductToModel from './pages/tools/ProductToModel'
import ModelSwap from './pages/tools/ModelSwap'
import Photoshoots from './pages/solutions/Photoshoots'
import FittingRooms from './pages/solutions/FittingRooms'
import ApiDocs from './pages/resources/ApiDocs'
import HelpCenter from './pages/resources/HelpCenter'
import Pricing from './pages/resources/Pricing'
import About from './pages/company/About'
import Blog from './pages/company/Blog'
import Careers from './pages/company/Careers'
import FutureFashionPhotography from './pages/company/blog/FutureFashionPhotography'
import ReducingReturns from './pages/company/blog/ReducingReturns'
import LaunchingDressr from './pages/company/blog/LaunchingDressr'
import Download from './pages/Download'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download" element={<Download />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          {/* Tools */}
          <Route path="/tools/virtual-try-on" element={<VirtualTryOn />} />
          <Route path="/tools/product-to-model" element={<ProductToModel />} />
          <Route path="/tools/model-swap" element={<ModelSwap />} />
          {/* Solutions */}
          <Route path="/solutions/photoshoots" element={<Photoshoots />} />
          <Route path="/solutions/fitting-rooms" element={<FittingRooms />} />
          {/* Resources */}
          <Route path="/resources/api-docs" element={<ApiDocs />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/pricing" element={<Pricing />} />
          {/* Company */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/blog" element={<Blog />} />
          <Route path="/company/careers" element={<Careers />} />
          {/* Blog Posts */}
          <Route path="/company/blog/future-fashion-photography" element={<FutureFashionPhotography />} />
          <Route path="/company/blog/reducing-returns" element={<ReducingReturns />} />
          <Route path="/company/blog/launching-dressr" element={<LaunchingDressr />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
