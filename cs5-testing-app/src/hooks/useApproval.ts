import { useState } from 'react';

interface UseApprovalReturn {
  approved: boolean;
  approve: () => void;
  reset: () => void;
}

export function useApproval(): UseApprovalReturn {
  const [approved, setApproved] = useState<boolean>(false);
  const approve = () => setApproved(true);
  const reset = () => setApproved(false);
  return { approved, approve, reset };
}