import { useParams, useNavigate } from 'react-router-dom';
import type { AppointmentParams } from '../types';

const AppointmentDetails: React.FC = () => {
  const { patientId, appointmentId } = 
    useParams<AppointmentParams>();
  const navigate = useNavigate();

  if (!patientId || !appointmentId) {
    return <div>Missing parameters</div>;
  }

  const apptId = Number(appointmentId);
  if (isNaN(apptId)) {
    return <div>Invalid appointment ID</div>;
  }

  return (
    <div>
      <h1>Appointment Details</h1>
      <div>
        <p><strong>Patient ID:</strong> {patientId}</p>
        <p><strong>Appointment ID:</strong> {apptId}</p>
        <p><strong>Date:</strong> 15 June 2026</p>
        <p><strong>Doctor:</strong> Dr. Smith</p>
        <p><strong>Reason:</strong> Regular Checkup</p>
        <p><strong>Status:</strong> Confirmed</p>
      </div>
      <button onClick={() => navigate('/')}>
        Back to Patients
      </button>
    </div>
  );
};

export default AppointmentDetails;