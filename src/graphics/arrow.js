import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 25.12%;
  top: 68.19%;
  bottom: 4.44%;
`

const Arrow = () => {
    return(
        <Container>
            <svg width="285" height="216" viewBox="0 0 285 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 49.9033C2.28946 48.1227 4.07194 46.586 5.93367 44.9066C6.86453 44.0669 7.79539 43.2272 8.8055 42.2449C9.8156 41.2626 10.798 40.1629 11.9943 39.0126C12.632 38.3662 13.5352 37.4091 14.7315 36.2589C15.3693 35.6124 16.0347 35.0833 16.6725 34.4368C17.0448 34.101 17.4964 33.6224 17.8687 33.2866C18.4273 32.7828 18.8788 32.3042 19.4651 31.9178C20.5821 30.9102 21.6199 30.0452 22.7369 29.0375C23.8816 28.1473 24.9987 27.1397 26.2503 26.2241C27.502 25.3085 28.6467 24.4183 29.8984 23.5027C40.2086 16.4797 52.3205 10.3936 65.497 6.90547C72.0714 5.10274 78.9743 4.21355 85.7303 5.0938C92.3792 5.99934 98.9643 9.02639 104.409 13.4384C109.853 17.8504 114.477 23.5716 117.766 29.8562C121.056 36.1408 123.089 42.8463 124.105 49.5446C125.094 56.1257 125.171 62.6743 124.548 68.6452C124.25 71.6894 123.79 74.5241 123.196 77.2668C122.938 78.5668 122.601 80.0095 122.315 81.1921C121.923 82.4001 121.531 83.608 121.111 84.6986C120.164 86.9051 118.92 88.8101 117.644 90.103C117.006 90.7494 116.234 91.3038 115.485 91.4809C115.192 91.6741 114.737 91.6579 114.416 91.7338C114.068 91.6923 113.747 91.7682 113.398 91.7267C110.531 91.5375 108.714 88.6218 108.053 86.2999C107.365 83.8608 107.591 81.9487 107.928 80.506C108.293 79.1807 108.582 78.4928 108.582 78.4928C108.582 78.4928 108.871 77.8048 109.478 76.5463C110.191 75.2625 111.249 73.5254 113.079 71.234C116.688 66.9111 122.4 60.9756 130.773 56.2694C134.959 53.9163 139.819 52.0235 145.221 50.9936C147.922 50.4787 150.706 50.3159 153.625 50.2451C155.126 50.3857 156.571 50.2917 158.021 50.6923C159.521 50.833 160.943 51.1162 162.527 51.609C168.431 53.1862 174.454 56.2224 180.029 60.2318C182.856 62.1651 185.552 64.5011 188.249 66.8372C190.866 69.3158 193.483 71.7945 195.862 74.7011C200.779 80.229 205.059 86.4033 208.859 92.9389C212.659 99.4744 215.98 106.371 218.846 113.252C221.739 120.249 224.07 127.256 226.08 134.339C227.124 137.809 228.062 141.305 228.865 144.708C229.28 146.468 229.668 148.111 230.056 149.754C230.25 150.576 230.443 151.397 230.637 152.219C230.803 152.923 230.97 153.627 231.136 154.331C232.216 158.908 233.023 162.806 233.359 164.709C234.913 171.776 236.39 175.639 238.843 181.254C238.956 175.032 239.004 170.932 237.557 163.84C237.114 161.962 236.307 158.064 235.306 153.345C235.14 152.641 234.974 151.937 234.808 151.232C234.614 150.411 234.42 149.589 234.198 148.651C233.783 146.89 233.395 145.247 232.98 143.487C232.042 139.992 231.105 136.496 230.139 132.883C228.129 125.801 225.636 118.584 222.688 111.352C219.739 104.119 216.39 97.1051 212.428 90.3601C208.465 83.6152 203.996 77.114 198.916 71.3767C196.43 68.4954 193.651 65.8073 191.006 63.2113C188.147 60.6659 185.344 58.3552 182.355 56.2124C176.376 51.9268 169.977 48.7318 163.455 46.9289C161.871 46.4362 160.128 46.2288 158.6 45.9708C156.937 45.6207 155.357 45.6227 153.749 45.5074C150.589 45.5114 147.456 45.6328 144.569 46.3156C138.711 47.3292 133.479 49.5579 128.972 51.9869C119.878 56.9875 113.821 63.3763 110.054 67.9844C108.117 70.3012 106.821 72.4662 105.95 74.0353C105.185 75.5791 104.844 76.527 104.844 76.527C104.844 76.527 104.793 76.787 104.555 77.215C104.424 77.6176 104.135 78.3056 104.008 79.2029C103.774 80.1256 103.568 81.1656 103.579 82.6497C103.591 84.1339 103.737 85.7101 104.18 87.5878C104.702 89.3228 105.601 91.2167 107.034 92.9841C108.467 94.7515 110.863 96.2914 113.488 96.4138C116.035 96.6789 118.918 95.5013 120.752 93.7046C122.693 91.8826 124.147 89.4323 125.332 86.7979C125.938 85.5394 126.382 84.0714 126.747 82.7461C126.901 81.9661 127.083 81.3035 127.266 80.6408C127.448 79.9782 127.603 79.1982 127.785 78.5355C128.352 75.6755 128.864 72.5807 129.134 69.4192C129.781 63.0709 129.727 56.1449 128.6 48.9771C127.501 41.9267 125.408 34.4918 121.767 27.671C118.125 20.8502 113.255 14.5676 107.138 9.69521C100.914 4.84815 93.5487 1.38608 86.0958 0.422861C78.6152 -0.657711 71.2053 0.475282 64.3894 2.21125C50.5989 5.96847 38.0593 12.1558 27.6183 19.5814C26.2597 20.5222 25.008 21.4378 23.7564 22.3534C22.5047 23.2689 21.2807 24.3018 20.1637 25.3095C18.9121 26.225 17.795 27.2326 16.678 28.2403C16.1195 28.7441 15.5609 29.2479 15.0024 29.7517C14.6301 30.0876 14.1785 30.5661 13.8062 30.902C13.0615 31.5737 12.4237 32.2202 11.7859 32.8666C10.5897 34.0169 9.60726 35.1166 8.9695 35.7631C4.26747 40.7162 2.31415 44.3997 0 49.9033Z" fill="url(#paint0_linear)"/>
                <path d="M189.195 147.399C192.263 152.745 194.539 156.171 199.266 161.373C200.05 162.302 201.4 163.718 204.128 166.666C210.53 173.701 221.121 185.569 229.906 196.006C234.284 201.166 238.232 205.932 241.205 209.441C242.448 210.882 243.556 212.23 244.53 213.487C245.152 214.207 245.639 214.836 246.126 215.464C246.26 215.556 246.423 215.765 246.45 215.883L246.478 216L246.557 215.857L246.609 215.597C246.767 215.312 246.791 214.935 246.95 214.649C247.734 212.234 248.234 211 248.234 211C248.234 211 248.575 210.052 249.098 208.442C249.439 207.494 249.989 206.001 250.592 204.247C251.904 200.716 253.901 195.783 256.136 190.422C258.478 185.036 261.243 179.053 264.092 173.423C266.941 167.794 269.845 162.398 272.436 158.068C275.079 153.478 276.826 150.835 277.725 149.383C281.323 143.576 282.927 139.851 285 134.281C280.583 138.051 277.846 140.805 274.035 146.663C273.136 148.114 271.416 150.875 268.667 155.49C266.103 159.938 263.092 165.358 260.271 171.106C257.343 176.878 254.577 182.86 252.263 188.364C249.949 193.867 247.952 198.8 246.561 202.475C245.851 204.253 245.301 205.747 244.987 206.812C244.857 207.215 244.777 207.357 244.777 207.357C244.777 207.357 244.777 207.357 244.75 207.24C244.587 207.03 244.425 206.821 244.263 206.612C241.396 203.077 237.449 198.311 232.936 193.059C224.151 182.622 213.426 170.662 207.024 163.627C204.296 160.679 202.946 159.263 202.162 158.333C197.514 152.99 194.228 150.545 189.195 147.399Z" fill="url(#paint1_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="247" y1="216" x2="-2.29635e-07" y2="2.62592e-07" gradientUnits="userSpaceOnUse">
                        <stop offset="0.255658" stop-color="#EF8384"/>
                        <stop offset="1" stop-color="#EF8384" stop-opacity="0.06"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="247" y1="216" x2="-2.29635e-07" y2="2.62592e-07" gradientUnits="userSpaceOnUse">
                        <stop offset="0.255658" stop-color="#EF8384"/>
                        <stop offset="1" stop-color="#EF8384" stop-opacity="0.06"/>
                    </linearGradient>
                </defs>
            </svg>

        </Container>
    )
}

export default Arrow;