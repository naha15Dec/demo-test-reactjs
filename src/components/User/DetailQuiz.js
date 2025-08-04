import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../Services/apiServices";
import _ from "lodash";

const DetailQuiz = () => {
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

  return <div className="detail-quiiz-container">DetailQuiz Container</div>;
};

export default DetailQuiz;
