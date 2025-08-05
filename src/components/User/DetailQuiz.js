import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../Services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import { postSubmitQuiz } from "../../Services/apiServices";
import ModalResult from "./ModalResult";

const DetailQuiz = () => {
  const location = useLocation();

  const params = useParams();
  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  const [isShowModalResult, setIsShowModalResult] = useState(false);
  const [dataModalResult, setDataModalResult] = useState({});

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
            item.answers.isSelected = false;
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
      setDataQuiz(data);
    }
  };

  const handlePrev = () => {
    if (index - 1 < 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) {
      setIndex(index + 1);
    }
  };

  const handleFinishQuiz = async () => {
    console.log(">>> check data before submit", dataQuiz);
    if (dataQuiz && dataQuiz.length > 0) {
      let payload = {
        quizId: +quizId,
        answers: [],
      };
      let answers = [];
      dataQuiz.forEach((question) => {
        let questionId = question.questionId;
        let userAnswerId = [];

        // todo userAnswerId
        question.answers.forEach((a) => {
          if (a.isSelected) {
            userAnswerId.push(a.id);
          }
        });

        answers.push({
          questionId: +questionId,
          userAnswerId: userAnswerId,
        });
      });
      payload.answers = answers;
      // submit data
      let res = await postSubmitQuiz(payload);
      console.log("check ré", res);
      if (res && res.EC === 0) {
        setIsShowModalResult(true);
        setDataModalResult(res.DT);
      } else {
        alert("Somrthing was ướng");
      }
    }
  };

  const HandleCheckboxPa = (answersId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionId === +questionId
    );

    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answersId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {location?.state?.quizTitle}*
        </div>
        <hr />

        <div className="q-content">
          <Question
            HandleCheckboxPa={HandleCheckboxPa}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            index={index}
          />
        </div>

        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handlePrev()}>
            Prev
          </button>
          <button className="btn btn-primary" onClick={() => handleNext()}>
            Next
          </button>

          <button
            className="btn btn-warning"
            onClick={() => handleFinishQuiz()}
          >
            Finish
          </button>
        </div>
      </div>
      <div className="right-content">Count Down</div>
      <ModalResult
        show={isShowModalResult}
        setShow={setIsShowModalResult}
        data={dataModalResult}
      />
      ;
    </div>
  );
};

export default DetailQuiz;
