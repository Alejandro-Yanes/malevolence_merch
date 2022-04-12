import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MenuItem = ({ title, imageUrl, size, linkUrl, delay }) => {
  let navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.3 }}
      className={`menu-item ${size}`}
      onClick={() => navigate(linkUrl.toLowerCase())}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </motion.div>
  );
};

export default MenuItem;
