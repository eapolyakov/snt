import React from "react";
import BlogCategory from "./BlogCategory";
import BlogArchive from "./BlogArchive";
import BlogTop from "./BlogTop";
import BlogTags from "./BlogTags";
import BlogSingleComments from "./BlogSingleComments";
import BlogSendComment from "./BlogSendComment";
import BlogTopic from "./BlogTopic";

export default function BlogSingle() {
    return <div className="main-content">
        <div className="agileits-blog-posts">
            <div className="container">
                <div className="blog col-md-9">
                    <BlogTopic
                        img=""
                        alt="image"
                        link="#"
                        date="24 Окт"
                        title="Заголовок"
                        topic="Lorem"
                    />
                    <BlogSingleComments/>
                    <BlogSendComment/>
                </div>
                <div className="col-md-3 agile-blog-sidebar">
                    <div className="w3l-blog-list">
                        <h4>Категории</h4>
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

                        <div className="clearfix"/>
                    </div>
                    <div className="w3l-blog-list">
                        <h4>Архив</h4>
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
                        <h4>Популярное</h4>
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
                            <h4>Темы</h4>
                            <ul>
                                <BlogTags tag="test"/>
                                <BlogTags tag="test1"/>
                                <BlogTags tag="test2"/>
                                <BlogTags tag="test3"/>
                                <BlogTags tag="test4"/>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        </div>
    </div>
}