import React from 'react'
import {Row, Avatar} from 'antd'
import {BellOutlined} from '@ant-design/icons'

const AvatarPage = () => {
  return (
    <Row
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <BellOutlined className="icon__bell" />
            <Avatar src={""} size={30} />

            <div style={{ margin: "0 10px" }}>
              <p className="txt__hi">Xin chào</p>
              <p className="txt__name">Võ Ngọc Châu</p>
            </div>
          </div>
        </Row>
  )
}

export default AvatarPage