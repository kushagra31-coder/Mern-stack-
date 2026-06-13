export interface AppointmentParams {
  patientId: string;
  appointmentId: string;
}

export interface DoctorPatientParams {
  doctorId: string;
  patientId: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  date: string;
  reason: string;
}
export interface AppointmentParams extends Record<string, string | undefined> {
  patientId: string;
  appointmentId: string;
}

export interface DoctorPatientParams extends Record<string, string | undefined> {
  doctorId: string;
  patientId: string;
}