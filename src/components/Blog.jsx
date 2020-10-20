import React from "react";
import BlogItem from "./BlogItem";
import BlogCategory from "./BlogCategory";
import BlogArchive from "./BlogArchive";
import BlogTop from "./BlogTop";
import BlogTags from "./BlogTags";

export default function Blog(){
    return <div className="main-content">
            <div className="agileits-blog-posts">
                <div className="container">
                    <div className="blog col-md-9">
                        <div className="single-inline">
                            <BlogItem
                                link="single.html"
                                img="images/b2.jpg"
                                alt="b2"
                                day="12"
                                month="Окт"
                                title="Замена столбов"
                                authorlink="#"
                                author="Admin"
                                commentscount="4"
                                commentslink="#"
                                text="Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500
                                            when an unknown printer it to make a type specimen book. It has survived not
                                            only five centuries, but also the leap.
                                            and typesetting industry."


                            />
                            <div className="clearfix"></div>
                        </div>
                        <nav>
                            <ul className="pagination agileinfo-blog-pagination">
                                <li className="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>
                                </li>
                                <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">2 <span className="sr-only"></span></a></li>
                                <li><a href="#">3 <span className="sr-only"></span></a></li>
                                <li><a href="#">4 <span className="sr-only"></span></a></li>
                                <li><a href="#">5 <span className="sr-only"></span></a></li>
                                <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span> </a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3 agile-blog-sidebar">
                        <div className="w3l-blog-list">
                            <h4>Categories</h4>
                            <ul>
                               <BlogCategory
                                   link="#"
                                   categoryname="Новости"
                               />
                                <BlogCategory
                                    link="#"
                                    categoryname="Проишествия"
                                />
                                <BlogCategory
                                    link="#"
                                    categoryname="Объявления"
                                />
                                <BlogCategory
                                    link="#"
                                    categoryname="Мероприятия"
                                />
                            </ul>

                            <div className="clearfix"></div>
                        </div>
                        <div className="w3l-blog-list">
                            <h4>Archives List</h4>
                            <ul>
                                <BlogArchive
                                    year="2018"
                                    commentscount="146"
                                />
                                <BlogArchive
                                    year="2019"
                                    commentscount="188"
                                />
                                <BlogArchive
                                    month="Май"
                                    commentscount="18"
                                />
                            </ul>
                        </div>
                        <div className="blog-list1">
                            <h4>Popular Posts</h4>
                           <BlogTop
                               link="single.html"
                               img="images/bo1.jpg"
                               alt="img2019"
                               description="Lorem ipsum dolor sit amet, consectetuer"
                               date="9 Мая"
                               year="2019"

                           />
                            <BlogTop
                                link="single.html"
                                img="images/bo1.jpg"
                                alt="img2019"
                                description="Lorem ipsum dolor sit amet, consectetuer"
                                date="9 Мая"
                                year="2019"

                            />
                            <BlogTop
                                link="single.html"
                                img="images/bo1.jpg"
                                alt="img2019"
                                description="Lorem ipsum dolor sit amet, consectetuer"
                                date="9 Мая"
                                year="2019"

                            />
                            <BlogTop
                                link="single.html"
                                img="images/bo1.jpg"
                                alt="img2019"
                                description="Lorem ipsum dolor sit amet, consectetuer"
                                date="9 Мая"
                                year="2019"

                            />
                        <div className="blog-list2">
                            <h4>Tags</h4>
                            <ul>
                               <BlogTags   tag="test"/>
                                <BlogTags  tag="test1"/>
                                <BlogTags  tag="test2"/>
                                <BlogTags  tag="test3"/>
                                <BlogTags  tag="test4"/>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
}