import avatar from './avatar.jpg';
import './About.css';

const About = () => {
    return(
        <section className="about-section">
            <h2>About</h2>
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum maximus neque vitae finibus.<br/> Nulla facilisi. Nulla ultricies ex ex, non consectetur enim pulvinar sit amet.<br/> Sed mattis condimentum arcu, a vulputate eros finibus vel. Aliquam erat volutpat.<br/> Ut blandit nec purus nec auctor.<br/> Aenean malesuada sem elit, non interdum neque viverra in.</p>
            </div>
            
            <ul className="about-nav">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>

            <img src={avatar} alt="User Avatar" />
        </section>
    );
}
export default About;