package dev.tiana.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    //possible because imdbId property is present in Movie model class & is unique name
    Optional<Movie> findMovieByImdbId(String imdbId);
}
