import _ from "lodash";
const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }

  const HandleCheckbox = (e, aId, qId) => {
    props.HandleCheckboxPa(aId, qId);
  };
  return (
    <>
      {data.image ? (
        <div className="q-img">
          <img
            src={
              data && data.image ? `data:image/png;base64,${data.image}` : ""
            }
            alt="..."
          ></img>
        </div>
      ) : (
        <div className="q-img"></div>
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
                <div key={`a-${index}`} className="a-child">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={item.isSelected}
                      onChange={(e) =>
                        HandleCheckbox(e, item.id, data.questionId)
                      }
                    />
                    <label className="form-check-label">
                      {item.description}
                    </label>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Question;

/*

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>*/
