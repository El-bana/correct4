import ExamCard from "../../../components/examCard/ExamCard";
import styles from "../Classes.module.css";
import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import bluePlus from "../../../assets/icons/plus-blue.svg";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClassById } from "../../../features/classes";
import CreateExamModal from "../../../components/modals/CreateExamModal";

const Class = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [classData, setClassData] = useState({});

  const [showCreateExamModal, setShowCreateExamModal] = useState(false);

  useEffect(() => {
    dispatch(fetchClassById(params.classId))
      .unwrap()
      .then((res) => {
        setClassData(res.data);
      });
  }, []);

  return (
    <div className="main-grid">
      <div
        className={styles.classes_main_paragraph}
        onClick={() => setShowCreateExamModal(true)}
      >
        <h2>{classData.name}</h2>
        <img src={bluePlus} alt="add class" />
      </div>
      <GridContainer className={styles.card_grid}>
        {classData?.ClassGroup?.map((e) => (
          <GridItem
            gridSize="4"
            className={clsx(
              styles.classes_card_container,
              "halfSizeGridTablet fullSizeGridMobile"
            )}
          >
            <ExamCard exam={e} />
          </GridItem>
        ))}
      </GridContainer>

      <CreateExamModal
        classDetails={classData}
        show={showCreateExamModal}
        handleClose={() => setShowCreateExamModal(false)}
      />
    </div>
  );
};

export default Class;
