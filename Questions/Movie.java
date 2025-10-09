import java.util.Objects;

/**
 * A class to model a Movie.
 */
public class Movie implements Comparable<Movie> {

    // Instance Variables
    private String title;
    private String director;
    private int releaseYear;
    private int runtimeMinutes;
    private double userRating;

    public Movie(String title, String director, int releaseYear, int runtimeMinutes) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.runtimeMinutes = runtimeMinutes;
        this.userRating = 0.0; // No rating initially
    }

    // Getters
    public String getTitle() { return title; }
    public String getDirector() { return director; }
    public int getReleaseYear() { return releaseYear; }
    public int getRuntimeMinutes() { return runtimeMinutes; }
    public double getUserRating() { return userRating; }

    // Setters
    public void setTitle(String title) { this.title = title; }
    public void setDirector(String director) { this.director = director; }
    public void setReleaseYear(int releaseYear) { this.releaseYear = releaseYear; }
    public void setRuntimeMinutes(int runtimeMinutes) { this.runtimeMinutes = runtimeMinutes; }

    // Service Methods
    /**
     * Updates the movie's rating. Rating must be between 0.0 and 10.0.
     * @param rating The new user rating.
     */
    public void rateMovie(double rating) {
        if (rating >= 0.0 && rating <= 10.0) {
            this.userRating = rating;
            System.out.println("Rating for '" + title + "' updated to " + rating);
        } else {
            System.out.println("Invalid rating. Please provide a value between 0.0 and 10.0.");
        }
    }

    public String getRuntimeHoursAndMinutes() {
        int hours = runtimeMinutes / 60;
        int minutes = runtimeMinutes % 60;
        return hours + "h " + minutes + "m";
    }

    // equals() and hashCode()
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie movie = (Movie) o;
        return releaseYear == movie.releaseYear &&
                Objects.equals(title, movie.title) &&
                Objects.equals(director, movie.director);
    }

    public int hashCode() {
        return Objects.hash(title, director, releaseYear);
    }

    // compareTo()
    /**
     * Compares movies based on their user rating.
     */
    public int compareTo(Movie other) {
        return Double.compare(this.userRating, other.userRating);
    }

    // toString()
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", director='" + director + '\'' +
                ", releaseYear=" + releaseYear +
                ", runtime=" + getRuntimeHoursAndMinutes() +
                ", rating=" + userRating +
                '}';
    }
}

