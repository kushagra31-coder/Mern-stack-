import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppointmentDetails from './components/AppointmentDetails';
import DoctorPatientDetails from './components/DoctorPatientDetails';
import PatientList from './components/PatientList';
import DoctorList from './components/doctorList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Medix Patient Portal</h1>
        <nav>
          <Link to="/">Patients</Link>
          {' | '}
          <Link to="/doctors">Doctors</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route
            path="/patients/:patientId/appointments/:appointmentId"
            element={<AppointmentDetails />}
          />
          <Route
            path="/doctors/:doctorId/patients/:patientId"
            element={<DoctorPatientDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;  