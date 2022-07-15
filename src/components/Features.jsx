import accesIcon from "../assets/images/icon-access-anywhere.svg";
import securityIcon from "../assets/images/icon-security.svg";
import collabIcon from "../assets/images/icon-collaboration.svg";
import fileIcon from "../assets/images/icon-any-file.svg";
export default function Features() {
  const featuresData = [
    {
      icon: accesIcon,
      header: "Acces your files, anywhere",
      description:
        "The ability to use smartphone, table, or computer to access your account means your files to follow you everywhere",
      id: 1,
    },
    {
      icon: securityIcon,
      header: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      id: 2,
    },
    {
      icon: collabIcon,
      header: "Realtime-colllaboration",
      description:
        "Securely share files and  folders with friends, family, and colleagues for live collaboration. No email attachments requires.",
      id: 3,
    },
    {
      icon: fileIcon,
      header: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      id: 4,
    },
  ];
  return (
    <section className="features">
      <div className="features-container container">
        {featuresData.map((feature) => {
          return (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.header} />
              </div>
              <div className="feature-header">
                <h3>{feature.header}</h3>
              </div>
              <div className="feature-description">
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
