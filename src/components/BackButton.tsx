
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/useNavigation";

interface BackButtonProps {
  label?: string;
  className?: string;
}

const BackButton = ({ label = "Back", className = "" }: BackButtonProps) => {
  const { goBack } = useNavigation();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={goBack}
      className={`flex items-center gap-2 text-gray-600 hover:text-gray-900 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Button>
  );
};

export default BackButton;
