import { withErrorBoundary } from 'react-error-boundary';
import PostNewestItem from './PostNewestItem';

const PostNewestItemBoundary = withErrorBoundary(PostNewestItem, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">Look like this component error in PostNewestItem</p>
  ),
});

export default PostNewestItemBoundary;
