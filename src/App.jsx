import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import BusinessDashboard from './components/BusinessDashboard';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/generate" element={<ReviewForm />} />
              <Route path="/dashboard" element={<BusinessDashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
