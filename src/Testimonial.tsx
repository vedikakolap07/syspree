import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
  {
    id: 2,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
  {
    id: 3,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
  
];

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">OUR CLIENTS SPEAK FOR US</h2>

      <div className="testimonial-slider">

        <button className="arrow left">&#10094;</button>

        <div className="cards">

          {testimonials.map((item, index) => (
            <div
              className={`card ${
                index === 0
                  ? "left-card"
                  : index === 2
                  ? "right-card"
                  : "center-card"
              }`}
              key={item.id}
            >
              <img src={item.image} alt="" />
            </div>
          ))}

        </div>

        <button className="arrow right">&#10095;</button>

      </div>
    </section>
  );
}