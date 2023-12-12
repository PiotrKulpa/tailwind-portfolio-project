const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="row">
          <h3>Here you can know my</h3>
          <h4>skills and experience</h4>
          <div className="clearfix" />
          <div className="col-md-4 skill">
            <h5><span aria-hidden="true" data-icon="" />About me</h5>
            <div className="skill-content">
              <p>Aenean gravida ligula vel mauris volutpat condimentum. Ut eu tortor suscipit, accumsan risus nec, finibus orci. Proin pretium augue at cursus ornare.</p>
              <p>Curabitur condimentum nibh at suscipit interdum. Aenean ac cursus nunc. Phasellus rutrum consequat bibendum.</p>
              <p>Ut in libero sit amet lectus feugiat iaculis. Cras condimentum lobortis nulla, id varius enims.</p>
            </div>
          </div>
          <div className="col-md-4 skill">
            <h5><span aria-hidden="true" data-icon="" />Design skills</h5>
            <div className="skill-content">
              <div className="bar">
                <p>Photoshop 60%</p>
                <div className="bar-graph">
                  <div className="main-layer" />
                  <div className="percent-layer general_bg percent-1" />
                </div>
              </div>
              <div className="bar">
                <p>Illustrator 80%</p>
                <div className="bar-graph">
                  <div className="main-layer" />
                  <div className="percent-layer general_bg percent-2" />
                </div>
              </div>
              <div className="bar">
                <p>Indesign 40%</p>
                <div className="bar-graph">
                  <div className="main-layer" />
                  <div className="percent-layer general_bg percent-3" />
                </div>
              </div>
              <div className="bar">
                <p>Freehand 75%</p>
                <div className="bar-graph">
                  <div className="main-layer" />
                  <div className="percent-layer general_bg percent-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 skill">
            <h5><span aria-hidden="true" data-icon="" />Development skills</h5>
            <div className="skill-content">
              <div className="pie-chart-content">
                <div className="pie-chart easyPieChart pie-chart-loaded" data-percent={45} style={{width: 95, height: 95, lineHeight: 80}}>
                  <p className="percentage css3Animate">45%</p>
                  <p className="percentage-title css3Animate">PHP</p>
                  <canvas width={95} height={95} /></div>
              </div>
              <div className="pie-chart-content">
                <div className="pie-chart easyPieChart pie-chart-loaded" data-percent={30} style={{width: 95, height: 95, lineHeight: 80}}>
                  <p className="percentage css3Animate">30%</p>
                  <p className="percentage-title css3Animate">JAVA</p>
                  <canvas width={95} height={95} /></div>
              </div>
              <div className="pie-chart-content">
                <div className="pie-chart easyPieChart pie-chart-loaded" data-percent={80} style={{width: 95, height: 95, lineHeight: 80}}>
                  <p className="percentage css3Animate">80%</p>
                  <p className="percentage-title css3Animate">HTML</p>
                  <canvas width={95} height={95} /></div>
              </div>
              <div className="pie-chart-content">
                <div className="pie-chart easyPieChart pie-chart-loaded" data-percent={55} style={{width: 95, height: 95, lineHeight: 80}}>
                  <p className="percentage css3Animate">55%</p>
                  <p className="percentage-title css3Animate">MYSQL</p>
                  <canvas width={95} height={95} /></div>
              </div>
              <div className="pie-chart-content">
                <div className="pie-chart easyPieChart pie-chart-loaded" data-percent={90} style={{width: 95, height: 95, lineHeight: 80}}>
                  <p className="percentage css3Animate">90%</p>
                  <p className="percentage-title css3Animate">JOOMLA</p>
                  <canvas width={95} height={95} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 skill">
            <h5><span aria-hidden="true" data-icon="" />Education</h5>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default experience">
                <div className="panel-heading" role="tab" id="heading1">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    <p className="date">(2005 - 2008)</p>
                    <p className="job"><strong>Graphic design</strong><br />Company name</p>
                    <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                  </a>
                </div>
                <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                  <div className="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur purus faucibus felis placerat, non scelerisque lectus imperdiet.</p>							      		
                  </div>
                </div>
              </div>
              <div className="panel panel-default experience">
                <div className="panel-heading" role="tab" id="heading2">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                    <p className="date">(2003 - 2005)</p>
                    <p className="job"><strong>Web development</strong><br />Company name</p>
                    <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                  </a>
                </div>
                <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                  <div className="panel-body">
                    <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>							      		
                  </div>
                </div>
              </div>
              <div className="panel panel-default experience">
                <div className="panel-heading" role="tab" id="heading3">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                    <p className="date">(2002 - 2003)</p>
                    <p className="job"><strong>Web design</strong><br />Company name</p>
                    <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                  </a>
                </div>
                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                  <div className="panel-body">
                    <p>Nam ex mauris, mattis quis lectus in, tincidunt vulputate sapien.</p>							      		
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 skill">
            <h5><span aria-hidden="true" data-icon="" />Employment</h5>
            <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default experience">
                <div className="panel-heading" role="tab" id="heading4">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                    <p className="date">(2010 - Present)</p>
                    <p className="job"><strong>Senior web developer</strong><br />Company name</p>
                    <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                  </a>
                </div>
                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                  <div className="panel-body">
                    <p>Vestibulum eget ligula gravida, posuere metus semper, fringilla mi. Duis cursus, lacus vitae sagittis facilisis, magna lacus bibendum ex, non placerat sem tellus vitae ex.</p>							      		
                  </div>
                </div>
              </div>
              <div className="panel panel-default experience">
                <div className="panel-heading" role="tab" id="heading5">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                    <p className="date">(2008 - 2010)</p>
                    <p className="job"><strong>Junior web developer</strong><br />Company name</p>
                    <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                  </a>
                </div>
                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                  <div className="panel-body">
                    <p>Donec quam tellus, tincidunt ac auctor a, volutpat sed ex. Duis eget augue a odio ullamcorper mollis et lorem ipsum dolor sit amet.</p>							      		
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills