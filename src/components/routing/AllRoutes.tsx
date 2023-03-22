import { router } from '@components/routing/router';
import { RouterProvider } from 'react-router-dom';
import { memo } from 'react';

/*This memo wrapper is necessary to avoid renders when notifications state update*/
const AllRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

AllRoutes.displayName = 'AllRoutes';

export { AllRoutes };
