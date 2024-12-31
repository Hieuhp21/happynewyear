/**
 * Author: TrungQuanDev - Một Lập Trình Viên
 * Channel: https://youtube.com/@trungquandev
 * Created at: Feb 09, 2024
 */

import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import "./App.css";

function App() {
  const fireworksRef = useRef(null);
  return (
    <div className="container">
      <div className="fireworks-area">
        <Fireworks
          ref={fireworksRef}
          options={{
            opacity: 0.7,
            particles: 200,
            explosion: 7,
            intensity: 70,
          }}
        />
      </div>

      <div className="content">
        <h1 className="title">
          Happy New Year!
          <br />
          <h4>
            Chúc Kim Anh và gia đình sang 2025 dồi dào sức khỏe, gặp nhiều may
            mắn
          </h4>
          <div className="animate-color">
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
          </div>
        </h1>
        <div className="author">
          <a target="_blank">
            <i className="bx bxl-youtube bx-sm">
              Riêng bạn Kim Anh thì bận ít thôi nhé !!!
            </i>
          </a>
        </div>
        {/* Nếu muốn custom nâng cao thì sử dụng ref như ví dụ dưới đây mình làm nút Restart nhé */}
        {/* <button onClick={() => fireworksRef?.current?.clear()}>Restart</button> */}
      </div>
    </div>
  );
}

export default App;
