import { withErrorBoundary } from 'react-error-boundary';
import PostNewestLarge from './PostNewestLarge';

const PostNewestLargeBoundary = withErrorBoundary(PostNewestLarge, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">Look like this component error in PostNewestLarge</p>
  ),
});

export default PostNewestLargeBoundary;
