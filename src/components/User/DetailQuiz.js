import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../Services/apiServices";

const DetailQuiz = () => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    fecthQuestion();
  }, [quizId]);
  const fecthQuestion = async () => {
    let res = await getDataQuiz(quizId);
    console.log(">>> check quesstion,", res);
  };

  return <div className="detail-quiiz-container">DetailQuiz Container</div>;
};

export default DetailQuiz;
