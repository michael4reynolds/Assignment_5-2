import * as React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
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
  return (
    <div className="App">
      {/* You can put an image URL as the background too */}
      <PhoneScreen background="url(/map-bg.jpg)">
        {/* Gallery Container */}
        <Frame
          width="100%"
          bottom={-90}
          borderRadius={5}
          backgroundColor="white"
          style={{
            display: "flex",
            overflow: "scroll",
            pointerEvents: "auto" // this is needed to enable scrolling
          }}
        >
          {/* TODO: Populate with the list of photos above */}
        </Frame>
        {/* Bottom Sheet */}
        <Frame
          center="x"
          width="100%"
          height={400}
          bottom={-290}
          borderRadius={5}
          shadow="0 0 5px rgba(0,0,0,0.25)"
          image="/bottom-sheet.jpg"
        />
      </PhoneScreen>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
