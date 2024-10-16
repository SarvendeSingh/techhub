import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Techhub</h1>
            <p>Solutions to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problem you feel
                every day. We are leading tech company whose aim is to increase the 
                problem solving ability in children.
            </p>
        </div>
    </div>

    <div className='home3' id='aboutus'>
        <div>
            <h2>Who we are?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia distinctio veritatis accusamus consequatur excepturi voluptate asperiores in natus at fugit animi, facere fugiat ipsa quis suscipit, nisi optio eos? Perferendis, voluptatum asperiores dolorem aliquid commodi sequi dolores iusto vitae quis odio repudiandae. Distinctio, eveniet eos blanditiis magni sit ullam provident commodi laborum laudantium ut necessitatibus dolore nemo fugit minima quod dolor soluta voluptatem odio, quis explicabo totam. Ex, odio repellendus. Soluta, saepe tempore tempora fuga quibusdam quae cupiditate officia inventore eum expedita similique, enim debitis asperiores explicabo reiciendis hic deserunt alias quo repudiandae nobis, nesciunt quis assumenda?
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h2>Brands</h2>
            <article>
                

                <a href="javascript:void(0)" style={{animationDelay:"0.3s"}} target="_blank" rel="noopener noreferrer">
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </a>

                <a href="javascript:void(0)" style={{animationDelay:"0.5s"}} target="_blank" rel="noopener noreferrer">
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </a>

                <a href="javascript:void(0)" style={{animationDelay:"0.7s"}} target="_blank" rel="noopener noreferrer">
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </a>

                <a href="javascript:void(0)" style={{animationDelay:"0.9s"}} target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram/>
                    <p>Instagram</p>
                </a>

            </article>
        </div>
    </div>

    </>
  )
}

export default Home