import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useAnimation, useMotionValue, useTransform } from "framer"
import { PhoneScreen } from "./PhoneScreen"

import "./styles.css"

function App() {
  const photos = [
    "https://images.unsplash.com/photo-1500042738280-d2cf3121aa44?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1529168912995-348197746b79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1445623168371-714eea2f2833?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1504731026313-e68ebd5ff02c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1536154010-6ab8a1d741d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1525945882052-c5c66ba342b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1542622466-cbbe173c10ca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ",
    "https://images.unsplash.com/photo-1510926078773-369698bda778?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg1ODY2fQ"
  ]
  const bottomSheetY = useMotionValue(0)
  const galleryY = useTransform(bottomSheetY, [0, -270], [0, -460])
  const backdropOpacity = useTransform(bottomSheetY, [0, -270], [0, 0.4])
  const bottomSheetAnim = useAnimation()
  return (
    <div className="App">
      {/* You can put an image URL as the background too */}
      <PhoneScreen background="url(/map-bg.jpg)">
        {/* Backdrop */}
        <Frame size="100%" backgroundColor="black" opacity={backdropOpacity} />
        {/* Gallery Container */}
        <Frame
          width="100%"
          bottom={-90}
          borderRadius={5}
          backgroundColor="white"
          y={galleryY}
          style={{
            display: "flex",
            overflow: "scroll",
            pointerEvents: "auto" // this is needed to enable scrolling
          }}
        >
          {photos.map(photo => (
            <Frame
              image={photo}
              position="relative"
              key={photo}
              shadow="inset 0px 0px 10px rgba(0,0,0,0.25)"
              style={{ marginRight: 2 }}
            />
          ))}
        </Frame>
        {/* Bottom Sheet */}
        <Frame
          center="x"
          width="100%"
          height={400}
          bottom={-290}
          borderRadius={5}
          y={bottomSheetY}
          animate={bottomSheetAnim}
          drag="y"
          dragConstraints={{ top: -270, bottom: 0 }}
          onDragEnd={function(_, { point: { y } }) {
            bottomSheetAnim.start({ y: Math.abs(y) > 135 ? -270 : 0 })
          }}
          shadow="0 0 5px rgba(0,0,0,0.25)"
          image="/bottom-sheet.jpg"
        />
      </PhoneScreen>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
