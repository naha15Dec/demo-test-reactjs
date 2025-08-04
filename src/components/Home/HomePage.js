import videoHomePage from "../../assets/video-homepage.mp4";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <h1 className="homepage-title">
          Kiểm tra kiến thức của bạn cùng NahaQuiz!
        </h1>
        <p className="homepage-desc">
          Thử sức với hàng trăm câu hỏi đa dạng về nhiều chủ đề: Công nghệ, Khoa
          học, Lịch sử, Nghệ thuật và hơn thế nữa.
        </p>
        <div className="homepage-btn">
          {!isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Get's started. It's free
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/users");
              }}
            >
              Doing Quiz Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
