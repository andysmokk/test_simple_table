import { Loader } from "lucide-react";

const LoaderSpinner = ({ size }) => {
  return <Loader className="animate-spin text-orange-1" size={size} />;
};

export default LoaderSpinner;
