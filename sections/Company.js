import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Company = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT QODEXCORE" /> <br />
            <br />
            <Title title="Innovation in Business" className="title-bg" />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="The Future of Software, Today." />
              <p className="desc-p">
                We're not just another software agency; we're architects of
                digital experiences. We're the team you turn to when you need
                more than just code – you need a partner who understands your
                vision and can bring it to life with cutting-edge technology.
                From crafting elegant web and mobile applications to harnessing
                the power of AI and integrating seamless payment solutions,
                we're passionate about building solutions that not only meet but
                exceed your expectations. We're driven by innovation and fueled
                by a commitment to delivering exceptional results.
              </p>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Our mission in 2025 is to be the leading provider of innovative,
                AI-powered software solutions in Ghana, seamlessly integrating
                secure payment technologies like Paystack and Hubtel to fuel growth and
                transform digital experiences for our clients in commence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Company;
