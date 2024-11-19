import React, { useEffect } from "react";

const LanguageSelector = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    // Attach script to the body
    document.body.appendChild(script);

    // Initialize function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Cleanup
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  return <div id="google_translate_element" style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }} />;
};

export default LanguageSelector;

