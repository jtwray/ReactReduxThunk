import React from "react";
import { KnowledgeBomb } from "./KnowledgeBomb";
import yeezy from "../images/kanyeSnippitNewYearsShades.PNG";
import { connect } from "react-redux";
import { fetchKanyeQuote } from "../actions/index";
import { useImageAPI } from "../hooks/useImageAPI";
import "../App.css";

const img1 = yeezy;
const img2 = `https://image.tmdb.org/t/p/original/aiLF9OBQ7LcglmAg0pXjyonGwye.jpg`;

const Quote = ({ quote, error, isLoading, fetchKanyeQuote, isCartoon }) => {
  const [kanyeImg, kanyeImgAlt] = useImageAPI(`kanye west`);
  return (
    <>
      {error && (<div>{error}</div>)({ isLoading }) ? (
        <div>...its Comin`</div>
      ) : (
        <div className="quoteContainer grid">
          {" "}
           <div className="button--container">
            <button onClick={() => fetchKanyeQuote()}>
              drop a knowledge bomb <hr /> 💣
            </button>
          </div> 
          {/* <div onClick={() => fetchKanyeQuote()}>
            <KnowledgeBomb />
          </div> */}
          <div className="imageblock">
            <img
              src={isCartoon == true ? img2 : yeezy || kanyeImgAlt || img2}
              styles={{ zIndex: "2" }}
              alt="images of Kanye West"
            />{" "}
          </div>
      
          <div className="quoteblock">
            <p onClick={() => fetchKanyeQuote()} className="quote">
              {quote}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    error: state.error,
    isLoading: state.isLoading,
    isCartoon: state.isCartoon,
  };
};

export default connect(mapStateToProps, { fetchKanyeQuote })(Quote);
