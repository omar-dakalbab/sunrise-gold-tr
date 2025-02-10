import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Select } from "antd";
import { t } from "i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  const changeLanguage = (event) => {
    const lang = event;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = selectedLanguage; // Apply to <html>
    console.log(document.documentElement.lang);
  }, [selectedLanguage]);

  // console.log(document.documentElement.lang);

  const languages = [
    {
      code: "en",
      label: (
        <>
          <span className="fi fi-us fis"></span> {t("en")}
        </>
      ),
    },
    {
      code: "tr",
      label: (
        <>
          <span className="fi fi-tr fis"></span> {t("tr")}
        </>
      ),
    },
    {
      code: "ar",
      label: (
        <>
          <span className="fi fi-sa fis"></span> {t("ar")}
        </>
      ),
    },
  ];

  return (
    <Select
      defaultValue={selectedLanguage}
      style={{ width: 120, color: "#000", backgroundColor: "transparent" }}
      onChange={changeLanguage}
      value={selectedLanguage}
    >
      {languages.map((lang) => (
        <Select.Option
          key={lang.code}
          value={lang.code}
          selected={lang.code === selectedLanguage}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
