import animationIcon from "@assets/images/icon-animation.svg";
import businessIcon from "@assets/images/icon-business.svg";
import cryptoIcon from "@assets/images/icon-crypto.svg";
import designIcon from "@assets/images/icon-design.svg";
import photographyIcon from "@assets/images/icon-photography.svg";

const courses = [
  {
    id: 1,
    title: "Animation",
    content:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    Icon: animationIcon,
    link: "Get Started",
  },

  {
    id: 2,
    title: "Design",
    content:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    Icon: designIcon,
    link: "Get Started",
  },

  {
    id: 3,
    title: "Photography",
    content:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    Icon: photographyIcon,
    link: "Get Started",
  },

  {
    id: 4,
    title: "Crypto",
    content:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    Icon: cryptoIcon,
    link: "Get Started",
  },

  {
    id: 5,
    title: "Business",
    content:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    Icon: businessIcon,
    link: "Get Started",
  },
];

export default courses;
