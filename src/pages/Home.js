import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section>
    <div className="container-home ">
    
        <div className="col-lg-6 mb-5">
          <h1 className='title'>ONLINE <span className='title-span'>SHOPPING</span></h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra aliquam ante nec bibendum. Morbi at condimentum orci. Maecenas vel leo suscipit tellus vulputate bibendum et et dolor. In nisi odio, facilisis nec porta id, ultricies non ipsum. Ut at felis laoreet, molestie sapien quis, rutrum libero. Donec consectetur lorem libero, nec accumsan eros condimentum non. Mauris eget magna ornare, ultricies orci vel, gravida odio. Fusce erat eros, viverra ut enim ac, volutpat ornare dolor. In eu risus sit amet metus ultricies luctus sed quis orci.   </p>
         <Link to={"/products"}>
         <button className='home-dugme'>Discover our products</button>
         </Link>
        </div>
       
    
    </div>

  </section>
  )
}

export default Home