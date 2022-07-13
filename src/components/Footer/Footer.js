import Logo from "../Logo/Logo";
import SocialLinks from "../SocialIcons/SocialLinks";
import Wrapper from "../Wrapper/Wrapper";
import Nav from "../Nav/Nav";
import footer from "./footer.module.scss";
import FooterMenu from "./FooterMenu";
import Container from "../Container/Container";

const accountLinks = [
  {
    id: "signIn__101",
    link: "Sign In",
    to: "/sign-in",
  },

  {
    id: "register__101",
    link: "Register",
    to: "/register",
  },

  {
    id: "order__sttatus__101",
    link: "Order Status",
    to: "/order-status",
  },
];

const aboutUsLinks = [
  {
    id: "ourStory__101",
    link: "Our Story",
    to: "/our-story",
  },

  {
    id: "Careers__101",
    link: "Careers",
    to: "/careers",
  },
];

const helpLinks = [
  {
    id: "contactUs__101",
    link: "Contact Us",
    to: "/contact-us",
  },

  {
    id: "orderStatus__101",
    link: "Order Status",
    to: "/order status",
  },

  {
    id: "returns__101",
    link: "Returns",
    to: "/returns",
  },
];

const extraLinks = [
  {
    id: "TermsofUse__101",
    link: "Terms of Use",
    to: "/terms",
  },
  {
    id: "PrivacyPolicy__101",
    link: "Privacy Policy",
    to: "/privacy",
  },
];

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.footer__top}>
        <Container>
          <div className="aem-Grid aem-Grid--12">
            <Wrapper phone="12" tablet="6" desktop="3">
              <FooterMenu
                heading="Account"
                links={accountLinks}
                label="accountMenuLabel"
                labelContent="accountMenu"
              />
            </Wrapper>

            <Wrapper phone="12" tablet="6" desktop="3">
              <FooterMenu
                heading="About Us"
                links={aboutUsLinks}
                label="aboutMenuLabel"
                labelContent="aboutMenu"
              />
            </Wrapper>

            <Wrapper phone="12" tablet="6" desktop="3">
              <FooterMenu
                heading="Help"
                links={helpLinks}
                label="helpMenuLabel"
                labelContent="helpMenu"
              />
            </Wrapper>

            <Wrapper phone="12" tablet="6" desktop="3">
              <div className="menu">
                <h4 className="menu__heading">Follow Us!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <SocialLinks />
              </div>
            </Wrapper>
          </div>
        </Container>
      </div>

      <div className={footer.footer__bottom}>
        <Container>
          <div className="aem-Grid aem-Grid--12">
            <Wrapper phone="12" tablet="12" desktop="2">
              <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                <Logo />
              </div>
            </Wrapper>

            <Wrapper phone="12" tablet="12" desktop="8">
              <address>
                <span>© Company Name</span>
                <span> Address Ave,</span>
                <span>City Name,</span>
                <span>State ZIP</span>
              </address>
            </Wrapper>

            <Wrapper phone="12" tablet="12" desktop="2">
              <FooterMenu
                links={extraLinks}
                label="helpMenuLabel"
                labelContent="helpMenu"
                hideHeading="true"
                direction="row"
              />
            </Wrapper>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
