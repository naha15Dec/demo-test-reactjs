import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
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
          <button>Làm Quiz ngayyy!</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
