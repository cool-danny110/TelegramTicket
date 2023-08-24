import React, { useState } from 'react';

const VideoList = () => {
    const movies = [
        { id: 1, type:'Action', title: 'Movie 1', price:'$100'},
        { id: 2, type:'Horror', title: 'Movie 2', price:'$200'},
        { id: 12, type:'Romance', title: 'Movie 3', price:'$200'},
        { id: 3, type:'Film Noir', title: 'Movie 4', price:'$300'},
        { id: 4, type:'Drama', title: 'Movie 5', price:'$400'},
        { id: 5, type:'Science fiction', title: 'Movie 6', price:'$100'},
        { id: 6, type:'Fantasy', title: 'Movie 7', price:'$300'},
        { id: 7, type:'Thriller', title: 'Movie 8', price:'$200'},
        { id: 8, type:'Western', title: 'Movie 9', price:'$500'},
        { id: 9, type:'Crime', title: 'Movie 10', price:'$200'},
        { id: 10, type:'Comedy', title: 'Movie 11',price:'$200'},
        { id: 11, type:'History', title: 'Movie 12',price:'$300'},
        
        // Add more movies here
    ];

    const [selectedMovie, setSelectedMovie] = useState(null)
    const [ticketTitle, setTicketTitle] = useState('')
    const [ticketDescription, setTicketDescription] = useState('')
    const handleMovieClick = (movie) => {
      setSelectedMovie(movie)
      setTicketTitle('')
      setTicketDescription('')
    }
    const handleTitleChange = (event) => {
        setTicketTitle(event.target.value)
    }
    
    const handleDescriptionChange = (event) => {
        setTicketDescription(event.target.value)
    }
    const handleTicketSubmit = () => {
        console.log('Ticket Submitted:', {
          title: ticketTitle,
          description: ticketDescription,
          selectedMovie: selectedMovie,
        });
      };
    
    return (
        <div className="bg-gray-200 w-full h-full rounded-lg flex items-center gap-4 p-6 text-lg">
            <div className="flex flex-wrap gap-4 justify-center p-6 text-lg font-serif">
                {
                    movies.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => handleMovieClick(movie)}
                            className={`bg-gray-100 flex-grow cursor-pointer text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12  ${selectedMovie?.id === movie.id ? 'bg-blue-200' : 'bg-white'}`}
                        >
                            {movie.type}
                            <div className="text-gray-500 font-thin text-sm flex gap-2">
                                <span>Title: {movie.title}</span>
                                <span>price: {movie.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {selectedMovie && (
                <div className="mt-8 p-4 bg-blue-100">
                    <h2 className="text-lg font-semibold">{selectedMovie.title} Ticket</h2>
                     <div className="mt-2">
                        <input
                        type="text"
                        placeholder="Ticket Title"
                        value={ticketTitle}
                        onChange={handleTitleChange}
                        className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    <div className="mt-2">
                        <textarea
                        placeholder="Ticket Description"
                        value={ticketDescription}
                        onChange={handleDescriptionChange}
                        rows="6"
                        className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                        onClick={handleTicketSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600"
                        >
                        Submit
                        </button>
                    </div>
                    <p className="mt-2">
                        <strong>Title:</strong> {ticketTitle}
                        <br />
                        <strong>Description:</strong> {ticketDescription}
                    </p>
                </div>
            )}
        </div>
    )
}
export default VideoList