import { Link } from 'react-router-dom';
import type { Doctor } from '../types';

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Smith', specialty: 'Cardiology' },
  { id: '2', name: 'Dr. Jones', specialty: 'Neurology' },
  { id: '3', name: 'Dr. Patel', specialty: 'Pediatrics' }
];

const DoctorList: React.FC = () => {
  return (
    <div className="doctor-list">
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <span>{doctor.name} - {doctor.specialty}</span>
            <Link to={`/doctors/${doctor.id}/patients/1`}>
              View Patient
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;