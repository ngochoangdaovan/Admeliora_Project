import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ImageSlider from "./ImageSlider";
import Size from "./Size";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";

import { remove } from "../redux/product-modal/productModalSlice";
import axios from "axios";

const ProductView = (props) => {
  const dispatch = useDispatch();

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let imageApi = "http://admeliora.tk/api/products/images/";

  const [productDetail, setProductDetail] = useState({
    images: [],
    defaultImage: null,
    Size: [],
  });
  useEffect(() => {
    setProductDetail(props.productDetail);
  }, [props]);

  // console.log("props", props)

  const [previewImg, setPreviewImg] = useState(
    imageApi + props.productDetail.defaultImage
  );

  useEffect(() => {
    setPreviewImg(imageApi + props.productDetail.defaultImage);
  }, [imageApi + props.productDetail.defaultImage]);
  // ========================================

  //  set size
  const [size, setsize] = useState([]);
  useEffect(() => {
    if (props.productDetail.Sizes === undefined) {
      setsize([]);
    } else {
      setsize(props.productDetail.Sizes);
    }
  }, [props]);

  // =========================================

  const [number, setnumber] = useState(1);
  const getnumber = (e) => {
    setnumber(Number(e.target.value));
  };

  // =====================================
  const [display_value, setdisplay_value] = useState();
  const [value, setvalue] = useState({
    product_detail_id: null,
    size_name: null,
  });
  const getinfor = (e) => {
    setdisplay_value(e.target.display_value);
    setvalue({
      product_detail_id: Number(
        e.target.options[e.target.selectedIndex].getAttribute("data-id")
      ),

      size_name:
        e.target.options[e.target.selectedIndex].getAttribute("data-size"),
    });
  };

  const check = () => {
    if (value === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };

  
  // =======================================

  const addtoCard = () => {
    // console.log("value",value)
    if (check()) {
      var newitem = {
        image: props.productDetail.defaultImage,
        name: productDetail.name,
        product_detail_id: value.product_detail_id,
        price: productDetail.price,
        discount: productDetail.discount,
        quantity: number,
        size: value.size_name,
      };




      
     

      let token = localStorage.getItem("accessToken");

      
     
      

      console.log("token", token);




      // if(token !== null || token !== token  ){
      //   window.localStorage.clear("accessToken");
      // }


      if (token === null ) {
        props.history.push("/Login");

        

      } else
        axios({
          method: "post",
          url: "http://admeliora.tk/api/user/cart/add",
          data: newitem,
          headers: { authorization: "token: " + token },
        });

        if (token === null ) {
          alert("Bạn chưa có Tài khoản");
        }

        else if (newitem.size !== null ){

          alert("Sản phẩm đã được thêm vào giỏ hàng");

        } 
        
        else {
          alert("Xin hãy chọn size ");
        }
    }
  };



  const getProducts = (count) => {
    const max = productDetail.images.length - count

    const min = 0

    const start = Math.floor(Math.random() * (max - min) + min)

    return productDetail.images.slice(start, start + count)
  }
  const productData = {
    getProducts,
  }

  

  return (
    <div className="products">
      <Grid col={2} mdCol={2} smCol={1} gap={10}>
        <div>
          <div className="product_images_main">
            <img className="main_img" src={previewImg} alt="" />
          </div>
          <div className="list_images">
            <img
              className="children_img"
              onClick={() =>
                setPreviewImg(imageApi + props.productDetail.defaultImage)
              }
              src={imageApi + props.productDetail.defaultImage}
              alt=""
            />
            {productData.getProducts(3).map((item, index) => (
              <ImageSlider
                key={index}
                src={imageApi + item}
                setPreviewImg={setPreviewImg}
                className="image"
              ></ImageSlider>
            ))}
          </div>
        </div>

        <div className="second_frame">
          <div className="product_infor">
            <div className="product_infor_title">
              <h1>{productDetail.name}</h1>
            </div>
            <div className="product_infor_category">
              <p>{productDetail.category}</p>
            </div>

            <div className="dropdown_frame">
              <select
                onChange={getinfor}
                value={display_value}
                className="dropdown_size"
              >
                <option hidden="hidden">Size</option>
                {size.map((item, index) => (
                  <option
                    key={index}
                    value={item.size_name}
                    data-size={item.size_name}
                    data-id={item.product_detail_id}
                  >
                    {item.size_name}
                  </option>
                ))}
              </select>
              <select
                onChange={getnumber}
                value={number}
                className="dropdown_number"
              >
                {numbers.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="product_infor_price">
              {productDetail.price + " " + "VND"}
            </div>
            <div className="button_frame">
              <button onClick={() => addtoCard()} className="button_enter">
                Thêm vào giỏ hàng
              </button>
            </div>

            <div className="description">
              <h3 className="font_size_description">Mô tả</h3>
              <p className="font_size_description">
                {"Dòng áo" + " : " + productDetail.product_line}
              </p>
              <p className="font_size_description">
                {"Color" + " : " + productDetail.color}
              </p>
              <p className="font_size_description">
                <div style={{ display: "flex" }}>
                  <h5>{"Size" + " : "}</h5>
                  {size.map((item, index) => (
                    <Size key={index} size_name={item.size_name}></Size>
                  ))}
                </div>
              </p>
              <h3 className="font_description">Thông điệp : </h3>
              <p className="font_size_description">
                “Do what you want while you can“ đây là cụm từ các bạn đã quá
                quen rồi đúng không nào. Trên Dreamer Tee season 2 lần này, AD
                để dòng chữ này cùng với những hình bộ xương mang ý nghĩa chúng
                ta hãy làm những điều mính thích trước khi quá trễ, và hãy cháy
                hết mình với tuổi trẻ này. “Dreammer“ là người hay mơ mộng,
                nhưng đừng suốt ngày cứ mơ mộng hãy biến giấc mơ của mình thành
                hiện thực. Thêm nữa, làm gì cũng sẽ có khó khăn với thử thách
                nên cứ “I don’t give a fuck“ và bước tiếp.{" "}
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default withRouter(ProductView);
