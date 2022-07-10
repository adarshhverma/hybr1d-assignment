import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Card, Skeleton, Space, } from "antd"
import { Link } from "react-router-dom"
import { FTECH_BLOG_DETAILS } from "../../redux/action.types"
import "./index.css"
import CommentCard from "./CommentCard"

function BlogPostPage() {

    const dispatch = useDispatch()
    const blogDetails = useSelector(
        (data) => data.blogDetails);

    useEffect(() => {
        const blogID = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]
        dispatch({ type: FTECH_BLOG_DETAILS, payload: { blogId: blogID } })
    }, [])

    return (
        <div className="blogpage-container" >
            <p className="blogpage-crums" >
                <Link to="/">
                    <span>Home</span>
                </Link>/ Blog-{blogDetails.id ? blogDetails.id : "000"}
            </p>
            {blogDetails.title ? <h1 className="blogpage-title" >{blogDetails.title}</h1> :
                <Space>
                    <Skeleton.Button active={true} size={38} style={{
                        width: '70%',
                        position: "absolute",
                        left: "2rem",
                        borderRadius: "8px",
                        top: "5.5rem"
                    }} />
                    <Skeleton.Button active={true} size={30} style={{
                        width: '40%',
                        position: "absolute",
                        left: "2rem",
                        borderRadius: "8px",
                        top: "9rem"
                    }} />
                    <Skeleton.Button active={true} size={130} style={{
                        width: '95%',
                        position: "absolute",
                        left: "2rem",
                        borderRadius: "8px",
                        top: "13rem"
                    }} />
                    <Skeleton.Button active={true} size={130} style={{
                        width: '95%',
                        position: "absolute",
                        left: "2rem",
                        borderRadius: "8px",
                        top: "22.5rem"
                    }} />
                    <Skeleton.Button active={true} size={130} style={{
                        width: '95%',
                        position: "absolute",
                        left: "2rem",
                        borderRadius: "8px",
                        top: "32rem"
                    }} />
                </Space>

            }
            <div style={{ marginBottom: "2rem" }}>
                <Row justify="space-between">
                    <a href={blogDetails.url} target="_blank">
                        <p className="blogpage-url" >{blogDetails.url}</p>
                    </a>
                    {blogDetails.created_at &&
                        <p className="blogpage-time" >Created at: {new Date(blogDetails.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                        })}</p>}
                </Row>
            </div>
            <div className="comment-card-container" >
                <Row>
                    {blogDetails?.children?.map((item) => (
                        <Col span={24}>
                            <CommentCard data={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div >
    )
}

export default BlogPostPage