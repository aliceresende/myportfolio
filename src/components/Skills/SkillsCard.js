import React from "react";

function SkillsCard() {
  return (
    <div className="skills">
      <div className="skills-container">
        {/* Logo Grid */}
        <div className="logo-grid">
          {/* Logo 1 */}
          <div className="logo-circle">
            <img
              src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"
              alt="Java"
              className="logo-img"
            />
            <p className="logo-description">Java</p>
          </div>
          {/* Logo 2 */}
          <div className="logo-circle">
            <img
              src="https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png"
              alt="SQL"
              className="logo-img"
            />
            <p className="logo-description">SQL</p>
          </div>
          {/* Logo 3 */}
          <div className="logo-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
              alt="HTML5"
              className="logo-img"
            />
            <p className="logo-description">HTML5</p>
          </div>
          {/* Logo 4 */}
          <div className="logo-circle">
            <img
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript"
              className="logo-img"
            />
            <p className="logo-description">JavaScript</p>
          </div>
          {/* Logo 5 */}
          <div className="logo-circle">
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="CSS3"
              className="logo-img"
            />
            <p className="logo-description">CSS3</p>
          </div>
          {/* Logo 6 */}
          <div className="logo-circle">
            <img
              src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
              alt="Node.js"
              className="logo-img"
            />
            <p className="logo-description">Node.js</p>
          </div>
          {/* Logo 7 */}
          <div className="logo-circle">
            <img
              src="https://img.icons8.com/?size=160&id=6SWtW8hxZWSo&format=png"
              alt="React"
              className="logo-img"
            />
            <p className="logo-description">React</p>
          </div>
          {/* Logo 8 */}
          <div className="logo-circle">
            <img
              src="https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-apps-logo.png"
              alt="Power Apps"
              className="logo-img"
            />
            <p className="logo-description">Power Apps</p>
          </div>
          {/* Logo 9 */}
          <div className="logo-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/2048px-Microsoft_Power_Automate.svg.png"
              alt="Power Automate"
              className="logo-img"
            />
            <p className="logo-description">Power Automate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;