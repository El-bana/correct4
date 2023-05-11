import styles from "../Classes.module.css";
import blueUpload from "../../../assets/icons/upload-blue.svg";
import AddCard from "../../../components/addCard/AddCard";
import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  correctMCQPapers,
  fetchExamById,
  generateCSV,
  setModelAnswer,
} from "../../../features/exames";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import PapersList from "../../../components/papersList/PapersList";
import { useLocation } from "react-router-dom";

const Exam = () => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const [exam, setExam] = useState();
  const [papers, setPapers] = useState([]);
  const [papersToCorrect, setPapersToCorrect] = useState([]);
  const [didExecuteOperations, setDidExecuteOperations] = useState(false);

  const modelAnswerInputRef = useRef(null);
  const papersInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchExamById(params.examId))
      .unwrap()
      .then((res) => {
        console.log("exam", res.data);
        setExam(res.data);
        setPapers(res.data.Papers);
      });
  }, []);

  useEffect(() => {
    if (!exam || didExecuteOperations) return;

    const { state } = location;

    if (!state?.operation) return;

    if (state.operation === "SET_MODEL_ANSWER") {
      modelAnswerInputRef?.current?.click();
    } else if (state.operation === "UPLOAD_MCQ_PAPERS") {
      papersInputRef?.current?.click();
    }

    setDidExecuteOperations(true);
  }, [exam, location]);

  const handleUploadModelAnswer = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    dispatch(setModelAnswer({ id: exam.id, file }))
      .unwrap()
      .then((res) => {
        setExam(res.data);
        console.log("updated exam", res);
      });
  };

  const handleUploadMCQPapers = (e) => {
    const fileList = papersToCorrect;

    if (!fileList || Object.keys(fileList).length === 0) return;

    dispatch(correctMCQPapers({ id: exam.id, fileList }))
      .unwrap()
      .then((res) => {
        setPapers(res.data);

        setPapersToCorrect([]);

        console.log("papers", res);
      });
  };

  const handleGenerateCSVReport = async () => {
    dispatch(
      generateCSV({
        examId: exam.id,
      })
    )
      .unwrap()
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "report.csv"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
  };
  return (
    <>
      <div className="main-grid">
        <div className={styles.classes_main_paragraph}>
          <h2>
            {exam?.Class?.name} - <span>{exam?.name}</span>
          </h2>
        </div>
        {/* TODO: Add export as excel sheet */}
        {/* <div className={styles.exam_excel_upload}>
          <p>Excel Sheet</p>
          <img src={blueUpload} alt="upload excel sheet" />
        </div> */}
        <GridContainer className={styles.card_grid}>
          <GridItem
            gridSize={exam?.model_answer ? "6" : "12"}
            className={clsx(
              styles.classes_card_container,
              "fullSizeGridMobile"
            )}
          >
            <AddCard
              onClick={() => modelAnswerInputRef?.current?.click()}
              toUpload="Add Model Answer"
            />
            <input
              type="file"
              ref={modelAnswerInputRef}
              style={{ display: "none" }}
              max={1}
              onChange={handleUploadModelAnswer}
              accept="image/png, image/jpeg, image/jpg"
            />
          </GridItem>
          {exam?.model_answer && (
            <GridItem
              gridSize="6"
              className={clsx(
                styles.classes_card_container,
                "fullSizeGridMobile"
              )}
            >
              <AddCard
                onClick={() => papersInputRef?.current?.click()}
                toUpload="Add MCQ Papers"
              />
              <input
                type="file"
                ref={papersInputRef}
                style={{ display: "none" }}
                max={100}
                onChange={(e) => setPapersToCorrect(e.target.files)}
                accept="image/png, image/jpeg, image/jpg"
                multiple={true}
              />
            </GridItem>
          )}

          <GridItem
            gridSize="12"
            className={clsx(
              styles.classes_card_container,
              "fullSizeGridMobile"
            )}
          >
            <AddCard
              onClick={handleGenerateCSVReport}
              toUpload="Generate CSV Report"
            />
          </GridItem>

          <GridItem
            gridSize="12"
            className={clsx(
              styles.classes_card_container,
              "fullSizeGridMobile"
            )}
          >
            <div
              className={styles.start_button}
              onClick={handleUploadMCQPapers}
            >
              Start
            </div>
          </GridItem>

          {/* Papers List */}
          <GridItem
            gridSize="12"
            className={clsx(
              styles.classes_card_container,
              "fullSizeGridMobile"
            )}
          >
            <PapersList papers={papers} />
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default Exam;
