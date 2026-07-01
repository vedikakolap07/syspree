import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <h2 className="about-title">About Syspree:</h2>

          <h1 className="about-heading">
            <span>Powerhouse</span> of Digital Success
          </h1>

          <div className="about-item">
            <p>At Syspree, we don’t just create digital strategies—we engineer business growth. As a powerhouse of digital success, we specialize in high-impact digital marketing, web development, and AI-driven marketing solutions designed to drive revenue, amplify brand presence, and maximize ROI.

Our expertise spans across SEO, social media marketing, performance marketing, website design & development, branding, and AI-powered automation. We don’t believe in one-size-fits-all approaches. Every campaign, website, and strategy is built with precision—tailored to your industry, your audience, and your business goals.</p>
            <h3>Data-Driven Execution</h3>
            <p>
              We use real-time insights to optimize every touchpoint for maximum
              conversions.
            </p>
          </div>

          <div className="about-item">
            <h3>10 Years of Excellence - </h3>
            <p>
              Over a decade of experience helping businesses scale profitably
              across the UAE, Middle East, Australia, India, UK, and US.
            </p>
          </div>

          <div className="about-item">
            <h3>$3M+ in Digital Services Sold - </h3>
            <p>
              Led by industry veterans, we've driven measurable success for
              businesses of all sizes.
            </p>
          </div>

          <div className="about-item">
            <h3>Our Team : </h3>
            <p>
              Digital growth architects dedicated to creating strategies that
              deliver exceptional ROI.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src="https://syspree.com/wp-content/uploads/2024/10/Core-Framework-01-2-768x768.png" alt="About" />
        </div>
      </div>
       <button>Limited Time Offer</button>
    </section>
  );
};

export default About;