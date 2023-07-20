import React from 'react';
import './home.scss';

const Card = ({img}) => (
    <img src={img} alt='cover' className='card'/>
)
const Row = ({ title, arr = [{

}]}) => (
    <div className='row'>
        <h2>{title}</h2>
        <div>
            {
                arr.map((item)=>(
                    <Card img={item.img} />
                ))
            }
        </div>

    </div>
)

const Home = () => {
  return (
   <section className='home'>
    <div className="banner"></div>

    <Row title={"Popular on Netflix"} />
    <Row title={"Movies"} />
    <Row title={"TV Shows"} />
    <Row title={"Recently Viewed"} />
    <Row title={"My List"} />

    
   </section>
  )
}

export default Home