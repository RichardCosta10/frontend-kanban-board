import React from "react";
import classes from "./card.module.css";

type CardProps = {
  title: string;
  bodyText?: string;
  projectName?: string;
  ageInDays?: number;
};

export default function Card({ title, bodyText }: CardProps) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.title}>{title}</div>
        <div className={classes.bodyText}>{bodyText}</div>
      </div>
    </>
  );
}
