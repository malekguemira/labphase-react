import React from 'react';
import { useNavigate } from 'react-router-dom';
import me from '../Images/me.jpg';
import coronavirus2 from '../Images/coronavirus2.jpeg'; 
import coronavirus from '../Images/coronavirus.jpg';
import recent3 from '../Images/recent3.jpg';
import palestine from '../Images/palestine.jpg';
import Article from './Article';
import { ArtcilesList } from '../ArticlesList';

function Forum() {
  const navigate = useNavigate();


  return (
    <div>
      <div className="container flex-container">
        <main>
          {ArtcilesList.map((a) => (
            <Article
              data = {a}
      
            />
          ))}
        </main>
        <div className="sidebar-container">
          <div className="widget">
            <div className="sidebar">
              <h2 className="widget-title">About Me</h2>
              <img src={me} alt="Auteur" className="widget-image" />
              <p>Bonjour ! Je suis l'auteur de ce Forum!</p>
            </div>
            <div className="sidebar">
              <h2 className="widget-title">Recent Posts</h2>
              <div className="widget-recent-posts">
                <h3 className="widget-post-title">COVID-19: Together Stronger</h3>
                <img src={coronavirus2} className="widget-image" alt="image" /> 
              </div>
              <div className="widget-recent-posts">
                <h3 className="widget-post-title">SURVIVING COVID-19</h3>
                <img src={coronavirus} className="widget-image" alt="image" />
              </div>
              <div className="widget-recent-posts">
                <h3 className="widget-post-title">The Mexico Trip</h3>
                <img src={recent3} className="widget-image" alt="image" />
              </div>
              <div className="widget-recent-posts">
                <h3 className="widget-post-title">Palestine In Our Thoughts</h3>
                <img src={palestine} className="widget-image" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
  

  
}
  
  



export default Forum;
