import React from 'react';
import recent3 from '../Images/recent3.jpg';
import forum from '../Images/forum.jpg'; 
import recent4 from '../Images/recent4.jpg';

function Aboutme() {
  return (
    <div>
      <div className="container flex-container">
        <main>
          <article className="recent-featured about-me">
            <div className="recent-featured-info">
              <p>Mis à jour le 23 février, 2022</p>
            </div>
            <div className="recent-featured-primary about-me">
              <h2>PRÊT À SUIVRE ENFIN VOTRE CŒUR ? JE PEUX VOUS AIDER.</h2>
              <p>Aussi loin que je me souvienne, j'ai toujours été passionné par l'aventure. Et par "aventure", j'entends chaque opportunité qui nous sort de notre zone de confort, nous permet d'essayer quelque chose de nouveau, et de choisir l'espoir plutôt que la peur. À travers ce blog, je veux vous aider à trouver votre prochaine aventure — que ce soit en explorant attentivement votre destination de rêve ou en cherchant des moyens d'être plus généreux chaque jour.</p>
              <p> Comme tout le monde au début de la vingtaine (et peut-être tout au long de notre vie), j'ai passé quelques années à essayer de découvrir ce que je voulais vraiment faire. Après 14 ans d'études académiques intensives, on se rend compte qu'on ne peut pas être un penseur critique professionnel... et on se demande alors, maintenant quoi.</p>
              <p>À l'époque, alors que j'écrivais mon projet de fin d'études universitaires, je me sentais de plus en plus déprimé. Pourtant, l'écriture avait toujours été une passion pour moi. Face à ce blocage et à cette aversion soudaine, j'ai pris une décision radicale : créer un blog. C'était en février 2017, et ainsi a commencé l'aventure de ce blog.</p>
              <p>J'ai écrit mon premier article et j'ai appuyé sur "publier", sachant que de toute façon, personne n'allait voir ma tactique de procrastination. Ensuite, j'ai publié un autre article, puis un autre, et encore un autre. Je n'en ai parlé à personne à l'époque, car le but était d'écrire ce que je voulais sans attentes, sans public. </p>
              <p>Mais comme tant de choses dans ma vie, j'ai commencé à travailler dur sur le blog et à tomber amoureux de cet espace. J'avais découvert tout un monde de blogueurs, et c'était excitant de me connecter avec ce monde. Quelques mois plus tard, après avoir obtenu mon diplôme universitaire, m'être marié, et faire face à d'autres défis personnels, j'ai réalisé que bloguer était quelque chose que j'aimais vraiment faire.</p>
            </div>
          </article>
        </main>
        <div className="widget">
          <div className="sidebar">
            <h2 className="widget-title">Recent Posts</h2>
            <div className="widget-recent-posts">
              <h3 className="widget-post-title">Go Green</h3>
              <img src={recent3} className="widget-image" alt="image" />
            </div>
            <div className="widget-recent-posts">
              <h3 className="widget-post-title">Behind the Blog: Where Words Come to Life</h3>
              <img src={forum} className="widget-image" alt="image" />
            </div>
            <div className="widget-recent-posts">
              <h3 className="widget-post-title">Connecting Hearts and Minds: Embracing the Blogger Community</h3>
              <img src={recent4} className="widget-image" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
