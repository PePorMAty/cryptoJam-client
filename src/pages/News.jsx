import React, { useState } from "react";
import Container from "../components/Container";
import NewsItem from "../components/News/NewsItem";
import { useGetCryptoNewsQuery } from "../store/api/cryptoNewsApi";
import SearchNewsCoins from "../components/News/SearchNewsCoins";
import s from "../styles/News.module.css";

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const count = 100;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 13,
  });

  if (!cryptoNews?.value) return "Loading...";

  return (
    <div className={s.news}>
      <Container>
        {!simplified && (
          <SearchNewsCoins count={count} setNewsCategory={setNewsCategory} />
        )}
        <div className={s.list}>
          {cryptoNews.value.map((elem) => (
            <NewsItem
              name={elem.name}
              image={elem?.image?.thumbnail?.contentUrl || demoImage}
              description={elem.description}
              url={elem.url}
              avatar={
                elem?.provider[0]?.image?.thumbnail?.contentUrl || demoImage
              }
              date={elem.datePublished}
              providerName={elem.provider[0]?.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default News;
