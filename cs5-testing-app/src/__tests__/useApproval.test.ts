import { renderHook, act } from '@testing-library/react';
import { useApproval } from '../hooks/useApproval';

test('initial approved state is false', () => {
  const { result } = renderHook(() => useApproval());
  expect(result.current.approved).toBe(false);
});

test('approve sets approved to true', () => {
  const { result } = renderHook(() => useApproval());
  act(() => {
    result.current.approve();
  });
  expect(result.current.approved).toBe(true);
});

test('reset sets approved back to false', () => {
  const { result } = renderHook(() => useApproval());
  act(() => {
    result.current.approve();
  });
  act(() => {
    result.current.reset();
  });
  expect(result.current.approved).toBe(false);
});