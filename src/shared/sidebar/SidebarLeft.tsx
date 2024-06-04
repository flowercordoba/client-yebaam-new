const SidebarLeft = () => {
  return (
    <aside className="sidebar static left">
      <div className="widget">
        <h4 className="widget-title">Perfil completado</h4>
        <span>Completa tu perfil para obtener resconpensas!</span>
        <div data-progress="tip" className="progress__outer" data-value="0.67">
          <div className="progress__inner">82%</div>
        </div>
        <ul className="prof-complete">
          <li>
            <i className="icofont-plus-square"></i> <a title="">Tu perfil profesional</a>
            <em>10%</em>
          </li>
          <li>
            <i className="icofont-plus-square"></i> <a title="">Tu universidad?</a>
            <em>20%</em>
          </li>
          <li>
            <i className="icofont-plus-square"></i> <a title="">Tu Exp</a>
            <em>20%</em>
          </li>
        </ul>
      </div>

      <div className="widget">
        <h4 className="widget-title">Perfil profesional</h4>
        <p>Seccion de pagina para empleos segun tu perfil profesional</p>
        <a className="main-btn" href="profile.html" title="" data-ripple="">
          Ver mi perfil
        </a>
      </div>
      <div className="widget web-links stick-widget">
        <ul>
          <li>
            <i className="icofont-dotted-right"></i> <a title="">Sobre ti</a>
          </li>
          <li>
            <i className="icofont-dotted-right"></i> <a title="">Carrera</a>
          </li>

          <li>
            <i className="icofont-dotted-right"></i> <a title="">Grupos</a>
          </li>
          <li>
            <i className="icofont-dotted-right"></i> <a title="">Comunidades</a>
          </li>
          <li>
            <i className="icofont-dotted-right"></i> <a title="">Portales</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLeft;
