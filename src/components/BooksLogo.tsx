"use client";

import React, { useState } from "react";

export const BooksLogo = () => {
  const [isTapeHovered, setIsTapeHovered] = useState(false);
  const [isAlreadyHovered, setIsAlredyHovered] = useState(false);

  return (
    <svg
      className="w-full h-full"
      width="619"
      height="319"
      viewBox="0 0 619 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="books-container">
        <g id="books">
          <path
            id="book"
            className="stroke-mainBlack dark:stroke-mainWhite"
            d="M476.645 129.684L592.113 20.7962M476.645 129.684V137.461M476.645 129.684L100.923 102.163C97.3339 102.163 92.8633 103.92 88.3597 106.618M592.113 20.7962V26.779L578.353 39.969M592.113 20.7962L272.032 1.05286C268.642 0.853432 262.46 1.05286 257.674 4.64255L88.3597 106.618M476.645 137.461L578.353 39.969M476.645 137.461H467.671M474.85 214.041V205.665M474.85 214.041L516.373 170.367M474.85 214.041L406.048 207.877M590.318 87.2055V92.59L525.704 160.552M590.318 87.2055L474.85 205.665M590.318 87.2055H578.353M474.85 205.665L173.914 180.538L100.923 173.358C94.3425 172.76 78.1889 159 78.1889 140.453C78.1889 129.372 82.1023 125.702 88.3597 117.913M578.353 87.2055V39.969M578.353 87.2055L467.671 200.879M467.671 200.879V137.461M467.671 200.879L100.923 167.375C91.3511 166.179 83.97 147.195 83.5734 140.453C82.9752 130.282 84.1045 123.209 88.3597 117.913M467.671 137.461L100.923 108.744C97.3339 108.744 92.2296 113.095 88.3597 117.913M88.3597 106.618C79.6313 111.847 72.3843 122.504 72.2059 140.453C72.2059 143.444 71.7168 146.699 72.3843 150.623M565.789 118.391L617.241 129.684M617.241 129.684V135.666L601.686 141.018M617.241 129.684L525.704 160.552M516.373 170.367L525.704 160.552M516.373 170.367L601.686 141.018M601.686 141.018L600.008 192.503M307.929 303.784L599.891 196.093L600.008 192.503M307.929 303.784L30.9246 232.588C25.5401 230.793 14.1728 214.64 14.1728 205.067C14.1728 202.076 13.0958 194.059 15.9675 183.529C17.3635 179.341 21.8307 171.444 28.5315 173.358L307.929 240.366M307.929 303.784V240.366M307.929 240.366L406.048 207.877M406.048 207.877L388.697 206.322M600.008 192.503L615.446 196.093V202.674L307.929 317.544L24.3435 242.161C16.566 239.768 0.531856 222.537 1.01048 203.871V191.307C1.01048 187.717 2.20712 182.332 4.26321 178.144M388.697 206.322L100.923 180.538C87.1631 178.743 74.1937 161.263 72.3843 150.623M388.697 206.322L307.929 233.186L27.9332 166.777C14.9681 166.501 7.87222 171.909 4.26321 178.144M72.3843 150.623L15.9675 165.581C11.7796 166.777 6.31931 173.956 4.26321 178.144"
            stroke-width="2"
          />
        </g>
        <path
          id="tape2"
          className="fill-mainBlack dark:fill-mainWhite"
          d="M85.3685 202.076L44.6853 191.905C30.8051 193.819 26.9362 204.269 26.7368 209.255V246.349L46.4801 224.212L68.0183 257.118V223.016C68.0183 211.648 78.7873 203.472 85.3685 202.076Z"
        />
        <path
          id="tape1"
          onMouseEnter={() => {
            setIsAlredyHovered(true);
            setIsTapeHovered(true);
          }}
          onMouseLeave={() => setIsTapeHovered(false)}
          className={`fill-mainBlack dark:fill-mainWhite hover:cursor-pointer ${
            isAlreadyHovered
              ? isTapeHovered
                ? "animate-pull-tape"
                : "animate-pull-tape-reverse"
              : ""
          }`}
          d="M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V184.127L143.402 158.401L172.718 188.914V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z"
        />
        {/* 
            <path
                id="tape1-pulled"
                d="M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V231.5L143.402 213L172.718 231.5V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z"
                fill="#F9F9F9"
            />  
        */}
        <path
          id="ind"
          className="fill-mainBlack dark:fill-mainWhite"
          d="M243.315 33.3601C236.734 38.7447 242.118 44.1292 249.896 44.1292L483.5 59C491.278 59.5983 493 59 496.987 56L504.764 47.7189C507.756 45.3258 504.764 38.7447 496.987 37.5481C420.606 32.7618 267.725 23.1893 267.246 23.1893C262.46 23.1893 261.264 23.1893 258.87 24.3859L243.315 33.3601Z"
        />
        <path
          id="MyBooks"
          className="fill-mainWhite dark:fill-mainBlack"
          d="M353.68 31.2867C353.368 31.673 353.017 32.1378 352.627 32.6812C352.237 33.2245 351.818 33.8341 351.372 34.5101C350.993 35.0739 350.615 35.677 350.237 36.3192C349.865 36.9555 349.507 37.5896 349.162 38.2215C348.818 38.8469 348.498 39.4514 348.203 40.035C347.908 40.6121 347.651 41.1238 347.433 41.5698C347.214 42.0095 347.042 42.3646 346.916 42.6353C346.79 42.8994 346.727 43.0348 346.726 43.0413C346.648 43.1983 346.525 43.27 346.356 43.2564C346.272 43.2496 346.199 43.2176 346.138 43.1604C346.078 43.0968 346.042 43.022 346.029 42.9361C346.03 42.9296 346.008 42.7907 345.965 42.5194C345.928 42.2422 345.876 41.8755 345.809 41.4193C345.741 40.9567 345.663 40.4279 345.574 39.8328C345.492 39.2318 345.402 38.6073 345.304 37.9594C345.213 37.3054 345.119 36.6447 345.023 35.9772C344.926 35.3098 344.837 34.6755 344.755 34.0746C344.221 35.266 343.695 36.3176 343.178 37.2295C342.667 38.1354 342.153 38.9202 341.636 39.5839C341.119 40.2411 340.595 40.7867 340.064 41.2207C339.539 41.6552 338.995 41.9967 338.433 42.2453C337.878 42.4879 337.3 42.6471 336.7 42.7228C336.106 42.799 335.481 42.8107 334.826 42.7578C334.488 42.7306 334.131 42.6626 333.755 42.5539C333.377 42.4516 333.007 42.3075 332.643 42.1214C332.279 41.9353 331.935 41.7116 331.61 41.4502C331.285 41.1889 331.002 40.8885 330.761 40.5491C330.522 40.2031 330.34 39.8227 330.217 39.4078C330.094 38.9865 330.053 38.5259 330.093 38.0262C330.135 37.5006 330.284 37.0293 330.54 36.6123C330.796 36.1888 331.125 35.8365 331.527 35.5553C331.929 35.2677 332.383 35.0562 332.891 34.9207C333.404 34.7858 333.937 34.7406 334.489 34.785C334.891 34.8175 335.248 34.8822 335.56 34.9792C335.88 35.0703 336.158 35.1777 336.397 35.3014C336.635 35.4251 336.837 35.5556 337.002 35.6931C337.167 35.8305 337.304 35.9558 337.412 36.0691C337.521 36.1823 337.598 36.28 337.644 36.362C337.69 36.4376 337.716 36.4757 337.723 36.4762C337.756 36.5507 337.77 36.6204 337.765 36.6853C337.757 36.7761 337.715 36.8576 337.637 36.9298C337.566 37.0024 337.475 37.0343 337.365 37.0254C337.235 37.0149 337.136 36.9514 337.067 36.8348C337.061 36.8278 337.013 36.7652 336.925 36.647C336.837 36.5224 336.688 36.383 336.479 36.2289C336.269 36.0749 335.993 35.9285 335.652 35.79C335.317 35.6519 334.899 35.5628 334.4 35.5225C333.946 35.4858 333.508 35.5224 333.088 35.6322C332.675 35.7361 332.305 35.9022 331.98 36.1307C331.661 36.3598 331.396 36.6422 331.187 36.9779C330.984 37.3077 330.865 37.6803 330.832 38.0956C330.799 38.5045 330.837 38.8831 330.946 39.2315C331.055 39.58 331.212 39.8964 331.418 40.1807C331.624 40.4651 331.868 40.7167 332.151 40.9354C332.434 41.1542 332.732 41.3415 333.046 41.4975C333.361 41.6469 333.678 41.7672 333.997 41.8582C334.323 41.9433 334.632 41.9976 334.924 42.0212C335.417 42.0609 335.9 42.064 336.373 42.0302C336.853 41.9906 337.329 41.8852 337.8 41.7142C338.277 41.5437 338.751 41.2945 339.222 40.9667C339.693 40.6388 340.169 40.2004 340.651 39.6514C341.133 39.1025 341.618 38.4329 342.106 37.6428C342.601 36.8531 343.107 35.9143 343.626 34.8261C343.783 34.4992 343.939 34.146 344.094 33.7665C344.248 33.3871 344.407 33.0047 344.568 32.6193C344.504 32.0394 344.462 31.5461 344.443 31.1396C344.43 30.7336 344.434 30.3976 344.455 30.1315C344.478 29.846 344.519 29.6207 344.578 29.4556C344.638 29.2905 344.706 29.1687 344.784 29.0901C344.863 29.005 344.945 28.9561 345.031 28.9435C345.118 28.9243 345.2 28.9179 345.278 28.9241C345.343 28.9294 345.413 28.9481 345.489 28.9803C345.571 29.0131 345.641 29.0775 345.699 29.1736C345.763 29.2637 345.811 29.395 345.843 29.5674C345.875 29.7397 345.879 29.9687 345.856 30.2542C345.831 30.5657 345.773 30.9235 345.682 31.3277C345.59 31.7318 345.466 32.1757 345.31 32.6595C345.362 33.0621 345.424 33.5113 345.495 34.0069C345.566 34.5025 345.639 35.0178 345.713 35.5528C345.788 36.0814 345.865 36.6232 345.945 37.1783C346.024 37.7333 346.101 38.2751 346.176 38.8037C346.251 39.3323 346.321 39.8376 346.387 40.3197C346.459 40.8023 346.525 41.2387 346.585 41.6289C346.796 41.2017 347.053 40.6869 347.356 40.0843C347.66 39.4752 347.996 38.8328 348.364 38.1571C348.733 37.4749 349.118 36.7842 349.521 36.0852C349.93 35.3801 350.343 34.7178 350.759 34.0981C351.346 33.218 351.88 32.4675 352.361 31.8466C352.842 31.2192 353.256 30.7039 353.602 30.3007C353.948 29.8975 354.217 29.6024 354.408 29.4154C354.607 29.2224 354.713 29.1166 354.728 29.0982C354.805 29.0326 354.896 29.004 354.999 29.0123C355.11 29.0212 355.194 29.0672 355.253 29.1503C355.318 29.2275 355.347 29.3147 355.339 29.412C355.336 29.4575 355.322 29.5021 355.299 29.546C355.299 29.5525 355.252 29.6467 355.159 29.8286C355.073 30.0045 354.958 30.25 354.815 30.5651C354.679 30.8742 354.526 31.2406 354.354 31.6644C354.184 32.0817 354.013 32.535 353.843 33.0242C353.674 33.5069 353.515 34.0166 353.367 34.5534C353.226 35.0841 353.112 35.617 353.023 36.152C352.983 36.397 352.946 36.6553 352.911 36.9268C352.877 37.1918 352.849 37.4606 352.827 37.7331C352.792 38.1614 352.777 38.5945 352.781 39.0325C352.785 39.4704 352.816 39.8942 352.874 40.3038C352.933 40.7135 353.025 41.1031 353.152 41.4725C353.28 41.8355 353.446 42.1592 353.652 42.4436C353.858 42.728 354.11 42.9638 354.408 43.1512C354.713 43.339 355.073 43.4562 355.487 43.5027C355.59 43.5175 355.668 43.5695 355.719 43.6586C355.778 43.7417 355.803 43.8286 355.796 43.9195C355.789 44.0103 355.747 44.0886 355.669 44.1542C355.592 44.2198 355.505 44.2487 355.408 44.2409C355.304 44.2325 355.201 44.2144 355.099 44.1866C354.637 44.084 354.235 43.9178 353.895 43.6878C353.554 43.4514 353.267 43.1734 353.031 42.854C352.796 42.5281 352.606 42.1666 352.462 41.7696C352.325 41.3666 352.222 40.9403 352.154 40.4907C352.085 40.041 352.048 39.5775 352.04 39.1001C352.04 38.6168 352.06 38.1318 352.099 37.6451C352.146 37.0675 352.221 36.4923 352.326 35.9195C352.431 35.3466 352.554 34.7916 352.696 34.2543C352.837 33.7106 352.994 33.1876 353.165 32.6854C353.336 32.1832 353.508 31.717 353.68 31.2867ZM359.958 44.549C360.204 44.3402 360.453 44.1284 360.705 43.9136C360.958 43.6923 361.205 43.4608 361.447 43.219C361.688 42.9772 361.915 42.7244 362.125 42.4605C362.343 42.1907 362.539 41.9028 362.714 41.5968C362.752 41.5281 362.802 41.4798 362.863 41.4521C362.925 41.4179 362.991 41.4036 363.062 41.4094C363.173 41.4183 363.257 41.4643 363.316 41.5474C363.381 41.631 363.41 41.7215 363.402 41.8188C363.397 41.8707 363.384 41.9186 363.361 41.9625C363.126 42.3681 362.864 42.7356 362.576 43.0651C362.288 43.3946 361.989 43.7068 361.678 44.0018C361.367 44.2903 361.054 44.5687 360.738 44.8372C360.422 45.1122 360.119 45.3882 359.829 45.6653C359.767 46.1109 359.731 46.5587 359.721 47.0086C359.71 47.4649 359.684 47.9462 359.644 48.4523C359.61 48.8677 359.564 49.2819 359.504 49.6952C359.445 50.1084 359.371 50.5008 359.282 50.8725C359.193 51.2507 359.083 51.601 358.952 51.9236C358.828 52.2467 358.679 52.5221 358.503 52.7496C358.328 52.9837 358.131 53.1604 357.912 53.28C357.693 53.406 357.444 53.4578 357.165 53.4353C356.704 53.3981 356.363 53.2106 356.142 52.8728C355.921 52.5349 355.834 52.0804 355.88 51.5094C355.905 51.1979 355.964 50.8663 356.058 50.5146C356.158 50.1634 356.285 49.8014 356.439 49.4285C356.593 49.062 356.77 48.6909 356.97 48.3152C357.177 47.9399 357.396 47.5755 357.627 47.2218C357.858 46.8681 358.1 46.5317 358.355 46.2126C358.608 45.8999 358.863 45.6168 359.119 45.363C359.157 45.0526 359.196 44.7292 359.236 44.3928C359.282 44.0634 359.327 43.7567 359.369 43.4728C359.176 43.7577 358.946 43.9808 358.678 44.1421C358.417 44.3039 358.137 44.3728 357.839 44.3487C357.345 44.3089 356.973 44.1123 356.72 43.7589C356.468 43.4054 356.365 42.9399 356.412 42.3624C356.446 41.9405 356.515 41.5608 356.621 41.2232C356.734 40.8795 356.845 40.5881 356.956 40.3488C357.074 40.1036 357.177 39.9192 357.265 39.7957C357.354 39.6657 357.398 39.6039 357.398 39.6104C357.478 39.5059 357.583 39.4588 357.713 39.4693C357.823 39.4782 357.907 39.5242 357.966 39.6073C358.032 39.6844 358.061 39.7717 358.053 39.869C358.047 39.9404 358.022 40.0037 357.979 40.059C357.986 40.053 357.949 40.1055 357.868 40.2166C357.794 40.3217 357.707 40.4779 357.605 40.6853C357.51 40.8931 357.414 41.1434 357.319 41.4362C357.23 41.7295 357.171 42.0546 357.142 42.4115C357.114 42.7684 357.156 43.0527 357.27 43.2643C357.383 43.4759 357.586 43.5935 357.878 43.6171C358.248 43.6469 358.604 43.4013 358.946 42.8802C359.289 42.3527 359.607 41.5749 359.899 40.5469C359.919 40.4636 359.963 40.3986 360.032 40.3519C360.102 40.2987 360.182 40.2758 360.273 40.2831C360.377 40.2915 360.461 40.3342 360.527 40.4114C360.593 40.4885 360.621 40.579 360.613 40.6828C360.611 40.7023 360.589 40.8181 360.546 41.0301C360.503 41.2357 360.448 41.5121 360.381 41.8594C360.32 42.2072 360.251 42.6132 360.175 43.0773C360.099 43.5349 360.027 44.0254 359.958 44.549ZM359.013 46.5498C358.687 46.9481 358.382 47.3709 358.098 47.8182C357.82 48.2661 357.575 48.7134 357.362 49.16C357.15 49.6066 356.978 50.0369 356.847 50.4508C356.716 50.8648 356.637 51.2373 356.61 51.5682C356.583 51.9057 356.617 52.1729 356.712 52.37C356.806 52.5736 356.974 52.6851 357.214 52.7044C357.428 52.7217 357.625 52.6298 357.804 52.4287C357.99 52.2347 358.153 51.9474 358.295 51.5669C358.443 51.187 358.569 50.7203 358.673 50.167C358.775 49.6201 358.855 49.0027 358.91 48.3148C358.933 48.0358 358.949 47.753 358.959 47.4664C358.975 47.1803 358.993 46.8748 359.013 46.5498ZM380.937 39.2941C381.482 39.4948 381.942 39.7114 382.315 39.944C382.694 40.1771 383.008 40.4147 383.257 40.6568C383.512 40.8929 383.708 41.1308 383.846 41.3705C383.983 41.6102 384.086 41.8372 384.153 42.0517C384.221 42.2662 384.257 42.465 384.262 42.6483C384.274 42.8256 384.275 42.9759 384.265 43.0992C384.228 43.5535 384.108 43.952 383.904 44.2948C383.706 44.6381 383.451 44.9342 383.137 45.1833C382.823 45.4323 382.463 45.6352 382.059 45.792C381.661 45.9493 381.246 46.0693 380.815 46.1521C380.383 46.2414 379.944 46.2943 379.499 46.3106C379.053 46.3334 378.632 46.3289 378.236 46.297C377.594 46.2452 376.934 46.1266 376.256 45.9414C375.586 45.7567 374.911 45.49 374.234 45.1415C374.084 45.0641 374.015 44.9442 374.028 44.782C374.037 44.6717 374.083 44.5872 374.166 44.5286C374.25 44.4635 374.337 44.4346 374.428 44.4419C374.473 44.4456 374.521 44.4592 374.571 44.4829C375.154 44.7846 375.759 45.026 376.384 45.2071C377.01 45.3882 377.644 45.5046 378.286 45.5564C379.162 45.627 379.922 45.6033 380.565 45.4854C381.208 45.3674 381.742 45.1884 382.166 44.9482C382.597 44.7022 382.924 44.415 383.147 44.0868C383.369 43.752 383.495 43.4062 383.524 43.0493C383.556 42.6534 383.475 42.2779 383.282 41.9227C383.095 41.568 382.811 41.2413 382.43 40.9428C382.056 40.6449 381.597 40.3793 381.054 40.1461C380.511 39.9129 379.903 39.7234 379.229 39.5776C378.775 39.6194 378.335 39.6395 377.911 39.6379C377.487 39.6364 377.096 39.6212 376.739 39.5924L376.515 39.5744C376.47 39.5707 376.428 39.5641 376.389 39.5545C375.832 40.6394 375.195 41.5646 374.48 42.3299C373.772 43.0958 373.029 43.7185 372.253 44.198C371.483 44.6715 370.702 45.0069 369.908 45.2043C369.122 45.3956 368.376 45.4628 367.668 45.4057C366.935 45.3466 366.268 45.1884 365.669 44.931C365.075 44.6807 364.573 44.3495 364.162 43.9375C363.751 43.5256 363.443 43.0436 363.24 42.4916C363.036 41.9331 362.962 41.3229 363.015 40.661C363.07 39.9731 363.261 39.2732 363.586 38.5614C363.918 37.8436 364.381 37.1265 364.974 36.4101C365.538 35.7371 366.151 35.1432 366.813 34.6283C367.475 34.1069 368.161 33.6593 368.871 33.2854C369.587 32.9121 370.317 32.6019 371.062 32.355C371.807 32.1081 372.541 31.9158 373.264 31.7781C373.993 31.641 374.699 31.5575 375.381 31.5275C376.069 31.4916 376.712 31.4977 377.309 31.5458C377.796 31.5851 378.259 31.6387 378.697 31.7067C379.136 31.7748 379.554 31.8574 379.951 31.9548C380.206 31.714 380.409 31.5443 380.56 31.4455C380.713 31.3402 380.799 31.2818 380.819 31.2704C380.9 31.2377 380.97 31.2238 381.029 31.2285C381.119 31.2358 381.198 31.2683 381.266 31.326C381.333 31.3836 381.362 31.4611 381.355 31.5585C381.344 31.6883 381.29 31.7949 381.192 31.8785C381.094 31.9555 380.961 32.0624 380.793 32.1991C381.958 32.5868 382.83 33.1013 383.412 33.7426C383.995 34.3774 384.251 35.1264 384.181 35.9894C384.143 36.4632 384.031 36.8819 383.845 37.2458C383.659 37.6096 383.418 37.9233 383.123 38.1868C382.833 38.4509 382.499 38.6754 382.118 38.8602C381.744 39.0391 381.351 39.1837 380.937 39.2941ZM379.298 38.8386C379.588 38.8097 379.885 38.7651 380.191 38.7048C380.502 38.6451 380.806 38.5683 381.101 38.4745C381.403 38.3748 381.69 38.2542 381.963 38.1129C382.236 37.9651 382.475 37.7885 382.681 37.583C382.894 37.3716 383.067 37.1308 383.2 36.8607C383.339 36.591 383.423 36.2778 383.452 35.9208C383.511 35.194 383.257 34.5694 382.692 34.0471C382.127 33.5247 381.289 33.1044 380.178 32.7862C379.821 33.1624 379.48 33.5824 379.155 34.046C378.831 34.5097 378.527 34.9947 378.245 35.501C377.963 36.0008 377.703 36.5121 377.464 37.035C377.233 37.552 377.036 38.0554 376.872 38.5451C377.003 38.5491 377.123 38.5555 377.233 38.5644C377.344 38.5733 377.438 38.5809 377.516 38.5872C377.769 38.6076 378.044 38.6395 378.341 38.6831C378.638 38.7201 378.957 38.772 379.298 38.8386ZM379.362 32.5833C379.034 32.5112 378.696 32.4512 378.347 32.4035C377.998 32.3558 377.633 32.3165 377.25 32.2856C376.679 32.2396 376.068 32.2329 375.419 32.2654C374.77 32.298 374.101 32.3779 373.411 32.5052C372.721 32.6325 372.021 32.8144 371.31 33.051C370.605 33.2816 369.912 33.5751 369.23 33.9316C368.555 34.2822 367.904 34.7032 367.277 35.1947C366.649 35.6863 366.068 36.2501 365.533 36.8863C364.991 37.5349 364.57 38.1835 364.27 38.832C363.969 39.4806 363.794 40.1066 363.746 40.7101C363.7 41.2747 363.76 41.7889 363.925 42.2529C364.097 42.7174 364.358 43.1206 364.709 43.4624C365.061 43.7978 365.493 44.071 366.005 44.2821C366.518 44.4867 367.092 44.6147 367.728 44.6659C368.364 44.7172 369.035 44.657 369.741 44.4853C370.448 44.3072 371.148 44.0077 371.842 43.5868C372.536 43.1594 373.207 42.6061 373.856 41.9269C374.506 41.2413 375.092 40.4133 375.615 39.443C375.498 39.4336 375.38 39.3915 375.262 39.3166C375.145 39.2353 375.092 39.12 375.104 38.9708C375.117 38.815 375.2 38.7107 375.355 38.6578C375.51 38.5985 375.748 38.5589 376.069 38.5391C376.288 38.0211 376.509 37.5034 376.734 36.9859C376.958 36.4684 377.202 35.959 377.464 35.4577C377.727 34.9563 378.011 34.4665 378.317 33.9883C378.624 33.5036 378.972 33.0352 379.362 32.5833ZM390.027 45.7584C389.864 45.7453 389.723 45.7208 389.601 45.6849C389.488 45.8717 389.357 46.044 389.207 46.2017C389.058 46.353 388.887 46.4829 388.696 46.5916C388.51 46.7008 388.305 46.7821 388.078 46.8357C387.852 46.8893 387.609 46.9057 387.349 46.8847C387.044 46.8601 386.77 46.7825 386.526 46.6518C386.281 46.5275 386.072 46.3637 385.899 46.1604C385.726 45.9505 385.599 45.7084 385.517 45.4339C385.435 45.153 385.407 44.8503 385.433 44.5258C385.467 44.1105 385.57 43.7564 385.744 43.4634C385.918 43.164 386.111 42.9215 386.322 42.736C386.533 42.5441 386.74 42.4073 386.943 42.3256C387.146 42.2375 387.296 42.1973 387.394 42.2052C387.504 42.2141 387.583 42.2498 387.63 42.3124C387.684 42.3755 387.706 42.4557 387.699 42.5531C387.69 42.6634 387.647 42.7449 387.571 42.7975C387.502 42.8442 387.413 42.8893 387.305 42.9329C387.197 42.9764 387.081 43.0422 386.956 43.1301C386.832 43.2115 386.713 43.3194 386.597 43.4538C386.488 43.5887 386.394 43.7509 386.313 43.9404C386.233 44.1298 386.183 44.3446 386.163 44.5847C386.146 44.7989 386.162 45.0026 386.212 45.1961C386.262 45.383 386.343 45.5496 386.456 45.6958C386.569 45.8355 386.706 45.9511 386.869 46.0426C387.032 46.1276 387.217 46.1784 387.425 46.1952C387.794 46.225 388.106 46.1652 388.36 46.0159C388.621 45.8605 388.827 45.6551 388.978 45.3995C388.611 45.1674 388.32 44.8565 388.103 44.4668C387.886 44.077 387.796 43.6517 387.833 43.191C387.863 42.8211 387.975 42.5264 388.169 42.3069C388.37 42.0879 388.616 41.9902 388.908 42.0138C389.083 42.0279 389.245 42.0834 389.394 42.1803C389.543 42.2772 389.669 42.4213 389.771 42.6124C389.879 42.804 389.958 43.0455 390.006 43.3368C390.055 43.6281 390.063 43.9716 390.031 44.3675C390.014 44.5751 389.971 44.7904 389.901 45.0134C389.939 45.023 389.978 45.0294 390.017 45.0325C390.056 45.0357 390.098 45.0391 390.143 45.0427C390.364 45.0605 390.564 45.0505 390.743 45.0127C390.923 44.975 391.088 44.9099 391.239 44.8176C391.39 44.7253 391.527 44.6024 391.651 44.4491C391.781 44.2963 391.906 44.117 392.027 43.9112C392.05 43.8738 392.095 43.8415 392.162 43.8143C392.23 43.7806 392.297 43.7664 392.362 43.7716C392.446 43.7784 392.521 43.8204 392.587 43.8975C392.659 43.9687 392.691 44.0595 392.682 44.1698C392.678 44.2217 392.661 44.279 392.629 44.3418C392.599 44.3982 392.568 44.4512 392.538 44.501C392.412 44.6868 392.267 44.8646 392.103 45.0342C391.946 45.1979 391.762 45.3398 391.55 45.4599C391.345 45.574 391.116 45.66 390.863 45.718C390.61 45.776 390.331 45.7894 390.027 45.7584ZM388.56 43.1712C388.55 43.2945 388.556 43.4256 388.577 43.5645C388.599 43.7034 388.636 43.8436 388.69 43.9851C388.751 44.1206 388.825 44.254 388.913 44.3851C389.007 44.5103 389.119 44.6205 389.249 44.7159C389.279 44.5812 389.299 44.4489 389.31 44.3191C389.324 44.1439 389.325 43.9644 389.314 43.7806C389.303 43.5968 389.277 43.4282 389.237 43.2748C389.204 43.1154 389.156 42.9874 389.092 42.8908C389.028 42.7877 388.948 42.7322 388.851 42.7243C388.812 42.7212 388.757 42.7462 388.688 42.7994C388.618 42.8526 388.576 42.9765 388.56 43.1712ZM396.334 46.2669C396.172 46.2538 396.03 46.2293 395.909 46.1934C395.796 46.3803 395.665 46.5526 395.515 46.7103C395.365 46.8615 395.195 46.9915 395.003 47.1001C394.818 47.2093 394.612 47.2907 394.386 47.3443C394.16 47.3979 393.917 47.4142 393.657 47.3933C393.352 47.3687 393.077 47.291 392.833 47.1603C392.589 47.0361 392.38 46.8723 392.207 46.6689C392.034 46.4591 391.907 46.2169 391.824 45.9425C391.742 45.6616 391.715 45.3589 391.741 45.0344C391.774 44.6191 391.878 44.2649 392.052 43.972C392.226 43.6725 392.419 43.43 392.63 43.2446C392.841 43.0526 393.048 42.9158 393.251 42.8342C393.454 42.746 393.604 42.7059 393.701 42.7137C393.812 42.7226 393.89 42.7584 393.937 42.821C393.991 42.8841 394.014 42.9643 394.006 43.0616C393.997 43.172 393.955 43.2534 393.879 43.3061C393.81 43.3528 393.721 43.3979 393.613 43.4414C393.505 43.485 393.389 43.5507 393.264 43.6386C393.14 43.7201 393.02 43.828 392.905 43.9624C392.796 44.0973 392.701 44.2595 392.621 44.4489C392.54 44.6384 392.49 44.8531 392.471 45.0933C392.454 45.3074 392.47 45.5112 392.52 45.7046C392.57 45.8915 392.651 46.0581 392.763 46.2043C392.876 46.3441 393.014 46.4597 393.176 46.5511C393.339 46.6361 393.525 46.687 393.732 46.7037C394.102 46.7336 394.414 46.6738 394.668 46.5244C394.928 46.3691 395.134 46.1636 395.286 45.908C394.919 45.676 394.627 45.3651 394.41 44.9753C394.194 44.5855 394.104 44.1603 394.141 43.6995C394.171 43.3296 394.283 43.0349 394.477 42.8154C394.677 42.5965 394.924 42.4988 395.216 42.5223C395.391 42.5364 395.553 42.592 395.702 42.6889C395.851 42.7858 395.976 42.9298 396.078 43.1209C396.187 43.3126 396.266 43.554 396.314 43.8453C396.362 44.1366 396.371 44.4802 396.339 44.876C396.322 45.0837 396.278 45.299 396.208 45.5219C396.247 45.5316 396.285 45.538 396.324 45.5411C396.363 45.5442 396.405 45.5476 396.451 45.5513C396.671 45.5691 396.871 45.5591 397.051 45.5213C397.23 45.4835 397.396 45.4185 397.547 45.3261C397.698 45.2338 397.835 45.111 397.958 44.9576C398.088 44.8048 398.214 44.6255 398.335 44.4198C398.358 44.3824 398.403 44.3501 398.47 44.3229C398.538 44.2892 398.605 44.2749 398.669 44.2802C398.754 44.287 398.829 44.3289 398.894 44.4061C398.967 44.4773 398.999 44.568 398.99 44.6783C398.986 44.7302 398.968 44.7876 398.937 44.8504C398.906 44.9067 398.876 44.9598 398.846 45.0096C398.72 45.1954 398.575 45.3731 398.411 45.5428C398.254 45.7065 398.07 45.8484 397.857 45.9684C397.652 46.0825 397.423 46.1685 397.17 46.2265C396.917 46.2845 396.639 46.298 396.334 46.2669ZM394.868 43.6797C394.858 43.803 394.863 43.9341 394.885 44.073C394.906 44.2119 394.944 44.3521 394.998 44.4936C395.059 44.6292 395.133 44.7625 395.22 44.8936C395.315 45.0188 395.427 45.1291 395.556 45.2244C395.587 45.0897 395.607 44.9575 395.618 44.8277C395.632 44.6525 395.633 44.473 395.622 44.2892C395.61 44.1054 395.585 43.9368 395.545 43.7833C395.512 43.6239 395.464 43.4959 395.4 43.3993C395.336 43.2962 395.256 43.2407 395.158 43.2329C395.119 43.2298 395.065 43.2548 394.996 43.3079C394.926 43.3611 394.883 43.485 394.868 43.6797ZM400.618 46.4849C400.708 46.7404 400.874 46.953 401.115 47.1226C401.357 47.2858 401.636 47.3802 401.954 47.4058C402.052 47.4137 402.212 47.4135 402.434 47.4053C402.658 47.3907 402.919 47.3137 403.217 47.1745C403.523 47.0294 403.852 46.7914 404.206 46.4606C404.559 46.1299 404.914 45.6523 405.271 45.028C405.31 44.9592 405.359 44.911 405.42 44.8832C405.482 44.849 405.548 44.8348 405.62 44.8405C405.73 44.8494 405.814 44.8954 405.873 44.9785C405.938 45.0621 405.967 45.1494 405.96 45.2402C405.957 45.2792 405.939 45.33 405.908 45.3928C405.643 45.8483 405.356 46.2529 405.046 46.6068C404.737 46.9542 404.41 47.2478 404.064 47.4877C403.719 47.7211 403.362 47.8916 402.994 47.9991C402.632 48.1136 402.266 48.156 401.896 48.1261C401.604 48.1026 401.332 48.0349 401.08 47.9232C400.834 47.8119 400.623 47.6741 400.447 47.5096C400.278 47.3392 400.146 47.1555 400.051 46.9584C399.962 46.7554 399.926 46.5533 399.943 46.3521C399.945 46.3261 399.951 46.2907 399.961 46.2458C399.971 46.2009 399.991 46.1535 400.021 46.1037C400.059 46.0479 400.105 45.9994 400.161 45.9582C400.223 45.911 400.304 45.8751 400.404 45.8505C400.677 45.794 400.928 45.7196 401.157 45.627C401.394 45.5285 401.599 45.4144 401.773 45.2848C401.946 45.1551 402.085 45.0095 402.19 44.8481C402.295 44.6802 402.356 44.4957 402.372 44.2945C402.386 44.1193 402.339 43.9719 402.231 43.8521C402.123 43.7324 401.985 43.6657 401.816 43.6521C401.641 43.638 401.464 43.6858 401.285 43.7955C401.107 43.8987 400.929 44.0443 400.75 44.2324C400.579 44.4145 400.411 44.6296 400.248 44.8777C400.085 45.1193 399.93 45.3746 399.784 45.6437C399.645 45.9133 399.519 46.184 399.405 46.4557C399.292 46.7209 399.197 46.968 399.12 47.1969C399.095 47.2667 399.066 47.3428 399.033 47.425C399.007 47.5078 398.968 47.5831 398.917 47.6508C398.865 47.725 398.805 47.7822 398.737 47.8224C398.668 47.8691 398.581 47.8883 398.477 47.8799C398.38 47.872 398.289 47.8223 398.205 47.7306C398.121 47.6454 398.086 47.5054 398.102 47.3108C398.105 47.2718 398.117 47.1226 398.138 46.863C398.165 46.6039 398.199 46.267 398.239 45.8522C398.28 45.4309 398.325 44.9513 398.375 44.4132C398.432 43.8691 398.488 43.2956 398.543 42.6926C398.598 42.0831 398.659 41.4577 398.723 40.8163C398.788 40.1749 398.848 39.5494 398.904 38.94C398.96 38.3305 399.013 37.7535 399.063 37.2089C399.121 36.6583 399.17 36.1724 399.21 35.7511C399.251 35.3233 399.282 34.9764 399.304 34.7104C399.332 34.4383 399.349 34.2764 399.353 34.2244C399.361 34.1206 399.407 34.0394 399.49 33.9808C399.574 33.9157 399.661 33.8868 399.752 33.8941C399.856 33.9025 399.94 33.9452 400.006 34.0224C400.072 34.093 400.101 34.1835 400.092 34.2938C400.091 34.3068 400.077 34.4363 400.051 34.6824C400.031 34.9225 400.002 35.2467 399.963 35.655C399.923 36.0633 399.875 36.5395 399.818 37.0836C399.768 37.6281 399.711 38.2082 399.648 38.8236C399.593 39.4331 399.532 40.0618 399.467 40.7097C399.408 41.3581 399.347 41.99 399.285 42.6054C399.228 43.2214 399.175 43.8082 399.123 44.3657C399.072 44.9233 399.025 45.416 398.984 45.8437C399.115 45.5211 399.276 45.1847 399.467 44.8344C399.659 44.4776 399.878 44.1523 400.124 43.8586C400.37 43.5649 400.637 43.3284 400.926 43.1493C401.221 42.9706 401.537 42.8948 401.875 42.9221C402.063 42.9372 402.235 42.987 402.392 43.0715C402.549 43.1495 402.681 43.2548 402.788 43.3875C402.902 43.5143 402.984 43.6614 403.036 43.8289C403.095 43.9969 403.116 44.1749 403.101 44.3631C403.077 44.6552 402.991 44.9192 402.841 45.1554C402.692 45.385 402.503 45.5885 402.273 45.7659C402.043 45.9369 401.783 46.0825 401.493 46.2027C401.209 46.3235 400.917 46.4176 400.618 46.4849ZM406.409 44.5318C406.361 44.6325 406.303 44.7454 406.234 44.8705C406.172 44.9961 406.099 45.1274 406.017 45.2644C405.949 45.37 405.88 45.4527 405.81 45.5123C405.747 45.566 405.667 45.5889 405.57 45.5811C405.459 45.5722 405.374 45.5327 405.315 45.4626C405.256 45.3859 405.23 45.3022 405.237 45.2114C405.24 45.1789 405.245 45.1532 405.253 45.1343C405.262 45.1088 405.281 45.0712 405.311 45.0214C405.506 44.7105 405.652 44.4382 405.749 44.2044C405.854 43.9646 405.942 43.7137 406.016 43.4518C405.982 43.2989 405.96 43.1698 405.949 43.0644C405.938 42.959 405.937 42.8511 405.946 42.7408C405.963 42.5266 406.022 42.3583 406.124 42.2359C406.225 42.1069 406.357 42.049 406.52 42.0621C406.669 42.0741 406.78 42.1484 406.854 42.285C406.935 42.4221 406.967 42.5848 406.952 42.773C406.944 42.8768 406.926 42.9798 406.898 43.0821C406.87 43.1843 406.834 43.312 406.789 43.4652C406.908 43.8471 407.031 44.1868 407.157 44.4844C407.283 44.782 407.395 45.0555 407.493 45.305C407.591 45.5481 407.667 45.7763 407.722 45.9897C407.783 46.2037 407.805 46.4145 407.788 46.6221C407.766 46.8947 407.69 47.1498 407.56 47.3875C407.43 47.6252 407.231 47.8182 406.965 47.9665C406.996 47.9756 407.029 47.9815 407.061 47.9841C407.094 47.9867 407.126 47.9893 407.158 47.992C407.528 48.0218 407.876 47.9649 408.201 47.8213C408.526 47.6777 408.823 47.4828 409.091 47.2366C409.366 46.9844 409.614 46.704 409.834 46.3952C410.056 46.0799 410.251 45.7658 410.42 45.4529C410.497 45.3089 410.594 45.2416 410.711 45.251C410.821 45.2599 410.902 45.3056 410.954 45.3882C411.013 45.4713 411.038 45.5583 411.031 45.6491C411.027 45.701 411.013 45.7489 410.99 45.7928C410.905 45.9622 410.794 46.1558 410.659 46.3735C410.531 46.5853 410.376 46.8047 410.195 47.0317C410.02 47.2527 409.82 47.4685 409.594 47.6788C409.368 47.8892 409.118 48.0748 408.844 48.2356C408.576 48.3904 408.286 48.5074 407.973 48.5867C407.659 48.6724 407.32 48.7006 406.957 48.6713C406.522 48.6362 406.123 48.5257 405.759 48.3396C405.401 48.1605 405.119 47.8863 404.914 47.5171C404.88 47.4555 404.865 47.3923 404.87 47.3274C404.878 47.2301 404.921 47.1486 404.998 47.083C405.082 47.0114 405.173 46.9795 405.27 46.9873C405.374 46.9957 405.459 47.0385 405.524 47.1156C405.53 47.1291 405.551 47.1537 405.587 47.1892C405.624 47.2183 405.667 47.2545 405.715 47.2976C405.771 47.3347 405.834 47.3692 405.903 47.4009C405.979 47.4331 406.056 47.4524 406.134 47.4586C406.289 47.4712 406.422 47.4492 406.531 47.3927C406.646 47.3367 406.74 47.2659 406.812 47.1803C406.885 47.0882 406.939 46.9912 406.973 46.8895C407.014 46.7818 407.038 46.689 407.044 46.6111C407.057 46.4489 407.045 46.2846 407.006 46.1182C406.967 45.9517 406.912 45.784 406.841 45.615C406.776 45.4465 406.702 45.2739 406.618 45.0974C406.541 44.9148 406.471 44.7263 406.409 44.5318Z"
        />
      </g>
    </svg>
  );
};