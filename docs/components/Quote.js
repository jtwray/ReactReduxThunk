import React from "react";
import yeezy from "./../images/kanyeSnippitNewYearsShades.PNG";
import { connect } from "react-redux";
import { fetchKanyeQuote } from "../../kanyeapi/src/actions";
import { useImageAPI } from "../../kanyeapi/src/hooks/useImageAPI";
import "../App.css";

const img1 = yeezy;
const img2 = `https://image.tmdb.org/t/p/original/aiLF9OBQ7LcglmAg0pXjyonGwye.jpg`;
const Quote = ({ quote, error, isLoading, fetchKanyeQuote,isCartoon  }) => {
  const [kanyeImg, kanyeImgAlt] = useImageAPI(`kanye west`);
  return (
    <div className="quoteContainer">
      <div className="button--container">
        <button onClick={() => fetchKanyeQuote()}>
          drop a knowledge bomb <hr /> 💣
        </button>
      </div>
      {error && (<div>{error}</div>)({ isLoading }) ? (
        <div>...its Comin`</div>
      ) : (
        <div>
          <img
            src={(isCartoon == true ? img2 : yeezy || kanyeImgAlt || img2)}
            styles={{ zIndex: "2" }}
            alt="images of Kanye West"
          />{" "}
          <h1>
            <p> Kanye Says:</p>
          </h1>
      
          <p onClick={() => fetchKanyeQuote()} className="quote">
            {quote}
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    error: state.error,
    isLoading: state.isLoading,
    isCartoon: state.isCartoon
  };
};

export default connect(mapStateToProps, { fetchKanyeQuote })(Quote);
