// src/pages/Home.jsx
import React from "react";
import WorldMap from "../components/WorldMap"; //세계지도 컴포넌트
import SearchBar from "../components/SearchBar"; //검색바
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__hero" role="region" aria-label="국가 검색 및 환율 변환">
        <div className="home__search">
          <div className="home__search-inner">
            <SearchBar variant="inline" />
          </div>
        </div>
         {/*환율 페이지 이동*/}
        <Link className="home__cta" to="/exchange"> 
          환율 변환기
        </Link>
      </div>

      <WorldMap />
    </div>
  );
}

