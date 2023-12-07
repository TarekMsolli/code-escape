import React, { useEffect } from "react";

const DisableArrowScroll: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.startsWith("Arrow") || e.key.startsWith("Space")) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default DisableArrowScroll;
