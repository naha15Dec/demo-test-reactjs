import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      {data.image && (
        <div className="q-img">
          <img
            src={
              data && data.image ? `data:image/png;base64,${data.image}` : ""
            }
            alt="..."
          ></img>
        </div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDecription} ?
      </div>
      <div className="answers">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((item, index) => {
            return (
              <>
                <div key={`answers-${index}`} class="form-check a-child">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label">{item.description}</label>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Question;
