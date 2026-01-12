import { withErrorBoundary } from "react-error-boundary";
import PostItem from "./PostItem";

const PostItemBoundary = withErrorBoundary(PostItem, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error in PostItem
    </p>
  ),
});

export default PostItemBoundary;
