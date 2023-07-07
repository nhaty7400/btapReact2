import React, { Component } from "react";
import "../css/style.css";

const listProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "../../public/images/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "../../public/images/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "../../public/images/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "../../public/images/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "../../public/images/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "../../public/images/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "../../public/images/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "../../public/images/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "../../public/images/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class Body extends Component {
  state = {
    itemTitle: "GUCCI G8850U",
    itemDesc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    itemImg: "../../public/images/glassesImage/v1.png",
  };

  renderProductList = () => {
    const result = listProduct.map((item) => {
      return (
        <div className="col-2">
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            onClick={() => {
              this.changeGlass(item.id);
            }}
            src={item.url}
            alt=""
          />
        </div>
      );
    });
    return result;
  };

  changeGlass = (id) => {
    document.getElementById("item-pic").style.display = "block";
    document.getElementById("item-content").style.display = "block";
    listProduct.map((item) => {
      if (item.id === id) {
        this.setState({
          itemTitle: item.name,
          itemDesc: item.desc,
          itemImg: item.url,
        });
      }
    });
  };

  render() {
    return (
      <div className="container mt-5">
        {/* phần mẫu ảnh */}
        <div className="d-flex justify-content-around pt-5">
          <div className="modelPicBackground">
            <img
              className="modelPic"
              src="../../public/images/glassesImage/model.jpg"
              alt=""
            />
            <img
              className="item-pic"
              id="item-pic"
              style={{ display: "none" }}
              src={this.state.itemImg}
              alt=""
            />
            <div
              className="item-content"
              id="item-content"
              style={{ display: "none" }}
            >
              <h5 className="item-title">{this.state.itemTitle}</h5>
              <p className="item-desc">{this.state.itemDesc}</p>
            </div>
          </div>
        </div>

        {/* phần item kính */}
        <div className="d-flex justify-content-center">
          <div className="itemBox mt-5">
            <div className="row" id="itemBox">
              {this.renderProductList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
