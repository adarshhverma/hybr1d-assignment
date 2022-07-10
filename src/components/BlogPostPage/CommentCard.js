import React from 'react'
import { Row, Col, Card, Skeleton, Space, } from "antd"
import { UserOutlined } from '@ant-design/icons'

function CommentCard({ data }) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div>
            <Card className="comment-card"
            >{data.id ? <div>
                <Row justify="space-between">
                    <Row justify="start">
                        <UserOutlined className="user-icon" />
                        <p className="author-name" >{data.author && capitalizeFirstLetter(data.author)}</p>
                    </Row>
                    <Row justify="end">
                        <p className="comment-time" >Created at: {new Date(data.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                        })}</p>

                    </Row>
                </Row>
                <div className="comment-wrapper" >
                    <p className="comment"
                        dangerouslySetInnerHTML={{ __html: data.text }}
                    />
                </div>
            </div> : <Space>
                <Skeleton.Button active={true} size={99} shape={"square"} />
            </Space>}

            </Card>
        </div>
    )
}

export default CommentCard