import React from "react";
import { yeezy } from "../images/kanyeSnippitNewYearsShades.PNG";
import { connect } from "react-redux";
import { fetchKanyeQuote } from "../actions";
import { useImageAPI } from "../hooks/useImageAPI";

const Quote = ({ quote, error, isLoading, fetchKanyeQuote }) => {
  const [kanyeImg, kanyeImgAlt] = useImageAPI(`kanye west`);
  return (
    <div className="quoteContainer">
      <button onClick={() => fetchKanyeQuote()}>drop a knowledge bomb 💣</button>
      {error && (<div>{error}</div>)({ isLoading }) ? (
        <div>...its Comin`</div>
      ) : (
        <div>
          <h1> Kanye Says:</h1>
          <p>{quote}</p>

          <img
            src={kanyeImg || kanyeImgAlt||`https://image.tmdb.org/t/p/original/aiLF9OBQ7LcglmAg0pXjyonGwye.jpg`}
            styles={{ zIndex: "2", width: "100%" }}
            alt="images of Kanye West"
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { quote: state.quote, error: state.error, isLoading: state.isLoading };
};

export default connect(mapStateToProps, { fetchKanyeQuote })(Quote);
