import "./images/iPhone 13 Pro Max - 1.jpg";
import "./images/MacBook Pro - 1.png";

const devLayoutStyle = document.createElement("style");
devLayoutStyle.innerHTML = `
  .layout-check {
    display: none;
    width: 1440px;
    height: 4559px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./images/MacBook Pro - 1.png") no-repeat center;
    opacity: 0.5;
    z-index: 2;
  }

  @media (max-width: 700px) {
    .layout-check {
      width: 428px;
      height: 4641px;
      background: url("./images/iPhone 13 Pro Max - 1.jpg") no-repeat center;
    }
  }
`;
document.head.appendChild(devLayoutStyle);

const devLayoutElement = document.createElement("div");
devLayoutElement.classList.add("layout-check");
document.body.prepend(devLayoutElement);
