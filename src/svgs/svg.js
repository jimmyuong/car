const svgs = {
    home:{
        svg:`
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.85067 12.2146L15.5378 8.13017C15.6772 8.04504 15.8375 8 16.0009 8C16.1643 8 16.3245 8.04504 16.464 8.13017L23.1502 12.2155C23.4098 12.3744 23.6243 12.5973 23.7731 12.8628C23.9219 13.1283 24 13.4276 24 13.7319V21.6235C24 22.095 23.8127 22.5472 23.4793 22.8806C23.1459 23.214 22.6937 23.4013 22.2222 23.4013H9.77778C9.30628 23.4013 8.8541 23.214 8.5207 22.8806C8.1873 22.5472 8 22.095 8 21.6235V13.7319C7.99992 13.4273 8.07812 13.1278 8.22707 12.8621C8.37603 12.5964 8.59076 12.3735 8.85067 12.2146Z" fill="black"/> </svg> 
        `
    },
    bluetooth:{
        svg:`
        <svg t="1686303420838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4040" width="200" height="200"><path d="M813 634L599.4 512 813 390c26.9-15.4 26.9-54.1 0-69.5L541 165.1c-26.6-15.2-59.8 4.1-59.8 34.8v243.9L228.9 298.1a4.1 4.1 0 0 0-5.5 1.5l-32 55.4a4.1 4.1 0 0 0 1.5 5.5L455.4 512 193 663.5a4.1 4.1 0 0 0-1.5 5.5l32 55.4a4.1 4.1 0 0 0 5.5 1.5l252.2-145.6v243.8c0 30.7 33.2 50 59.8 34.8l272-155.4c26.9-15.4 26.9-54.1 0-69.5z" p-id="4041"></path></svg>
        `
    },
    setting:{
        svg:`
        <svg t="1686303511965" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6014" width="200" height="200"><path d="M999.327304 629.365605c-45.555661-19.322766-77.546995-64.494531-77.546996-117.088285s31.991335-97.765519 77.546996-117.088285c19.322766-8.189782 29.559993-29.815924 23.161726-49.650552-7.549955-22.905796-16.507529-45.171765-26.872721-66.669941-8.957574-18.682939-31.351508-27.896444-50.546309-19.962593-46.067522 18.93887-100.964652 9.853331-138.458497-27.640513-38.261636-38.261636-46.963279-94.822316-26.360859-141.529665 8.573678-19.322766 1.023723-42.228562-17.659217-52.081893-26.616791-14.076187-54.6412-25.976964-83.689332-35.446399-19.962593-6.526232-41.46077 3.83896-49.650551 23.161726-19.322766 45.683626-64.494531 77.674961-117.216251 77.674961-52.72172 0-97.893484-32.1193-117.216251-77.802926-7.933851-19.450732-29.432028-29.815924-49.39462-23.289692-27.000687 8.829608-53.105616 19.706662-78.058857 32.503196-18.171078 9.34147-27.256617 31.223543-19.962593 50.290379 17.275321 45.29973 7.67792 98.533311-28.920167 135.131397-36.470122 36.470122-89.447772 46.067522-134.747502 29.048132-19.066836-7.166059-40.948908 2.047445-50.162412 20.346489-12.412638 24.185449-23.033761 49.650552-31.607439 76.011412-6.526232 19.962593 3.710995 41.588735 23.161726 49.906482 45.555661 19.322766 77.546995 64.494531 77.546996 117.088285s-31.991335 97.765519-77.546996 117.088285C5.804412 637.555387-4.56078 659.181529 1.965452 679.272087c8.573678 26.36086 19.194801 51.825962 31.607439 76.267343 9.213504 18.171078 30.967612 27.512548 50.162412 20.346488 45.29973-17.147355 98.27738-7.42199 134.747502 29.048132 36.598087 36.598087 46.067522 89.703703 28.920167 135.131398-7.42199 19.706662 2.687272 41.46077 21.498177 50.930205 23.673588 12.028742 48.242933 22.393934 73.836001 30.839647 20.730385 6.910128 43.38025-3.199133 51.442066-23.545622 18.682939-46.963279 64.494531-80.106302 118.112008-80.106303s99.429068 33.143023 118.112008 80.106303c8.061816 20.346489 30.711681 30.455751 51.442066 23.545622 18.427009-6.142336 36.342156-13.18043 53.745442-21.242246 19.322766-8.829608 29.815924-30.839647 22.265969-50.546309-17.147355-45.29973-7.67792-98.533311 28.920167-135.003433 38.645532-38.645532 96.10197-47.21921 142.937283-25.593068 19.066836 8.829608 41.972631 1.407619 52.209859-16.891424 16.379563-29.432028 29.943889-60.655571 40.565012-93.158767 6.526232-20.218524-3.83896-41.844666-23.161726-50.034448zM512.163258 685.926285c-95.718074 0-174.032861-78.314787-174.032861-174.032861s78.314787-174.032861 174.032861-174.032861 174.032861 78.314787 174.032861 174.032861-78.314787 174.032861-174.032861 174.032861z" fill="#2c2c2c" p-id="6015"></path></svg>
        `
    },
    a: {
        svg:`
        <svg width="264" height="283" viewBox="0 0 264 283" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.991 212.992V245.221L259.982 180.764V148.535L131.991 212.992Z" fill="#014F8A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.991 212.992V245.221L4.00043 180.764V148.535L131.991 212.992Z" fill="#003E77"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00098 170.02L131.993 234.477V223.734L4.00098 159.277V170.02Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M260 170.02L132.008 234.477V223.734L260 159.277V170.02Z" fill="#384E81"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00098 148.534L131.998 212.991L259.989 148.534L131.998 84.0762L4.00098 148.534Z" fill="#4EC5FB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6641 151.218L131.994 202.247L233.325 151.218L131.994 100.19L35.9974 148.533L41.3307 151.218L131.994 105.561L222.659 151.218L131.994 196.876L35.9974 148.533L30.6641 151.218Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M83.997 135.106L51.999 151.22L131.994 191.506L211.989 151.22L181.358 134.418L169.328 140.477L195.99 153.906L131.994 186.134L67.9981 153.906L94.6598 140.477L83.997 135.106Z" fill="#002D85"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M132.003 186.135V159.278L67.998 153.906L132.003 186.135Z" fill="#384E81"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.99 186.135V159.278L195.994 153.906L131.99 186.135Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M132.003 159.277L67.998 153.906L94.669 140.477L132.003 159.277Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.99 159.277L195.994 153.906L169.323 140.477L131.99 159.277Z" fill="#384E81"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M110.672 148.534L94.6729 156.591L132.007 175.392V159.277L110.672 148.534Z" fill="#00123C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M153.338 148.534L169.337 156.591L132.003 175.392V159.277L153.338 148.534Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00098 148.533L132.002 212.991V218.363L4.00098 153.905V148.533Z" fill="url(#paint0_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M105.329 167.335L132 180.764L137.336 178.078L142.663 180.764L132 186.135L100.002 170.021L105.329 167.335Z" fill="url(#paint1_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M153.328 170.021L185.326 153.906L174.663 148.535L179.999 145.849L195.998 153.906L158.664 172.707L153.328 170.021Z" fill="url(#paint2_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M94.6692 140.477L67.998 153.906L78.6703 159.277L84.0064 156.592L78.6703 153.906L100.005 143.163L94.6692 140.477Z" fill="url(#paint3_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M260 148.533L131.999 212.991V218.363L260 153.905V148.533Z" fill="url(#paint4_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3323 153.909L51.999 151.22L131.996 110.934L211.993 151.22L131.996 191.506L62.6656 156.59L131.996 121.681L190.661 151.22L131.996 180.766L83.9978 156.59L131.996 132.421L169.329 151.22L131.996 170.018L105.33 156.59L131.996 143.161L147.995 151.22L131.996 159.279L126.663 156.59L137.329 151.22L131.996 148.539L115.997 156.59L131.996 164.648L158.662 151.22L131.996 137.791L94.6644 156.59L131.996 175.396L179.994 151.22L131.996 127.051L73.3313 156.59L131.996 186.136L201.327 151.22L131.996 116.303L57.3323 153.909Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.99 196.877L179.987 172.705L185.323 175.391L137.326 199.563L131.99 196.877Z" fill="url(#paint5_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M153.325 175.392L201.322 151.22L206.658 153.906L158.661 178.078L153.325 175.392Z" fill="url(#paint6_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M137.336 172.705L174.661 153.905L179.997 156.591L142.663 175.391L137.336 172.705Z" fill="url(#paint7_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M195.996 164.649L222.667 151.22L206.668 143.163L211.995 140.477L233.33 151.22L201.332 167.335L195.996 164.649Z" fill="url(#paint8_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.0117 164.649L41.3405 151.22L57.3394 143.163L52.0127 140.477L30.6776 151.22L62.6756 167.335L68.0117 164.649Z" fill="url(#paint9_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M94.6631 108.255L131.995 89.4561L169.327 108.255L131.995 127.053L94.6631 108.255Z" fill="#000D31"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.986 127.052V137.792L190.65 108.254H169.318L131.986 127.052Z" fill="#4EC5FB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.986 89.4475V78.7078L190.65 108.246H169.318L131.986 89.4475Z" fill="#4EC5FB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.986 127.052V137.792L73.3225 108.254H94.6546L131.986 127.052Z" fill="#4EC5FB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.986 89.4475V78.7078L73.3225 108.246H94.6546L131.986 89.4475Z" fill="#4EC5FB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.989 137.792V180.759L41.3252 135.103L73.324 108.246L131.989 137.792Z" fill="#057FA8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.983 137.793V180.76L222.647 135.104L190.649 108.246L131.983 137.793Z" fill="#0C94CE"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.995 116.307L89.3291 94.8196L131.995 35.7349V116.307Z" fill="#4268CF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.976 116.307L174.642 94.8196L131.976 35.7349V116.307Z" fill="#4E7AF3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.3291 89.4487V94.8196L131.984 116.305V110.935L89.3291 89.4487Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M174.628 89.4487V94.8196L131.973 116.305V110.935L174.628 89.4487Z" fill="#1D3261"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M147.99 108.248V102.877L169.326 92.1338V97.5053L147.99 108.248Z" fill="url(#paint10_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.965 116.305V110.934L110.629 100.191V105.562L131.965 116.305Z" fill="url(#paint11_linear_1201_113981)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.977 105.56L83.9785 81.3914L131.977 19.6177V105.56Z" fill="url(#paint12_linear_1201_113981)"/>
        <g filter="url(#filter0_d_1201_113981)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.967 105.56L179.966 81.3914L131.967 19.6177V105.56Z" fill="url(#paint13_linear_1201_113981)"/>
        </g>
        <g filter="url(#filter1_b_1201_113981)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M183.012 111.576L214.891 88.2797L198.951 51.4966L183.012 111.576Z" fill="url(#paint14_linear_1201_113981)" fill-opacity="0.3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M135.194 161.846L170.751 154.489L124.159 95.6362L135.194 161.846Z" fill="url(#paint15_linear_1201_113981)" fill-opacity="0.3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M98.4107 78.4706L57.9492 83.8435L105.948 22.0698L98.4107 78.4706Z" fill="url(#paint16_linear_1201_113981)" fill-opacity="0.3"/>
        </g>
        <circle cx="219.795" cy="78.4708" r="24.5221" fill="url(#paint17_radial_1201_113981)"/>
        <circle cx="55.4966" cy="73.5664" r="19.6177" fill="url(#paint18_radial_1201_113981)"/>
        <circle cx="181.785" cy="55.1746" r="11.0349" fill="url(#paint19_radial_1201_113981)"/>
        <path d="M4 180.237L131.515 245.221" stroke="url(#paint20_linear_1201_113981)"/>
        <path d="M4 159.394L131.515 224.377" stroke="url(#paint21_linear_1201_113981)"/>
        <path d="M259.03 169.203L131.515 234.186" stroke="url(#paint22_linear_1201_113981)"/>
        <path d="M259.03 181.463L131.515 246.447" stroke="url(#paint23_linear_1201_113981)"/>
        <g filter="url(#filter2_f_1201_113981)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.991 245.92V278.149L259.982 213.692V181.463L131.991 245.92Z" fill="#014F8A"/>
        </g>
        <g filter="url(#filter3_f_1201_113981)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.991 245.92V278.149L4.00043 213.692V181.463L131.991 245.92Z" fill="url(#paint24_linear_1201_113981)"/>
        </g>
        <ellipse cx="141.323" cy="7.35663" rx="7.35663" ry="7.35663" fill="url(#paint25_radial_1201_113981)"/>
        <defs>
        <filter id="filter0_d_1201_113981" x="127.967" y="19.6177" width="55.999" height="93.9424" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1201_113981"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1201_113981" result="shape"/>
        </filter>
        <filter id="filter1_b_1201_113981" x="53.9492" y="18.0698" width="164.941" height="147.776" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1201_113981"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1201_113981" result="shape"/>
        </filter>
        <filter id="filter2_f_1201_113981" x="127.991" y="177.463" width="135.991" height="104.686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1201_113981"/>
        </filter>
        <filter id="filter3_f_1201_113981" x="0" y="177.463" width="135.991" height="104.686" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1201_113981"/>
        </filter>
        <linearGradient id="paint0_linear_1201_113981" x1="9.33711" y1="184.791" x2="132" y2="184.791" gradientUnits="userSpaceOnUse">
        <stop stop-color="#336DFF"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1201_113981" x1="116.001" y1="194.192" x2="140.724" y2="177.828" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1201_113981" x1="158.664" y1="161.964" x2="183.387" y2="145.599" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1201_113981" x1="94.6693" y1="140.477" x2="69.9465" y2="156.841" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1201_113981" x1="254.664" y1="184.791" x2="132.001" y2="184.791" gradientUnits="userSpaceOnUse">
        <stop stop-color="#38FFFF"/>
        <stop offset="1" stop-color="#38AFFF" stop-opacity="0.75"/>
        </linearGradient>
        <linearGradient id="paint5_linear_1201_113981" x1="137.326" y1="199.563" x2="179.6" y2="170.969" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint6_linear_1201_113981" x1="158.661" y1="178.078" x2="200.935" y2="149.484" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint7_linear_1201_113981" x1="132" y1="180.763" x2="174.273" y2="152.17" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint8_linear_1201_113981" x1="201.332" y1="167.335" x2="243.605" y2="138.741" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint9_linear_1201_113981" x1="52.0127" y1="140.477" x2="60.3412" y2="168.041" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint10_linear_1201_113981" x1="126.655" y1="97.5053" x2="169.321" y2="97.5053" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint11_linear_1201_113981" x1="110.629" y1="100.191" x2="130.408" y2="113.283" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D3261"/>
        <stop offset="1" stop-color="#00FFFF"/>
        </linearGradient>
        <linearGradient id="paint12_linear_1201_113981" x1="131.977" y1="24.9875" x2="77.5873" y2="60.9889" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F9B401" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#24F901"/>
        </linearGradient>
        <linearGradient id="paint13_linear_1201_113981" x1="180.56" y1="51.4964" x2="131.968" y2="39.7649" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF1BB1" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#00A0E9"/>
        </linearGradient>
        <linearGradient id="paint14_linear_1201_113981" x1="263.747" y1="31.1829" x2="205.082" y2="31.1829" gradientUnits="userSpaceOnUse">
        <stop stop-color="#01F8F9" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#01F8F9"/>
        </linearGradient>
        <linearGradient id="paint15_linear_1201_113981" x1="215.929" y1="81.4531" x2="157.264" y2="81.4531" gradientUnits="userSpaceOnUse">
        <stop stop-color="#01F8F9"/>
        <stop offset="1" stop-color="#01F9F9"/>
        </linearGradient>
        <linearGradient id="paint16_linear_1201_113981" x1="47.2832" y1="38.5393" x2="105.948" y2="38.5393" gradientUnits="userSpaceOnUse">
        <stop stop-color="#01F8F9" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#01F8F9"/>
        </linearGradient>
        <radialGradient id="paint17_radial_1201_113981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(219.795 78.4708) rotate(90) scale(21.4568)">
        <stop stop-color="#71E5FF"/>
        <stop offset="1" stop-color="#38DBFF" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint18_radial_1201_113981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.4966 73.5664) rotate(90) scale(17.1655)">
        <stop stop-color="#71E5FF"/>
        <stop offset="1" stop-color="#38DBFF" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint19_radial_1201_113981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(181.785 55.1746) rotate(90) scale(9.65558)">
        <stop stop-color="#71E5FF"/>
        <stop offset="1" stop-color="#38DBFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint20_linear_1201_113981" x1="5.22611" y1="181.463" x2="76.3402" y2="217.02" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003E77"/>
        <stop offset="0.526042" stop-color="#00FFF0"/>
        <stop offset="1" stop-color="#003E77"/>
        </linearGradient>
        <linearGradient id="paint21_linear_1201_113981" x1="5.22611" y1="160.62" x2="131.515" y2="224.377" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003E77"/>
        <stop offset="0.796971" stop-color="#00FFF0"/>
        <stop offset="1" stop-color="#003E77"/>
        </linearGradient>
        <linearGradient id="paint22_linear_1201_113981" x1="257.804" y1="170.429" x2="186.69" y2="205.986" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003E77"/>
        <stop offset="0.526042" stop-color="#00FFF0"/>
        <stop offset="1" stop-color="#003E77"/>
        </linearGradient>
        <linearGradient id="paint23_linear_1201_113981" x1="257.804" y1="182.689" x2="133.968" y2="246.447" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003E77"/>
        <stop offset="0.81682" stop-color="#00FFF0"/>
        <stop offset="1" stop-color="#003E77"/>
        </linearGradient>
        <linearGradient id="paint24_linear_1201_113981" x1="67.9958" y1="181.463" x2="67.9958" y2="278.149" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003E77"/>
        <stop offset="1" stop-color="#003E77" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint25_radial_1201_113981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(141.323 7.35663) rotate(90) scale(6.43705)">
        <stop stop-color="#71E5FF"/>
        <stop offset="1" stop-color="#38DBFF" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>


        `
    }
}

export {svgs}