import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ name, startDate, endDate, status }) {
  const statusClass = status === "ongoing" ? styles.ongoing : styles.completed;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{status.toUpperCase()}</h3>
      <dl>
        <dt>Cohort Name</dt>
        <dd>{name}</dd>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>End Date</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
