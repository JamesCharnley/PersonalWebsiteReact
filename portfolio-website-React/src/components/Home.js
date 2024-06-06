import Button from './Button';
import NavLinks from "./NavLinks";
import ProfilePicture from "./ProfilePicture";
import homeStyles from "./Home.module.css";

export default function Home() {
  //"home-container no-margin transform-center-vertical"
  return (
    <div className={`${homeStyles.home_container} ${homeStyles.no_margin} ${homeStyles.transform_center_vertical}`}>
      <div className={homeStyles.text_center}>
        <ProfilePicture imageUrl={"assets/ProfilePic.jpg"} />
      </div>
      <h1 className={`${homeStyles.main_title} ${homeStyles.center} ${homeStyles.text_center} ${homeStyles.no_margin} ${homeStyles.text_ghost_white}`}>
        James Charnley
      </h1>
      <h2 className={`${homeStyles.secondary_title} ${homeStyles.center} ${homeStyles.text_center} ${homeStyles.no_margin} ${homeStyles.text_ghost_white}`}>
        Programmer
      </h2>
      <div style={{ height: "60px" }}>
        <NavLinks
          links={[
            { href: "https://github.com/JamesCharnley", text: "GitHub" },
            {
              href: "https://www.linkedin.com/in/james-charnley-6b3486193/",
              text: "LinkedIn",
            },
            {
              href: "https://jamescharnley.itch.io/",
              text: "Itch.io",
            },
          ]}
          color={"ghostwhite"}
        />
      </div>
      <Button>Projects</Button>
    </div>
  );
}
