import Image from "next/image";
import logo from "public/roice-logo.png";
import mail from "public/envelope.svg";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import SocialLink from "./social-link";
import RoiceText from "../roice";

function Footer() {
  return (
    <div className="backdrop-blur-sm py-8 border-t">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex justify-center items-center">
          <RoiceText className="px-4" />
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <SocialLink
          link="https://www.linkedin.com/in/johnroicealdeza"
          imageSrc={linkedin}
          altText="linkedIn"
        />
        <SocialLink
          link="https://www.github.com/roiceee"
          imageSrc={github}
          altText="github"
        />
        <SocialLink
          link="mailto:jroicealdeza@gmail.com"
          imageSrc={mail}
          altText="mail"
        />
      </div>
      <div
        className="my-4 mx-auto bg-base-100"
        style={{ width: "85%", height: "1px" }}
      />
      <div className="text-center text-sm">© John Roice Aldeza</div>
    </div>
  );
}

export default Footer;
