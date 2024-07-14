import React, { useState } from 'react';
import './AnotherForum.css';

function AnotherForum() {
  const [forums, setForums] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    const newForum = {
       
      title: title,
      content: content,
      date: new Date().toLocaleDateString(), 
    };

    setForums([...forums, newForum]);

    event.target.reset();
  };

  return (
    <div>
      <div className="container flex-container">
        <main>
          <h2>Créer votre propre forum</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Titre du forum" required />
            <textarea name="content" placeholder="Contenu du forum" required></textarea>
            <button type="submit">Publier</button>
          </form>

          {forums.map((forum) => (
            <div key={forum.id} className="saved-forum">
              <h3>{forum.title}</h3>
              <p>{forum.content}</p>
              <p>{forum.date}</p>
            </div>
          ))}
        </main>

        </div>
      </div>
    
  );
}

export default AnotherForum;

