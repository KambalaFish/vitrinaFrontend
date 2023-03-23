import { useParams } from 'react-router';

const TestId = () => {
  const params = useParams<Record<'testId', string>>();

  return <>test id: {params.testId}</>;
};

export { TestId };
