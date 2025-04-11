import Image from "next/image";

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url}>
        <Image src={icon} alt={title} width={24} height={24} /> {title}
      </a>
    </li>
  );
};

export default SocialMediaItem;
