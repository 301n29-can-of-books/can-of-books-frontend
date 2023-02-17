import React from 'react';

class About extends React.Component {

  render() {
    /* TODO: render information about the developers */
    return (<section>
      <h2>About Us</h2>
      <div className="bio2">
        <h3>Matt Austin</h3>
        <img className="img1" src={require('./images/matt-austin.jpg')} alt="Matt image"/>
        <p>Matt is a software developer with a storied background in structural analysis in the aerospace industry. He hails from the exotic land of Lawrence, Kansas and, after graduating in 2011 with a degree in aerospace engineering, has spent a decade accumulating expertise in all aspects of product lifecycle management and leading technical teams to success on complex, safety critical systems. He is fervent about developing quality, customer-centric products and promoting collaborative and positive work environments. Since making the switch to software development, he has found a reignited passion for learning and he hopes to grow and develop his skills to leverage a dynamic and exciting career in tech!</p>
      </div>
      <div className="bio2">
        <h3>Danner Taylor</h3>
        <img className="img1" src={require('./images/dannertaylor.jpg')} alt="Danner image"/>
        <p>Danner is currently working in the financial industry as a banker. He is also a co-founder, CEO, and CFO for a start-up tech company in the Cayman Islands, developing a hub for local services. He decided to learn about software development to pivot his career from the traditional financial industry to the fintech-oriented industry. Danner also wants to know how to code to be able to assist in the development of his start-up company. He plans to advance his technical knowledge in python to focus more on data analysis and building dashboards. He believes that his new technical skills, paired with his experience in the traditional financial industry, will boost his career in the fintech industry.</p>
      </div>
      <div className="bio2">
        <h3>Brenden Moore</h3>
        <img className="img1" src={require('./images/IMG_2844.jpg')} alt="Brenden image"/>
        <p>Yoo Im Brenden! Im new to the tech world and has a background in customer service and retail. Creative and curious, I love a good challenge when it comes to coding and I look to broaden and extend my experience everyday. Currently looking into frontend design and full stack web applications.</p>
      </div>
    </section>);
  }
}

export default About;
