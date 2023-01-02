import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";
import styles from "./Classes.module.css";
import bluePlus from "../../assets/icons/plus-blue.svg";
import ClassCard from "../../components/classCard/ClassCard";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserClasses } from "../../features/classes";
import CreateClassModal from "../../components/modals/CreateClassModal";

const Classes = () => {
  const dispatch = useDispatch();

  const [classes, setClasses] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUserClasses())
      .unwrap()
      .then((res) => {
        setClasses(res.data);
      });
  }, []);

  return (
    <div className="main-grid">
      <div
        className={styles.classes_main_paragraph}
        onClick={() => setShowCreateModal(true)}
      >
        <h2>
          Your <span>Classes</span>
        </h2>
        <img src={bluePlus} alt="add class" />
      </div>
      <GridContainer className={styles.card_grid}>
        {classes?.map((c) => (
          <GridItem
            key={c.id}
            gridSize="4"
            className={clsx(
              styles.classes_card_container,
              "halfSizeGridTablet fullSizeGridMobile"
            )}
          >
            <ClassCard classDetails={c} />
          </GridItem>
        ))}
      </GridContainer>
      <CreateClassModal
        show={showCreateModal}
        handleClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default Classes;
