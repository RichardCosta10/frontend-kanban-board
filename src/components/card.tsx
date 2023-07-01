import React from "react";
import { useState } from "react";

type CardProps = { title: string };

export default function Card({ card }) {
  return (
    <>
      <div className="card">{card.title}</div>
    </>
  );
}
