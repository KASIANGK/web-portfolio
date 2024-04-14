import React from 'react';

function LanguageDropdown({ languages, selectedLanguage, onLanguageChange }) {
  return (
    <div className="language-dropdown">
      <select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageDropdown;
