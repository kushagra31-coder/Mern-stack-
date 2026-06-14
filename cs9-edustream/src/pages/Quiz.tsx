interface QuizProps {
  courseId: number;
}

const questions: Record<number, { q: string; options: string[]; answer: number }[]> = {
  1: [
    { q: 'What hook memoizes a value?', options: ['useState', 'useMemo', 'useRef', 'useEffect'], answer: 1 },
    { q: 'What does React.memo do?', options: ['Manages state', 'Prevents re-renders', 'Fetches data', 'Routes pages'], answer: 1 },
  ],
  2: [
    { q: 'What annotation maps a method to GET?', options: ['@PostMapping', '@GetMapping', '@PutMapping', '@DeleteMapping'], answer: 1 },
    { q: 'What does JPA stand for?', options: ['Java Persistence API', 'Java Public API', 'JSON Process API', 'Java Parse API'], answer: 0 },
  ],
  3: [
    { q: 'What does OWASP stand for?', options: ['Open Web App Security Project', 'Online Web Attack System Protocol', 'Open World API Security', 'Online Web App Suite Protocol'], answer: 0 },
    { q: 'What is SQL Injection?', options: ['A type of virus', 'Injecting malicious SQL into queries', 'A database backup method', 'A React hook'], answer: 1 },
  ],
};

export default function Quiz({ courseId }: QuizProps) {
  const qs = questions[courseId] || [];

  return (
    <div style={{
      marginTop: 16,
      padding: 16,
      background: '#faf5ff',
      border: '1px solid #c4b5fd',
      borderRadius: 8
    }}>
      <h3>Quiz — Course {courseId}</h3>
      <p style={{ fontSize: 12, color: '#6b7280' }}>
        Lazy-loaded separately from Courses page bundle.
      </p>
      {qs.map((q, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <p style={{ fontWeight: 500 }}>{i + 1}. {q.q}</p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: 'block', fontSize: 13, marginLeft: 12, cursor: 'pointer' }}>
              <input type="radio" name={`q${i}`} value={j} style={{ marginRight: 6 }} />
              {opt}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}