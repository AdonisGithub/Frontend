import React from "react";
import { EcommerceHeader } from "../../components/EcommerceHeader";
import { BellowIcons } from "./BellowIcons";
import VRGlasses from "../../assets/images/VR Glasses.png";
const EcommercePage1 = () => {

  return (
    <div className="flex">
      <EcommerceHeader/>
      <div className="flex relative w-full min-h-screen z-0">
        <div className="w-full flex justify-center mt-[188px]">
          <div className="w-[1226px] h-[347px]">
            <div className="w-full text-center text-black font-mono text-4xl mb-16">MY CART</div>
            <div className="flex w-full ">
              <div className="w-2/3">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="text-left">PRODUCT DETAILS</th>
                        <th className="">QUANTITY</th>
                        <th className="">PRICE</th>
                        <th className="">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex items-center mr-32">
                            <img src={VRGlasses} alt="VR Glassess" className="w-[148px] h-[107px] my-10"/>
                            <div className="ml-4">
                              <div className=" text-black font-mono text-sm">BOBO VR Z5</div>
                              <div className=" text-black font-mono text-sm">By VRSolutions</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center items-center mx-8">
                            <button className="w-[48px] h-[48px] border text-4xl">-</button>
                            <div className="w-[48px] h-[48px] border flex justify-center items-center text-xl">4</div>
                            <button className="w-[48px] h-[48px] border text-3xl">+</button>
                          </div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="text-left">PRODUCT DETAILS</th>
                        <th className="">QUANTITY</th>
                        <th className="">PRICE</th>
                        <th className="">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex items-center mr-32">
                            <img src={VRGlasses} alt="VR Glassess" className="w-[148px] h-[107px] my-10"/>
                            <div className="ml-4">
                              <div className=" text-black font-mono text-sm">BOBO VR Z5</div>
                              <div className=" text-black font-mono text-sm">By VRSolutions</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center items-center mx-8">
                            <button className="w-[48px] h-[48px] border text-4xl">-</button>
                            <div className="w-[48px] h-[48px] border flex justify-center items-center text-xl">4</div>
                            <button className="w-[48px] h-[48px] border text-3xl">+</button>
                          </div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="text-left">PRODUCT DETAILS</th>
                        <th className="">QUANTITY</th>
                        <th className="">PRICE</th>
                        <th className="">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex items-center mr-32">
                            <img src={VRGlasses} alt="VR Glassess" className="w-[148px] h-[107px] my-10"/>
                            <div className="ml-4">
                              <div className=" text-black font-mono text-sm">BOBO VR Z5</div>
                              <div className=" text-black font-mono text-sm">By VRSolutions</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center items-center mx-8">
                            <button className="w-[48px] h-[48px] border text-4xl">-</button>
                            <div className="w-[48px] h-[48px] border flex justify-center items-center text-xl">4</div>
                            <button className="w-[48px] h-[48px] border text-3xl">+</button>
                          </div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                        <td>
                          <div className="font-bold text-[16px] mx-8">P750.00</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
              </div>
              <div className="w-1/3 border ">
                <div className="w-full text-center text-black font-mono text-xl my-7">SUMMARY</div>
                <div className="flex justify-between mx-11">
                  <div className="text-black font-mono text-[16px] my-7">ITMEM3</div>
                  <div className="text-black font-bold text-[16px] my-7">$1000</div>
                </div>
                <div className="text-black font-mono text-[16px] ml-11 my-7">SHIPPING</div>
                <div className="text-black font-mono text-[16px] ml-11 my-7">Same-day delivery: $5</div>
                <hr/>
                <div className="text-black font-mono text-[16px] ml-11 my-7">IS THIS ORDER A GIFT?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bottom-9 absolute z-30 ">
          <BellowIcons/>
        </div>
      </div>
    </div>
  );
};

export { EcommercePage1 };
