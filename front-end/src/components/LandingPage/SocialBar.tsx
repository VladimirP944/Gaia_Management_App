import styled from "styled-components";
// @ts-ignore
import IconTwitter from "../../images/icon-twitter.svg"
// @ts-ignore
import IconYouTube from "../../images/icon-youtube.svg"


const SOCIAL_ICONS = [ IconYouTube, IconTwitter ]

const SocialBar = () => {

    return (
        <GradientSideBar>
            <div/>
            {SOCIAL_ICONS.map((icon : any, i : number) =>
                <img src={icon} alt="Twitter" key={i} />)}
        </GradientSideBar>
    )
}

const GradientSideBar = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  //@media (max-width: 1024px) {
  //  display: none;
  //}

  div {
    width: 2px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #6CC173 100%
    );
  }
`;

export default SocialBar;
