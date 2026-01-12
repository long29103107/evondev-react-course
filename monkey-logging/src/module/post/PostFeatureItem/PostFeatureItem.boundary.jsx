import PostFeatureItem from "./PostFeatureItem";
import { withErrorBoundary } from "react-error-boundary"; 

const PostFeatureItemBoundary = withErrorBoundary(PostFeatureItem, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error in PostFeatureItem
    </p>
  ),
});

export default PostFeatureItemBoundary;