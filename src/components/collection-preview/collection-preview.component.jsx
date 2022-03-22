import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({ title, id, items }) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  return (
    <motion.div className="collection-preview" key={id}>
      <div>
        <h1 className="title" onClick={() => navigate(title.toLowerCase())}>
          {title}
        </h1>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="preview"
        style={{ display: "flex" }}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CollectionPreview;
