import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const PrivacyPolicy = () => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="/bg.jpg" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="..." alt="Image two" />}
      />
    </div>
  );
};

export default PrivacyPolicy;
