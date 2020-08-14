import React from "react";

import { connect } from "react-redux";
import { fetchKanyeQuote } from "../actions";
import { useImageAPI } from "../hooks/useImageAPI";
import "../App.css";

const img2 = `https://image.tmdb.org/t/p/original/aiLF9OBQ7LcglmAg0pXjyonGwye.jpg`;

const yeezybaby  = `https://i.imgur.com/3DB799e.png`;

const Quote = ({ quote, error, isLoading, fetchKanyeQuote, isCartoon }) => {
  const [kanyeImg, kanyeImgAlt] = useImageAPI(`kanye west`);

  return (
    <div className="quoteContainer">
      <div className="headerTitle">       
        <h1> kany🎱</h1> 
      </div>
      <div className="Main">
            {error && <div className="error">{error}</div>}

            {isLoading && <div className="loading">...its Comin`</div>}

            {
              !error && !isLoading && 
              <div className="quoteImgBtn">
                  <div className="imgBtn">
                    <img
                      src={isCartoon === true ? yeezybaby :img2 ||  kanyeImgAlt || img2}
                      styles={{ zIndex: "2" }}
                      alt="images of Kanye West"
                      />
                    <button 
                      onClick={() => fetchKanyeQuote()}>
                      drop a knowledge bomb <hr /> 💣
                    </button>
                  </div>
                  <div className="quote">
                    <p 
                      onClick={() => fetchKanyeQuote()}
                      >{quote}
                    </p>
                  </div>         
              </div>
            }
        </div>
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
