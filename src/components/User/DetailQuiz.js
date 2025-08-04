import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../Services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import { useLocation } from "react-router-dom";

const DetailQuiz = () => {
  const location = useLocation();

  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    fecthQuestion();
  }, [quizId]);
  const fecthQuestion = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDecription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDecription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });
          return {
            questionId: key,
            answers: answers,
            image: image,
            questionDecription: questionDecription,
          };
        })
        .value();
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-img">
          <img /*src={`data:image/png;base64,${data.image}`} alt="..."*/></img>
        </div>
        <div className="q-content">
          <div className="question"> Question 1: How are you doing?</div>
          <div className="answers">
            <div className="a-child">A.</div>
            <div className="a-child">B.</div>
            <div className="a-child">C.</div>
            <div className="a-child">D.</div>
          </div>
        </div>

        <div className="footer">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
      <div className="right-content">Count Down</div>
    </div>
  );
};

export default DetailQuiz;
