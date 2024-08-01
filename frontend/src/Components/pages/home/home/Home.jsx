import React from 'react';
import logo from '../../../../images/logo.png';
import './home.css';
import ai from '../../../../images/ai.png';
import cake from '../../../../images/cake.jpg';
import detox from '../../../../images/detox.jpg';
import fruitVegSalad from '../../../../images/fruit-veg-salad.jpg';
import riceMeat from '../../../../images/rice-meat.jpg';
import vegSalad from '../../../../images/veg-salad.jpg';
import calendar from '../../../../images/calendar.png';
function Home() {
  return (
    <div className='home'>
        <div className="top">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="hamburger-menu">
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </div>
            <div className="search">
                <input type="text" name="search" id="search" placeholder='Search'/>
                <span class="material-symbols-outlined">search</span>
            </div>
            <div className="settings">
                <span class="material-symbols-outlined">settings</span>                
            </div>
        </div>

        {/* right panel */}
        {/* user */}
        <div className="user">
            <img src={ai} alt="User" />
            <p>Violah Chesang</p>
        </div>
        <div className="side">
            <h1>Trending</h1>
            <div className="trend">
                <img src={cake} alt="Cake" />
                <div className="trend-desc">
                    <p>Chocolate Jam Cake</p>
                    <p>Views: 10000</p>
                </div>
            </div> 

            <div className="trend">
                <img src={detox} alt="Cake" />
                <div className="trend-desc">
                    <p>Detox Concoction</p>
                    <p>Views: 9800</p>
                </div>
            </div>

            <div className="trend">
                <img src={fruitVegSalad} alt="Cake" />
                <div className="trend-desc">
                    <p>Fruit & Veg Salad</p>
                    <p>Views: 9788</p>
                </div>
            </div> 
            <div className="trend">
                <img src={riceMeat} alt="Cake" />
                <div className="trend-desc">
                    <p>Rice Chicken with Veg</p>
                    <p>Views: 9500</p>
                </div>
            </div>
            <div className="trend">
                <img src={vegSalad} alt="Cake" />
                <div className="trend-desc">
                    <p>Veg salad</p>
                    <p>Views: 9300</p>
                </div>
            </div>             
        </div>

        {/* Posts */}
        <div className="posts">
            <div className="create-post">
                <textarea name="post" id="post" rows={5} placeholder='Type a new recipe...'></textarea>
                <button type="submit">POST</button>
            </div>
            <div className="main-post">
                {/* col 1 */}
                <div className="post-col">
                    <h3>User Name</h3>
                    <div className="new-food">
                        <img src={riceMeat} alt="" />
                    </div>
                    <div className="recipe">
                        <h4>Recipe</h4>
                        <ol>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                        </ol>
                        <p>Read More</p>
                    </div>
                </div>
                {/* col2 */}
                <div className="post-col">
                    <div className="post-desc">
                        <p><strong>Cook time:</strong> 1 hour</p>
                    </div>
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            <li>1/2kg Rice</li>
                            <li>1kg chicken</li>
                            <li>3 large carrots</li>
                            <li>2 red onions</li>
                            <li>1 cup green peas</li>
                            <li>1/2 a cup veg oil</li>
                            <li>Spices of your choice</li>

                        </ul>
                    </div>
                </div>                
            </div>


            <div className="main-post">
                {/* col 1 */}
                <div className="post-col">
                    <h3>User Name</h3>
                    <div className="new-food">
                        <img src={riceMeat} alt="" />
                    </div>
                    <div className="recipe">
                        <h4>Recipe</h4>
                        <ol>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                        </ol>
                        <p>Read More</p>
                    </div>
                </div>
                {/* col2 */}
                <div className="post-col">
                    <div className="post-desc">
                        <p><strong>Cook time:</strong> 1 hour</p>
                    </div>
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            <li>1/2kg Rice</li>
                            <li>1kg chicken</li>
                            <li>3 large carrots</li>
                            <li>2 red onions</li>
                            <li>1 cup green peas</li>
                            <li>1/2 a cup veg oil</li>
                            <li>Spices of your choice</li>

                        </ul>
                    </div>
                </div>                
            </div>


            <div className="main-post">
                {/* col 1 */}
                <div className="post-col">
                    <h3>User Name</h3>
                    <div className="new-food">
                        <img src={riceMeat} alt="" />
                    </div>
                    <div className="recipe">
                        <h4>Recipe</h4>
                        <ol>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                            <li>Consectetur ex nulla excepteur id ex cupidatat. </li>
                            <li>Consectetur ea pariatur ipsum sunt do.</li> 
                            <li>Sint magna veniam do sunt aliquip consectetur</li> 
                            <li>deserunt commodo aliquip magna consequat pariatur ea. </li>
                            <li>Eiusmod laboris et ex Lorem.</li>
                        </ol>
                        <p>Read More</p>
                    </div>
                </div>
                {/* col2 */}
                <div className="post-col">
                    <div className="post-desc">
                        <p><strong>Cook time:</strong> 1 hour</p>
                    </div>
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            <li>1/2kg Rice</li>
                            <li>1kg chicken</li>
                            <li>3 large carrots</li>
                            <li>2 red onions</li>
                            <li>1 cup green peas</li>
                            <li>1/2 a cup veg oil</li>
                            <li>Spices of your choice</li>

                        </ul>
                    </div>
                </div>                
            </div>
        </div>

        {/* right panel */}
        <div className="right-panel">
            <div className="calendar">
                <img src={calendar} alt="calendar" />
            </div>
            <div className="following">
                <h2>Following</h2>
                <div className="friends-post">
                    <div className="friend-desc">
                        <img src={ai} alt="" />
                        <h3>User Name</h3>
                    </div>
                    <div className="friend-food">
                        <p>Detox drink</p>
                        <img src={detox} alt="" />                        
                    </div>
                </div>  

                <hr />
                <hr />
                <hr />

                <div className="friends-post">
                    <div className="friend-desc">
                        <img src={ai} alt="" />
                        <h3>User Name</h3>
                    </div>
                    <div className="friend-food">
                        <p>Fruit & Veg Salad</p>
                        <img src={fruitVegSalad} alt="" />                        
                    </div>
                </div> 

                <hr />
                <hr />
                <hr />
                <div className="friends-post">
                    <div className="friend-desc">
                        <img src={ai} alt="" />
                        <h3>User Name</h3>
                    </div>
                    <div className="friend-food">
                        <p>Cake</p>
                        <img src={cake} alt="" />                        
                    </div>
                </div> 

                <hr />
                <hr />
                <hr />
                <div className="friends-post">
                    <div className="friend-desc">
                        <img src={ai} alt="" />
                        <h3>User Name</h3>
                    </div>
                    <div className="friend-food">
                        <p>Salad</p>
                        <img src={vegSalad} alt="" />                        
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Home;