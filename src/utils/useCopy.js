import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useCopy() {
  const { t } = useTranslation();
  const basePath = "copy.";
  const [copyText, setCopySuccess] = useState(t(basePath + "copy"));

  const copyToClipboard = (e) => {
    let target;
    if (e.currentTarget.dataset.value) {
      target = document.getElementById(`copy-input-${e.currentTarget.dataset.value}`);
    } else if (e.currentTarget.value) {
      target = e.currentTarget;
    }

    if (target) {
      target.select();
      document.execCommand("copy");
      e.target.focus();

      setCopySuccess(t(basePath + "success"));
      setTimeout(() => {
        setCopySuccess(t(basePath + "copy"));
      }, 3000);
    }
  };

  return {
    copyToClipboard,
    copyText,
  };
}
