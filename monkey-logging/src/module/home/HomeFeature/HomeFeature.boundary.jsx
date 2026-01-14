import { withErrorBoundary } from 'react-error-boundary';
import HomeFeature from './HomeFeature';

const HomeFeatureBoundary = withErrorBoundary(HomeFeature, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">Look like this component error in HomeFeature</p>
  ),
});

export default HomeFeatureBoundary;
