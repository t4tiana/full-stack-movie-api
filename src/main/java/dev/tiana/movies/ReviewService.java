package dev.tiana.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Updates Movie collection
        mongoTemplate.update(Movie.class)
                // Match imdbId field with provided imdbId parameter using where clause
                .matching(Criteria.where("imdbId").is(imdbId))
                // Apply changes to Movie collection
                // reviewId is created then pushed into reviewIds array for movie
                .apply(new Update().push("reviewIds").value(review))
                // Only update a single movie
                .first();

        return review;

    }
}
