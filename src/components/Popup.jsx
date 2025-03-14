import React from "react";
import "../styles/Popup.css";

const Popup = ({ item, onClose }) => {
  return item ? (
    <div className="popup" onClick={onClose}>
      <div className="popup-inner flex flex-row align-center justify-center gap-1">
        <div className="flex flex-col align-center justify-center gap-1">
          <img
            className="popup-img"
            src={item.images["Poster Art"].url}
            alt={item.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/220x300/444444/FFFFFF?text=Not+Available";
            }}
          />
          <span>{item.title}</span>
        </div>
        <p>{item.description}</p>
        <button className="close-btn" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
