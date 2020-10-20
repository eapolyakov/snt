import React from "react";

export default function Contacts(){
    return <div className="w3layouts-contact-section">
        <div className="container">
            <div className="agileits-contact-main">
                <div className="col-md-6 w3ls-map">
                    <p className="loc">Our Location</p>

                </div>
                <div className="col-md-6 wthree-contact-in">
                    <p className="sed-para"> Contact Information</p>
                    <p className="para1">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <div className="w3-address">
                        <address>
                            <strong>Estate Group<br/></strong>
                            13 browne Street, San Francisco<br/>
                            Co. Estate Group<br/>
                            <p title="Phone">P:</p> <span>+040 123 456 789, +015 89 58 520 520</span><br/>
                        </address>
                        <address>
                            <strong>Email</strong><br/>
                        <a className="mail" href="mailto:mail@example.com">info(at)estategroup.com</a>
                        </address>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="agileinfo-contact-bottom">
                <h3 className="text-center find">Drop Your Message</h3>
                <p className="contactpara1 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry</p>

                <form action="#" method="get">
                    <div className="col-md-6 w3layouts-contact-grid">
                        <p className="your-para">Your Name:</p>
                        <input type="text" placeholder="" name="your name" required=""/>
                        <p className="your-para">Your Mail:</p>
                        <input type="text" placeholder="" name="email" required=""/>
                        <p className="your-para">Phone:</p>
                        <input type="text" placeholder="" name="tel" required=""/>
                        <p className="your-para">Company Name:</p>
                        <input type="text" placeholder="" name="company name" required=""/>
                    </div>
                    <div className="col-md-6 w3layouts-contact-grid">
                        <p className="your-para">Subject:</p>
                        <input type="text" placeholder="" name="sub" required=""/>
                        <p className="your-para">Your Message:</p>
                        <textarea placeholder="" name="Message" required=""></textarea>
                        <div className="send">
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
}