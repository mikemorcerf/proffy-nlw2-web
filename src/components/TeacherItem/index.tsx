import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/16601136?s=460&u=cc113eafff21220b4a2ef9c77d0456b6ff6175ce&v=4" alt="Mike Morcerf"/>
        <div>
          <strong>Mike Morcerf</strong>
          <span>Chemistry</span>
        </div>
      </header>

      <p>
        I usually make things blow up.
        <br /><br />
        But only the days I don't pray enough.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>$90.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp icon"/>
          Reach out
        </button>
      </footer>

    </article>
  );
}

export default TeacherItem;