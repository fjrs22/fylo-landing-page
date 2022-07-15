import satishImage from "../assets/images/profile-1.jpg";
import bruzeImage from "../assets/images/profile-2.jpg";
import ivaImage from "../assets/images/profile-3.jpg";
export default function Testimonials() {
  const profileData = [
    {
      img: satishImage,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      id: 1,
    },
    {
      img: satishImage,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      id: 2,
    },
    {
      img: satishImage,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      id: 3,
    },
  ];
  return (
    <section className="testimonial">
      <div className="testimonial-container container">
        {profileData.map((profile) => {
          return (
            <article className="testimonial-card" key={profile.id}>
              <p className="testimonial-text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="testimonial-profile">
                <img src={profile.img} alt={profile.name} />
                <div className="profile-name">
                  <h5>{profile.name}</h5>
                  <p>{profile.position}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
