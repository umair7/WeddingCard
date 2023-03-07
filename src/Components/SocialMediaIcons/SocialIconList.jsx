import React from "react";

const SocialIcon = ({ platform, iconClass }) => {
  return (
    <li className="social-icon-item">
      <a href="#" className={`social-icon-link bi-${iconClass}`}></a>
    </li>
  );
};

const SocialIconList = () => {
  const socialIcons = [
    { platform: "Facebook", iconClass: "facebook" },
    { platform: "Twitter", iconClass: "twitter" },
    { platform: "Instagram", iconClass: "instagram" },
    { platform: "WhatsApp", iconClass: "whatsapp" },
  ];

  return (
    <div className="social-icon-wrap mt-auto">
      <ul className="social-icon ms-auto">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} platform={icon.platform} iconClass={icon.iconClass} />
        ))}
      </ul>
    </div>
  );
};

export default SocialIconList;
