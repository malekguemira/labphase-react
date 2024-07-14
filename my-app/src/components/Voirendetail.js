import React from 'react';
import { useParams } from 'react-router-dom';
import { ArtcilesList } from '../ArticlesList';

function Voirendetail  ()  {
  const { id } = useParams();  
  const Article = ArtcilesList.find(a => a.id === id); 

    return (
        <div className="container">
          <div className="article-detail">
            <h1>{Article.title}</h1>
            <p><strong>Date:</strong> {Article.date}</p>
            <p>{Article.content}</p>
            <p><strong>Commentaires:</strong> {Article.comments}</p>
          </div>
        </div>
    )
}
export default Voirendetail;
