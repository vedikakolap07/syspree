
import './footer.css'
function Footer() {
    return (

        <div className="footer">

            <div className="footer-left">
                <img
                    className="logo"
                    src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
                    alt="Syspree Logo" width={100}
                />

                <div className="socials">
                    <h3>Socials</h3>

                    <div className="social-icons">
                        <div>
                            <a className=" elementor-social-icon-facebook" href="https://www.facebook.com/Syspree/" target="_blank">
                                <span>Facebook</span>
                            </a>
                            <a className=" elementor-social-icon-facebook" href="https://www.facebook.com/Syspree/" target="_blank">
                                <span> Instagram</span>
                            </a>
                            <a className=" elementor-social-icon-facebook" href="https://www.facebook.com/Syspree/" target="_blank">
                                <span>Linkedin</span>
                            </a>
                            <a className=" elementor-social-icon-facebook" href="https://www.facebook.com/Syspree/" target="_blank">
                                <span>Twiiter</span>
                            </a>
                        </div>
                    </div>

                    <div className="payments">
                        <h3>Payments</h3>

                        <img
                            src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-1.png.webp"
                            alt="Payment Methods"
                        />
                    </div>

                    <img
                        className="award"
                        src="https://threebestrated.in/awards/web_designers-thane-2026-drk.svg"
                        alt="Award" width={100}
                    />
                </div>
                </div>

                <div className="second-row">
                    <a href="">Blogs</a>
                    <a>About Us</a>
                    <a>Careers</a>
                    <a>Contact Us</a>
                    <a>Case Studies</a>
                    <a>Policies</a>
                </div>

                <div className="third-row">
                    <a>Web Design And Development</a>
                    <a>Digital Marketing</a>
                    <a>Artificial Intelligence</a>
                    <a>Information Technology</a>
                    <a>Outsourcing</a>
                </div>

                <div className="fourth-row">

                    <a> E-commerce</a>
                    <a>Technology and SaaS</a>
                    <a>Consulting and Corporate Services</a>
                    <a>Education and Training</a>
                    <a>Healthcare</a>
                    <a>Interior Designers and Renovators</a>
                    <a>Travel and Tourism</a>
                    <a>Hospitality and FnB</a>
                </div>

                <div className="fivth-row">
                    <a> India</a>
                    <a>Singapore
                    </a>
                    <a>Consulting and Corporate Services</a>
                    <a>Education and Training</a>
                    <a>Healthcare</a>
                    <a>Interior Designers and Renovators</a>
                    <a>Travel and Tourism</a>
                    <a>Hospitality and FnB</a>
                </div>

               <hr></hr>
                <p>© 2014 – 2026 · SySpree.Com · All Rights Reserved</p>

            </div>
           
    )
}
            export default Footer;