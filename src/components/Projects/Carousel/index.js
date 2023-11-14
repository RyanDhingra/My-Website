import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css"
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import inventoryImg from "../../../assets/projectsMedia/inventoryImg.png"
import tankWarsImg from "../../../assets/projectsMedia/tankWarsImg.png"
import gamerfitImg from "../../../assets/projectsMedia/gamerfitImg.png"
import instaImg from "../../../assets/projectsMedia/instaImg.png"
import bookingImg from "../../../assets/projectsMedia/bookingImg.png"
import arracketsImg from "../../../assets/projectsMedia/arracketsImg.png"
import emersedImg from "../../../assets/projectsMedia/emersedImg.png"
import clubsoftwareImg from "../../../assets/projectsMedia/clubSoftwareImg.png"
import barbershopImg from "../../../assets/projectsMedia/barbershopImg.png"
import tennotraderImg from "../../../assets/projectsMedia/tennotraderImg.jpg"
import web from "../../../assets/projectsMedia/web.png"

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
           delay: 2500,
           disableOnInteraction: true,
           pauseOnMouseEnter: true,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >

      <SwiperSlide>
          <a href="https://ar-rackets.vercel.app" target="_blank" rel="noreferrer">
            <img className="github-link" src={web} alt="Github"/>
          </a>
          <img className="image" src={arracketsImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">AR Rackets</h1>
            <p1 className="projectDesc">AR Rackets is a React-based website, powered by a Flask Python backend and CockroachDB. Specializing in badminton racket restringing and servicing, it also offers a diverse selection of new and used rackets available for customers to purchase.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={clubsoftwareImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">Club Management Desktop App</h1>
            <p1 className="projectDesc">This management software is a sleek desktop app, powered by Electron JS, designed for sports club owners. It simplifies court management, reservations, and scheduling. The app also offers customers a live display of current bookings for added transparency and convenience.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/E-Mersed" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={emersedImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">E-Mersed 3D Ecommerce Site</h1>
            <p1 className="projectDesc">E-Mersed is an innovative gaming equipment ecommerce site, featuring a unique Virtual Setup Designer (VSD). Developed with React Three Fiber, the VSD is a cutting-edge 3D modeling software on the web that empowers users to customize their gaming setups in a dynamic and immersive 3D environment.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/TennoTrader-App" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={tennotraderImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">TennoTrader Mobile Application</h1>
            <p1 className="projectDesc">TennoTrader is a mobile IOS app for Warframe players, offering seamless tracking of buy and sell orders from warframe.market. With a user-friendly watchlist, users can monitor up to 5 items, receiving mobile notifications when prices hit their specified thresholds. TennoTrader enhances the trading experience for Warframe enthusiasts.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Barbershop-Booking-Site" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={barbershopImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">Barbershop Scheduler Website</h1>
            <p1 className="projectDesc">The Barbershop Booking Site simplifies haircut appointments by allowing users to effortlessly book slots with their preferred barbers. The platform also features a captivating gallery showcasing the artistic works of the barbers.</p1>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Product-Inventory-Software" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={inventoryImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">Inventory Tracking Software</h1>
            <p1 className="projectDesc">Inventory software created with Javay Swing. Allows for adding and deleting products, inventory search, as well as price, size and quantity updates. Also lets you have images for items and displays them in a nice viewable format along with all product details.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Tank-Wars" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={tankWarsImg} alt="txt"/>
          <div className="content">
            <h1 className="projectName">Tank Wars</h1>
            <p1 className="projectDesc">Multiplayer 2D game made in Python with Pygame and Tkinter. Consists of four completely unique maps to choose from. On each map, players will find unique power-ups which they can use to their advantage in order to dominate the competition.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Discord-Bot" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={gamerfitImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">GamerFit</h1>
            <p1 className="projectDesc">Discord bot designed for people/gamers who have prolonged screen time. Allows the user to set activity goals, as well as set reminders to take a breaks. Random exercises are also included for each of the reminders. The bot also implements a motivationl quote API to give the user some workout motivation on demand.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Instagram-Follower-Tracker" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={instaImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">Instagram Follower Tracker</h1>
            <p1 className="projectDesc">Web scraping program designed using Selenium in python. Using the user's instagram login information, the program is able generate a following and followers list. It then uses these lists to compare the usernames. Another txt file is then generated containing a list of usernames that don't follow the user back.</p1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/RyanDhingra/Sports-Facility-Booking-and-Scheduling-Software" target="_blank" rel="noreferrer">
            <img className="github-link" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
          </a>
          <img className="image" src={bookingImg} alt="txt" />
          <div className="content">
            <h1 className="projectName">Court Booking Software</h1>
            <p1 className="projectDesc">Booking software created for sports facilities that have rental courts for sports like badminton or tennis. This software includes a live costumer display that automatcally updates to show hourly bookings. This program also allows you to create daily, weekly, and bi-weekly bookings.</p1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
