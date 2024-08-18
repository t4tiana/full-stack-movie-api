import "./Reviews.css";
import { React, useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const reviewText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const review = reviewText.current;

    try {
      const response = await api.post("api/v1/reviews", {
        reviewBody: review.value,
        imdbId: movieId,
      });
      //Update the state of the reviews array on the client side optimistically
      const updatedReviews = [{ body: review.value }, ...reviews];
      //Clear the text area once user has successfully submitted review
      review.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="review-header">
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img
            src={movie?.poster}
            alt="movie poster"
          />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    reviewText={reviewText}
                    labelText="Write a Review"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row key={r}>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
