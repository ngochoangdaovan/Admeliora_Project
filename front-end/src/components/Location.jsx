import { Component } from "react";
import subVn from "sub-vn";

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provinces: subVn.getProvinces(),
      districts: [],
      ward: []
    };
    this.onProvinceClick = this.onProvinceClick.bind(this);
    this.ondistrictlick = this.ondistrictlick.bind(this);



    
  }

  onProvinceClick(event) {
    event.preventDefault();
    let provinceCode = event.target.value;
    this.setState({
      districts: subVn.getDistrictsByProvinceCode(provinceCode)
    });
  }

  ondistrictlick(event) {
    event.preventDefault();
    let districtCode = event.target.value;
    this.setState({
      ward: subVn.getWardsByDistrictCode(districtCode)
    });
  }
  

  render() {
    let { provinces, districts ,ward } = this.state;

    return (
      <div>
        <select onChange={this.onProvinceClick} className="number">
          <option>Chọn tỉnh/ Thành phố</option>
          {provinces.map((province) => {
            return (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            );
          })}
        </select>
        <select onChange={this.ondistrictlick} className="number1">
          <option>Chọn quận/ huyện</option>
          {districts.map((district) => {
            return (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            );
          })}
        </select>

        <select className="number">
          <option>Chọn xã / phường</option>
          {ward.map((ward) => {
            return (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
