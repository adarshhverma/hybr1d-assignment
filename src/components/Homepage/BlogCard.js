import React from 'react';
import { HeartFilled, MessageFilled } from '@ant-design/icons';
import { Card, Row, Col } from 'antd'
import "./index.css"


function BlogCard({ data }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div>
            <Card className="card"
            >
                <p card="card-content" style={{
                    color: "#ddd",
                    fontSize: "1.1rem",
                    fontWeight: "550",
                    margin: "0.5rem 1rem"
                }}>{data.title}</p>
                <p className="card-author" >-{capitalizeFirstLetter(data.author)}</p>
                <div className="card-stats" >
                    <Row>
                        <HeartFilled className="card-icon" />
                        <p className="card-stat">{data.points}</p>
                        <MessageFilled className="card-icon" />
                        <p className="card-stat" >{data.num_comments}</p>
                    </Row>
                </div>
            </Card>
        </div>
    )
}

export default BlogCard