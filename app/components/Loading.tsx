interface LoadingProps {
  size: string;
  type: number;
}
export const Loading = ({ size, type }: LoadingProps) => {
  let loadingSize: string;
  let loadingType: string;
  switch (type) {
    case 0:
      loadingType = "loading-spinner";
      break;
    case 1:
      loadingType = "loading-dots";
      break;
    case 2:
      loadingType = "loading-bars";
      break;

    default:
      loadingType = "loading-spinner";
      break;
  }
  
  switch (size) {
    case "sm":
      loadingSize = "loading-xs";
      break;
    case "md":
      loadingSize = "loading-md";
      break;
    case "lg":
      loadingSize = "loading-lg";
      break;
    default:
      loadingSize = "loading-xs";
  }
  return <span className={`loading ${loadingType} ${loadingSize}`}></span>;
};
