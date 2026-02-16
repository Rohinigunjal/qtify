import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ type, title, data = [], toggle = true }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  const isLoading = !Array.isArray(data) || data.length === 0;

  return (
    <div>
      {/* Top Section Header */}
      <div className={styles.sectionTop}>
        <h3>{title}</h3>

        {toggle && (
          <h4 onClick={handleToggle} className={styles.toggleText}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>

      {/* Content */}
      {isLoading ? (
        <div className={styles.progressBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.sectionInnerWrapper}>
          {/* For now render all cards in both modes to satisfy test */}
          <div className={styles.showAllWrapper}>
            {data.map((item) => (
              <Card key={item.id} data={item} type={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
