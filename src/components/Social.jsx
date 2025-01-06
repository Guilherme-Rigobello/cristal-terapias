// SOCIAL MEDIA LINK
const SocialLink = ({ href, icon: Icon, className }) => {
  return (
    <a
      href={href}
      target='_blanck'
      className={`p-2.5 border-[1px] border-solid border-customRGB flex items-center justify-center hover:translate-y-[-7px] duration-300  text-teal-600 text-2xl rounded-full ${className}`}
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
