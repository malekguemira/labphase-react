import React from 'react';
import { useNavigate } from 'react-router-dom';

function Article  (props)  {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(`/Voirendetail/${props.data.id}`)} className="recent-articles">
      <div className="recent-primary">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
      </div>
      <div className="recent-info">
        <p>{props.data.date} | {props.data.comments} commentaires</p>
      </div>
    </article>
  );
};

export default Article;

