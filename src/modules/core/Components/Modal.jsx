import "./Modal.css";

export default function Modal({ isModalOpen, selectedMovies, setIsModalOpen }) {
  return (
    <div>
      {isModalOpen && selectedMovies && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)}>Close</button>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovies.backdrop_path}`}
            />
            <h2>{selectedMovies.original_title}</h2>
            <p>{selectedMovies.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}
