import React from 'react'
import Rating from 'react-rating-stars-component';
import s1 from "../img/s1.jpg"
import s2 from "../img/s2.jpg"
import s3 from "../img/s3.jpg"
import s4 from "../img/s4.jpg"


const Stories = () => {
    return(
        <div className="story_main">
        <div className='story_inner'>
            <div className="story_left">
            <a href="/bookpage"><img src={s1} alt="no pic" className='story_cover'/></a>
            </div>
            <div className="story_right">
                <h3 className='story_title'>Lion is a King of Jungle (Story Book)</h3>
                <div className="rating_div">
                <p>Rating: 4.1</p>
                </div>
                <div className='rating_stars_div'>
                <Rating
      count={5} // Number of stars
      size={24} // Size of the stars
      activeColor="yellow" className="rating_story"
    /><br/>
                </div>    
                <p className='story_des'>Ava wakes up to find herself in an alien slave market. Purchased as a gift for the intimidating General Koza, she quickly discovers she is unwittingly the main piece in dangerous game of power.</p>
            </div><hr /><br/>
            <div className="story_left">
            <a href="/bookpage"><img src={s2} alt="no pic" className='story_cover'/>
            </a>
            </div>
            <div className="story_right">
                <h3 className='story_title'>Our last summer (Story Book)</h3>
                <div className="rating_div">
                <p>Rating: 4.2</p>
                </div>
                <div className='rating_stars_div'>
                <Rating
                count={5} // Number of stars
                size={24} // Size of the stars
                activeColor="yellow" className="rating_story"
                /><br/>
            </div>
                <p className='story_des'>A nostalgic reflection on a past summer filled with cherished memories and bittersweet emotions.</p>
            </div><hr />
            <div className="story_left">
            <a href="/bookpage"><img src={s3} alt="no pic" className='story_cover'/>
            </a>
            </div>
            <div className="story_right">
                <h3 className='story_title'>History 4Hans (Story Book)</h3>
                <div className="rating_div">
                <p>Rating: 4.3</p>
                </div>
                <div className='rating_stars_div'>
                <Rating
      count={5} // Number of stars
      size={24} // Size of the stars
      activeColor="yellow" className="rating_story"
    /><br/>
                </div>
                <p className='story_des'>History 4Hans" is a historical drama series set in the 19th century. It follows the life of Hans, a young protagonist navigating the challenges and triumphs of his era. The show delves into themes of love, ambition, and societal changes, offering a captivating glimpse into a pivotal time in history.</p>
            </div><hr />
            <div className="story_left">
                <a href="/bookpage"><img src={s4} alt="no pic" className='story_cover'/></a>
            </div>
            <div className="story_right">
                <h3 className='story_title'>Sulwe (Story Book)</h3>
                <div className="rating_div">
                <p>Rating: 4.7</p>
                </div>
                <div className='rating_stars_div'>
                <Rating
      count={5} // Number of stars
      size={24} // Size of the stars
      activeColor="yellow" className="rating_story"
    /><br/>
                </div>
                <p className='story_des'>Ava wakes up to find herself in an alien slave market. Purchased as a gift for the intimidating General Koza, she quickly discovers she is unwittingly the main piece in dangerous game of power.</p>
            </div><hr/> 
        </div>
    </div>
    )

}

export default Stories;