import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { FETCH_BLOGS } from "../../redux/action.types"
import { Card, Row, Col, Space, Skeleton, Input } from 'antd'
import { Link } from "react-router-dom"
import 'antd/dist/antd.css'
import BlogCard from "./BlogCard"
import "./index.css"


function HomePage() {
    const dispatch = useDispatch()
    const { Search } = Input;
    const blogs = useSelector(
        (data) => data.blogs);

    useEffect(() => {
        dispatch({ type: FETCH_BLOGS , payload:{searchText:"test"}})
    }, [])

    const onSearch = (value) => { 
        dispatch({ type: FETCH_BLOGS, payload: { searchText: value } })

    };

    return (
        <div className="homepage-container" >
            <Row justify="space-between">
                <div style={{ margin: "2rem 2rem 1rem" }}>
                    <h1 className="title" >Hybr1d's Blog</h1>
                    <p className="subTitle" > Assignment for front-end developer role</p>
                </div>
                <div>
                    <Search
                        placeholder="Search..."
                        onSearch={onSearch}
                        style={{
                            width: 400,
                            margin: "4rem 3rem 1rem"
                        }}
                    />
                </div>
            </Row>
            <div className="cards-container" >
                <Row justify='center'>
                    {blogs.length > 0 ? blogs.map((item) => (
                        <div style={{ margin: "1rem" }}>
                            <Link to={`/blog/${item.objectID}`}>
                                <Col span={6}>
                                    <BlogCard data={item} />
                                </Col>
                            </Link>
                        </div>
                    )) : [0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                        <Space>
                            <Skeleton.Button active={true} size={220} className="homepage-skeleton" style={{
                                width: '280px',
                                borderRadius: "8px",
                                margin: "1rem"
                            }} />
                        </Space>
                    ))}
                </Row>
            </div>
        </div >

    )
}

export default HomePage