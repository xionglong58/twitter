import {createGlobalStyle} from 'styled-components';

export const GlobalIconfontStyle=createGlobalStyle` 
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1563375475474'); /* IE9 */
src: url('./iconfont.eot?t=1563375475474#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('./iconfont.woff?t=1563375475474') format('woff'),
url('./iconfont.ttf?t=1563375475474') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('./iconfont.svg?t=1563375475474#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
font-family: "iconfont" !important;
font-size: 16px;
font-style: normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}`