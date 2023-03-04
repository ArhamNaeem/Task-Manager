import { useState } from "react";

export const usehandlePopUp = () => {
     
  const [showPopup, setShowPopup] = useState(false);
    
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return { handleClosePopup, handleOpenPopup, showPopup }
}