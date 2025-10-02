import backlistIcon from "/src/assets/images/icon-blacklist.svg";
import textIcon from "/src/assets/images/icon-text.svg";
import previewIcon from "/src/assets/images/icon-preview.svg";
import googleLogo from "./src/assets/images/logo-google.png";
import ibmLogo from "./src/assets/images/logo-ibm.png";
import microsoftLogo from "./src/assets/images/logo-microsoft.png";
import hpLogo from "./src/assets/images/logo-hp.png";
import vectorGraphicsLogo from "./src/assets/images/logo-vector-graphics.png";
import facebookIcon from "./src/assets/images/icon-facebook.svg";
import instagramIcon from "./src/assets/images/icon-instagram.svg";
import twitterIcon from "./src/assets/images/icon-twitter.svg";

const features = [
  {
    id: 1,
    title: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },

  {
    id: 2,
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },

  {
    id: 3,
    title: "Complete History",
    description:
      " Retrieve any snippets from the first moment you started using the app.",
  },
];

const intergrations = [
  {
    id: 1,
    icon: backlistIcon,
    title: "Create Backlists",
    description:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },

  {
    id: 2,
    icon: textIcon,
    title: "Plain test snippets",
    description:
      "Remove unwanted formatting from copied text for a consistent look.",
  },

  {
    id: 3,
    icon: previewIcon,
    title: "Sneak Preview",
    description:
      "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const brandLogos = [
  {
    id: 1,
    icon: googleLogo,
    alt: "Google brand logo",
  },

  {
    id: 2,
    icon: ibmLogo,
    alt: "IBM brand logo",
  },

  {
    id: 3,
    icon: microsoftLogo,
    alt: "Microsoft brand logo",
  },

  {
    id: 4,
    icon: hpLogo,
    alt: "Hewlet Packard brand logo",
  },

  {
    id: 5,
    icon: vectorGraphicsLogo,
    alt: "Vector graphics brand logo",
  },
];

const footerLinks = [
  {
    id: 1,
    link: "FAQs",
  },

  {
    id: 2,
    link: "Contact Us",
  },

  {
    id: 3,
    link: "Privacy Policy",
  },

  {
    id: 4,
    link: "Press Kit",
  },

  {
    id: 5,
    link: "Install Guide",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: facebookIcon,
  },

  {
    id: 2,
    icon: twitterIcon,
  },

  {
    id: 3,
    icon: instagramIcon,
  },
];

export { features, intergrations, brandLogos, footerLinks, socialLinks };
