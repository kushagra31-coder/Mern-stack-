import { Link } from 'react-router-dom';
import type { Patient } from '../types';

const patients: Patient[] = [
  { id: '1', name: 'John Doe', age: 35 },
  { id: '2', name: 'Jane Smith', age: 28 },
  { id: '3', name: 'Bob Johnson', age: 45 }
];

const PatientList: React.FC = () => {
  return (
    <div className="patient-list">
      <h2>Patients</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <span>{patient.name} (Age: {patient.age})</span>
            <Link to={`/patients/${patient.id}/appointments/101`}>
              View Appointment
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;