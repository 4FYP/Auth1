import React from 'react'
import s1 from '../img/s1.jpg'
import back from "../img/back.jpg"
import people from "../img/people.jpg"
import Rating from 'react-rating-stars-component';


const BookPage = () => {
    return(
        <div className='top_main'>
            <div className="book_main">
                <img src={s1} alt="no pic" className='book_pic' />
            </div>
            <div className='book_two'>
                <div className='book_div1'>
                    <img src={people} alt ="no pic"  className='author_picture' />
                    <br/>
                    <table height={"200px"} width={"100%"} className='author_bio'>
                        <tr>
                            <th>Author</th>
                            <td>Mr Jone</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>abc@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>Pakistan</td>
                        </tr>
                        <tr>
                            <th>Books</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>4.0</td>
                        </tr>
                    </table>
                </div>
                <div className='book_div2'>
                <h3 className='book_story_title' >Lion is a King of Jungle (Story Book)</h3>
                    <img src={s1} alt="no pic" className='book_pict'/>
                    <button className="download_button"><font className='signup_tx'>DOWNLOAD</font></button>
                    <hr />
                    <h4 className='book_summary'>Summary</h4>
                    <p className='book_des'>Ava wakes up to find herself in an alien slave market. Purchased as a gift for the intimidating General Koza, she quickly discovers she is unwittingly the main piece in dangerous game of power.</p>
                    <hr />
                    <div className='books_comments'>
                        <div className='comments_pic'>
                            <img src={people} alt="no pic" className="comment_person" />
                        </div>
                        <div className='comments_people'>
                            <h5>Mr Jones</h5>
                            <p>Wow, this is the amazing story.</p>
                            <hr />
                            <br/>
                            </div>
                            <div className='comments_pic'>
                            <img src={people} alt="no pic" className="comment_person" />
                        </div>
                        <div className='comments_people'>
                            <h5>Mr Jones</h5>
                            <p>This is my interesting story. I like it...</p>
                            <hr />
                            <br/>
                            </div>
                         <input type="text" maxLength={"200"} placeholder='   Write a comments...' name="people_comments" className='people_comments'/>
                    </div>

                </div>
                <div className='book_div3'>
                    <h6 className='book_status'>Book Status</h6>
                <table height={"270px"} width={"60%"} className='book_bio'>
                        <tr>
                            <th>Category</th>
                            <td>Stories</td>
                        </tr>
                        <tr>
                            <th>Author</th>
                            <td>Jones</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>Ongoing</td>
                        </tr>
                        <tr>
                            <th>Books</th>
                            <td className='free_dec'>Free</td>
                        </tr>
                        <tr>
                            <th>Age Rating</th>
                            <td>18</td>
                        </tr>
                        <tr>
                            <th>Chapters</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>4.2</td>
                        </tr>
                        <tr>
                            <td colspan="2"> <Rating
      count={5} // Number of stars
      size={24} // Size of the stars
      activeColor="yellow" className="rating_story"
    /><br/></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="recommended_main">
            <h4 className='fur_rec'>FURTHER RECOMMENDATIONS</h4>
                <div className="rec_1">
                    <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
                <div className="rec_1">
                <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
                <div className="rec_1">
                <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
                <div className="rec_1">
                <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
                <div className="rec_1">
                <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
                <div className="rec_1">
                <a href="#"><img src={s1} alt="no pic"  className='book_picts'/></a>
                    <p><a href="#" className='link_rec_book'><b>The King of Jungle</b></a> by Mr Jones</p>
                </div>
            </div>
        </div>

    )
}

export default BookPage;