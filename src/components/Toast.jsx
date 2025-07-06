import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon";

const Toast = ({
  isVisible = false,
  type = "success",
  title = "title",
  description = "description",
  onClose,
  duration = 5000,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Small delay to ensure element is rendered before animation
      setTimeout(() => setIsAnimating(true), 10);

      // Auto-close after duration
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      handleClose();
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShouldRender(false);
      onClose?.();
    }, 300); // Match animation duration
  };

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`
        fixed top-4 right-4 z-50
        transform transition-all duration-300 ease-in-out
        ${
          isAnimating
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }
      `}
    >
      <div
        style={{
          boxShadow:
            "0px 20px 24px -4px rgba(116, 116, 121, 0.08), 0px 8px 8px -4px rgba(116, 116, 121, 0.03)",
        }}
        className="max-w-[400px] w-fit min-h-[96px] rounded-3xl p-4 gap-4 items-center justify-between flex bg-black"
      >
        {type === "success" && <Icon.ToastSuccessIcon />}
        {type === "error" && <Icon.ToastErrorIcon />}
        <div className="flex flex-col max-w-[256px] justify-center min-h-16">
          <p className="font-gs text-sm font-semibold text-fluentWhite">
            {title}
          </p>
          <p className="font-gs text-sm font-normal text-[#828282]">
            {description}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex items-center justify-center w-9 h-9"
        >
          <Icon.CancelIcon />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
