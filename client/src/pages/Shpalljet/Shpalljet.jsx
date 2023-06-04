import React from "react";
import { useState,useEffect } from "react";

const Shpalljet = () => {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="pre-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return <div>Shpalljet</div>;
};

export default Shpalljet;
