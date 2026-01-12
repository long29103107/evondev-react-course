import { withErrorBoundary } from "react-error-boundary";
import HomeNewest from "./HomeNewest";

const HomeNewestBoundary = withErrorBoundary(HomeNewest, {
  FallbackComponent: (
    <p className="p-3 text-red-500 bg-red-100">
      Look like this component error in HomeNewest
    </p>
  ),
});

export default HomeNewestBoundary;
