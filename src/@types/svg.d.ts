declare module "*.svg" {
	import React from "react";
  import * as Svg from 'react-native-svg';
	import { SvgProps } from "react-native-svg";
	const content: React.FC<SvgProps>;
	export default content;
}
