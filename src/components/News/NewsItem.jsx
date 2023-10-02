import React from "react";
import s from "../../styles/News.module.css";
import moment from "moment/moment";

const NewsItem = ({
  image,
  name,
  description,
  url,
  avatar,
  date,
  providerName,
}) => {
  return (
    <a href={url} rel="noreferrer" target="_blank" className={s.newsItem}>
      <div className={s.wrapper}>
        <h3 className={s.title}>{name}</h3>
        <img className={s.img} src={image} alt="" />
      </div>
      <p className={s.desc}>
        {description > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </p>
      <div className={s.providerContainer}>
        <div className={s.provider}>
          <img src={avatar} alt="provider avatar" className={s.avatar} />
          <p className={s.providerName}>{providerName}</p>
        </div>
        <p className={s.datePublished}>
          {moment(date).startOf("ss").fromNow()}
        </p>
      </div>
    </a>
  );
};

export default NewsItem;
