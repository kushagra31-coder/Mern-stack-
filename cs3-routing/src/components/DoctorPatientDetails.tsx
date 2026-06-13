import { useParams, useNavigate } from 'react-router-dom';
import type { DoctorPatientParams } from '../types';

const DoctorPatientDetails: React.FC = () => {
  const { doctorId, patientId } = useParams<DoctorPatientParams>();
  const navigate = useNavigate();

  if (!doctorId || !patientId) {
    return <div>Missing parameters</div>;
  }

  const numDoctorId = Number(doctorId);
  const numPatientId = Number(patientId);

  if (isNaN(numDoctorId) || isNaN(numPatientId)) {
    return <div>Invalid ID - IDs must be numeric</div>;
  }

  return (
    <div className="doctor-patient-details">
      <h1>Doctor-Patient Details</h1>
      <p>Doctor ID: {numDoctorId}</p>
      <p>Patient ID: {numPatientId}</p>
      <button onClick={() => navigate('/doctors')}>
        Back to Doctors
      </button>
    </div>
  );
};

export default DoctorPatientDetails;