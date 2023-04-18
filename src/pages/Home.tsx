import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../utils/Utils';
import variables from '../assets/style/variable.module.scss';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import classNames from 'classnames';

const useStyles = makeStyles({
    block: {
    },
    carouselContainer: {

    },
    carouselImage: (theme:any) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme?.breakpoints.up('xl')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.up('sm')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.down('sm')]: {
            height: "100vh",
            // width: "100%",
        },
    }),
    arrowIcons: {
        fontSize: "3.275rem !important",
        color: variables.white + " !important",
        "&:hover": {
            color: variables.white + " !important",
        },
        "&:click": {
            
        }
    },
    logoContainer: (theme:any) =>({
        position: "absolute",
        // bottom: 0,
        zIndex: 2,
        right: 0,
        transitionProperty: "bottom, top, right",
        transitionTimingFunction: "linear",
        transitionDuration: "2s, 2s, 2s",
    }),
    logo: (theme:any) =>({
        height: "auto",
        [theme?.breakpoints.up('xl')]: {
            height: 230,
            width: "80%",
        },
        [theme?.breakpoints.up('md')]: {
            height: 190,
            width: "80%",
        },
        [theme?.breakpoints.down('md')]: {
            height: 160,
            width: 100,
        },
        "& > path":{
            transitionProperty: "fill",
            transitionTimingFunction: "ease-in-out",
            transitionDuration: "0.5s",
        }
    }),
});

interface LogoPosition{
    top: number | string;
    bottom: number | string;
}

const Home = () => {
    const classes = useStyles(theme);
    const [logoFillCOlor, setLogoFillCOlor] = useState(variables.brown);
    const [logoPosition, setLogoPosition] = useState<LogoPosition>({top: 15, bottom: "unset"});

    const adjustLogoFillColor = (selection) => {
        switch(selection){
            case 0:
                setLogoPosition({top: "unset", bottom: 0})
                setLogoFillCOlor(variables.brown)
                break;
            case 1:
                setLogoPosition({top: "unset", bottom: 0})
                setLogoFillCOlor(variables.darkyellow)
                break;
            case 2:
                setLogoPosition({top: "unset", bottom: 0})
                setLogoFillCOlor(variables.pink)
                break;
            case 3:
                setLogoPosition({top: "unset", bottom: 0})
                setLogoFillCOlor(variables.green)
                break;
            case 4:
                setLogoPosition({top: "unset", bottom: 0})
                setLogoFillCOlor(variables.darkyellow)
                break;
            default:
                
                break;
        }
    }

    return (
        <Container className={classNames("main", classes.block)}>
            <Carousel
                className={classes.carouselContainer}
                navButtonsAlwaysVisible
                autoPlay={false}
                indicators={false}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: "transparent",
                        borderRadius: 2,
                        margin: 0
                    }
                }} 
                navButtonsWrapperProps={{
                    style: {
                        // top: 'unset',
                        // height: "unset"
                    }
                }}
                next={ (next, active) => adjustLogoFillColor(next) }
                prev={ (prev, active) => adjustLogoFillColor(prev) }
                sx={{height: "100vh"}}
                NextIcon={<KeyboardArrowRightIcon className={classes.arrowIcons}/>}
                PrevIcon={<KeyboardArrowLeftIcon className={classes.arrowIcons}/>} >
                {Array.from({length: 6}, (_, i) => i + 1).map((index) => (
                    <Box key={index} className={classes.carouselImage}
                        sx={{ backgroundImage: `url(${require("../assets/images/home/" + index + ".jpg")})`}}>
                    </Box>
                ))}
            </Carousel>
            {/* <Box className={classes.logoContainer} sx={{top: logoPosition.top, bottom: logoPosition.bottom}}>
                <svg
                    className={classes.logo}
                    version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="4134.000000pt" height="4134.000000pt" viewBox="0 0 4134.000000 4134.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g id="Selection" transform="translate(0.000000,4134.000000) scale(0.100000,-0.100000)"
                        fill={logoFillCOlor} stroke="none">
                        <path d="M18615 40491 c-44 -26 -100 -59 -125 -73 -25 -14 -83 -49 -130 -76
                        -47 -28 -121 -71 -165 -97 -44 -25 -89 -51 -99 -58 -75 -47 -126 -77 -131 -77
                        -3 0 -42 -22 -86 -50 -44 -27 -83 -50 -85 -50 -2 0 -40 -22 -84 -50 -44 -27
                        -82 -50 -84 -50 -2 0 -46 -25 -97 -56 -52 -31 -107 -64 -122 -73 -16 -9 -92
                        -54 -170 -100 -78 -46 -151 -89 -162 -95 -20 -11 -476 -279 -505 -297 -22 -13
                        -219 -128 -265 -154 -41 -23 -338 -198 -365 -214 -20 -13 -310 -183 -335 -197
                        -11 -6 -83 -49 -160 -95 -165 -97 -300 -177 -335 -196 -14 -8 -41 -24 -61 -36
                        -20 -12 -151 -89 -290 -171 -140 -82 -328 -193 -419 -246 -91 -54 -190 -112
                        -220 -129 -57 -33 -62 -36 -147 -88 -30 -18 -55 -33 -58 -33 -2 0 -59 -33
                        -127 -73 -168 -100 -595 -352 -1483 -872 -27 -17 -58 -34 -67 -40 -70 -41
                        -638 -375 -668 -392 -21 -12 -68 -40 -105 -62 -37 -23 -69 -41 -71 -41 -2 0
                        -34 -19 -71 -42 -64 -38 -193 -114 -273 -160 -19 -11 -71 -42 -115 -68 -100
                        -60 -968 -570 -1130 -663 -66 -38 -127 -75 -136 -83 -8 -8 -19 -14 -22 -14 -4
                        0 -28 -13 -54 -29 -27 -15 -127 -74 -223 -131 -96 -56 -238 -140 -315 -185
                        -77 -46 -158 -93 -180 -105 -22 -12 -87 -50 -145 -85 -224 -133 -386 -229
                        -420 -247 -19 -11 -100 -58 -180 -105 -287 -170 -416 -246 -485 -286 -38 -22
                        -86 -50 -105 -62 -19 -12 -69 -41 -110 -65 -41 -24 -109 -64 -150 -88 -41 -25
                        -95 -56 -120 -70 -25 -14 -53 -30 -63 -36 -16 -10 -17 -375 -15 -7481 l3
                        -7470 12692 -3 12691 -2 109 155 c59 85 164 235 232 333 69 97 149 213 180
                        257 30 44 102 148 159 230 58 83 127 182 154 220 27 39 107 153 178 255 71
                        102 159 229 197 283 37 54 100 142 138 197 156 222 260 373 263 381 2 5 -5292
                        10 -12435 11 l-12438 3 -5 5653 c-3 3109 -2 5661 1 5670 4 9 35 33 70 53 35
                        20 141 80 234 134 94 54 238 137 320 185 83 48 195 113 250 145 55 32 114 65
                        130 75 17 9 75 43 130 75 255 148 360 208 403 232 26 14 52 29 57 33 6 4 30
                        19 55 33 25 13 128 73 230 132 102 59 203 118 225 130 22 13 81 46 130 75 50
                        29 104 60 120 70 17 9 107 61 200 115 94 54 242 140 330 190 88 51 205 118
                        260 150 55 32 114 66 130 75 17 10 100 58 185 107 495 287 610 353 1035 598
                        94 54 187 109 207 121 21 13 40 24 43 24 3 0 22 11 43 23 31 20 232 137 337
                        197 17 9 74 42 128 73 249 145 595 345 647 374 19 11 59 34 88 52 29 17 55 31
                        58 31 2 0 40 23 84 50 44 28 82 50 84 50 3 0 42 22 88 49 46 26 144 83 218
                        126 74 43 152 89 172 102 21 12 39 23 42 23 2 0 61 34 131 75 69 41 128 75
                        131 75 2 0 41 23 85 50 44 28 82 50 84 50 3 0 37 20 77 43 74 44 179 105 246
                        142 21 11 48 27 62 36 14 9 106 62 205 119 99 57 240 139 313 182 73 43 135
                        78 138 78 2 0 33 18 69 40 36 22 67 40 70 40 3 0 28 15 57 34 29 18 80 48 113
                        66 128 71 152 84 202 117 29 18 55 33 58 33 3 0 23 11 45 25 21 13 74 44 117
                        68 43 24 150 85 238 137 318 185 380 220 393 220 7 0 42 -18 78 -40 36 -22 68
                        -40 70 -40 2 0 40 -22 84 -50 44 -27 82 -50 84 -50 3 0 62 -34 133 -76 170
                        -102 295 -174 300 -174 2 0 32 -17 66 -38 34 -21 96 -58 137 -82 41 -24 109
                        -64 150 -88 41 -25 95 -56 120 -70 25 -14 62 -36 82 -49 21 -12 40 -23 43 -23
                        3 0 34 -17 68 -38 34 -21 94 -57 132 -79 274 -159 407 -236 520 -303 72 -42
                        207 -121 300 -175 94 -54 233 -135 310 -180 77 -46 194 -114 260 -152 66 -39
                        147 -86 180 -106 106 -62 545 -318 703 -409 84 -48 171 -100 193 -114 23 -14
                        62 -37 87 -51 26 -14 99 -56 162 -93 63 -37 210 -123 325 -190 116 -67 251
                        -146 300 -175 139 -81 592 -345 665 -387 19 -11 60 -35 90 -53 63 -38 457
                        -268 510 -298 19 -10 139 -80 265 -154 127 -74 282 -165 345 -202 63 -37 203
                        -119 310 -181 107 -62 223 -130 257 -152 34 -21 65 -38 68 -38 2 0 49 -26 102
                        -59 98 -59 426 -251 495 -289 20 -12 54 -32 75 -45 21 -13 60 -36 86 -50 70
                        -40 426 -247 467 -272 19 -12 53 -32 75 -45 22 -13 110 -63 195 -113 85 -49
                        169 -98 187 -108 17 -10 49 -29 70 -42 21 -13 45 -27 53 -31 8 -4 24 -12 35
                        -19 12 -7 52 -31 90 -53 39 -23 108 -64 155 -91 l85 -50 3 -4476 2 -4477 1078
                        0 1077 0 -2 5152 c-2 4153 -5 5154 -15 5161 -84 50 -204 120 -248 144 -30 17
                        -120 68 -200 115 -80 47 -174 102 -210 122 -36 20 -139 80 -230 133 -91 53
                        -221 128 -290 168 -69 39 -170 98 -225 130 -55 32 -120 69 -145 83 -25 14 -68
                        40 -97 59 -29 18 -54 33 -56 33 -2 0 -82 46 -178 101 -96 56 -223 130 -284
                        164 -60 35 -189 109 -285 165 -154 90 -376 219 -466 270 -183 105 -328 190
                        -371 217 -29 18 -54 33 -56 33 -4 0 -144 81 -517 298 -203 118 -263 152 -267
                        152 -2 0 -22 12 -45 26 -23 15 -112 67 -198 116 -85 49 -159 93 -165 98 -5 4
                        -37 22 -70 40 -59 32 -105 59 -385 222 -137 81 -251 147 -625 363 -336 194
                        -413 239 -500 290 -49 29 -112 65 -140 80 -27 16 -62 35 -77 44 -26 16 -64 38
                        -363 211 -82 48 -220 128 -305 178 -85 49 -175 101 -200 115 -25 14 -103 59
                        -174 101 -70 42 -130 76 -131 76 -2 0 -61 34 -130 75 -70 41 -129 75 -130 75
                        -2 0 -64 35 -137 78 -142 84 -555 324 -625 363 -69 39 -225 130 -273 159 -43
                        26 -110 64 -450 260 -80 46 -208 121 -285 166 -77 45 -156 91 -175 102 -114
                        64 -321 184 -480 277 -58 34 -127 74 -155 90 -27 15 -102 57 -165 94 -63 37
                        -207 121 -320 186 -113 66 -270 157 -350 204 -80 46 -174 100 -210 119 -36 19
                        -72 40 -80 47 -8 7 -44 28 -80 48 -36 19 -96 53 -135 76 -38 23 -77 41 -85 41
                        -8 -1 -51 -22 -95 -49z"/>
                        <path d="M15130 16409 c-511 -53 -948 -313 -1226 -730 -165 -247 -240 -496
                        -251 -824 -6 -204 9 -353 52 -521 146 -561 576 -991 1133 -1133 196 -50 465
                        -71 677 -52 438 40 773 190 1063 476 67 67 122 126 122 131 0 6 -53 51 -118
                        101 l-118 90 -110 -106 c-210 -202 -436 -323 -711 -378 -136 -27 -462 -25
                        -600 5 -283 61 -483 170 -684 371 -266 265 -380 548 -380 940 0 387 120 683
                        380 941 193 191 416 312 686 371 132 29 368 36 513 15 323 -48 552 -164 782
                        -395 l126 -126 114 88 c63 48 116 91 118 96 7 20 -141 183 -248 272 -137 115
                        -346 229 -528 289 -236 76 -529 106 -792 79z"/>
                        <path d="M32320 16410 c-195 -25 -353 -71 -526 -155 -401 -194 -693 -532 -834
                        -963 -62 -192 -75 -284 -75 -537 1 -190 4 -234 24 -325 66 -308 194 -547 415
                        -778 144 -149 286 -255 451 -337 204 -101 369 -146 608 -167 160 -14 358 -2
                        514 32 598 127 1093 616 1231 1215 75 326 47 712 -74 1014 -155 388 -509 738
                        -899 890 -193 76 -371 110 -600 116 -88 2 -194 0 -235 -5z m480 -319 c401 -93
                        731 -347 910 -701 100 -199 135 -356 135 -610 0 -198 -11 -271 -62 -434 -104
                        -331 -357 -623 -670 -772 -178 -84 -331 -122 -529 -131 -306 -13 -561 56 -800
                        218 -99 67 -258 220 -335 322 -318 428 -334 1074 -36 1529 209 320 545 538
                        922 598 97 15 367 4 465 -19z"/>
                        <path d="M7870 14790 c-404 -853 -736 -1556 -738 -1561 -2 -5 67 -9 170 -9
                        l173 1 240 509 240 509 681 1 681 0 244 -510 244 -510 167 0 167 0 -69 148
                        c-38 81 -366 782 -729 1557 l-660 1410 -38 3 -38 3 -735 -1551z m1039 327
                        c143 -304 261 -556 261 -560 0 -4 -239 -7 -531 -7 -502 0 -531 1 -525 18 19
                        50 522 1102 527 1102 3 0 124 -249 268 -553z"/>
                        <path d="M10900 14780 l0 -1560 155 0 155 0 0 720 0 721 92 -3 91 -3 561 -717
                        560 -718 195 0 c184 0 193 1 179 18 -9 9 -262 332 -563 717 l-547 700 93 7
                        c260 20 405 49 534 107 181 82 326 237 397 423 73 192 66 477 -16 663 -55 123
                        -181 264 -305 339 -197 120 -400 145 -1168 146 l-413 0 0 -1560z m1220 1226
                        c107 -24 193 -69 259 -135 199 -200 203 -519 9 -726 -144 -155 -306 -187 -890
                        -177 l-288 5 0 529 0 530 418 -5 c341 -4 431 -7 492 -21z"/>
                        <path d="M17590 14780 l0 -1560 155 0 155 0 0 755 0 755 800 0 800 0 0 -755 0
                        -755 155 0 155 0 0 1560 0 1560 -155 0 -155 0 0 -650 0 -650 -800 0 -800 0 0
                        650 0 650 -155 0 -155 0 0 -1560z"/>
                        <path d="M20780 14780 l0 -1560 155 0 155 0 0 1560 0 1560 -155 0 -155 0 0
                        -1560z"/>
                        <path d="M21760 16185 l0 -155 350 0 350 0 0 -1405 0 -1405 160 0 160 0 0
                        1405 0 1405 350 0 350 0 0 155 0 155 -860 0 -860 0 0 -155z"/>
                        <path d="M24190 14780 l0 -1560 890 0 890 0 0 155 0 155 -735 0 -735 0 0 610
                        0 610 735 0 735 0 0 155 0 155 -735 0 -735 0 0 485 0 485 745 0 745 0 0 155 0
                        155 -900 0 -900 0 0 -1560z"/>
                        <path d="M26470 16185 l0 -155 350 0 350 0 0 -1405 0 -1405 160 0 160 0 0
                        1405 0 1405 350 0 350 0 0 155 0 155 -860 0 -860 0 0 -155z"/>
                        <path d="M28590 16185 l0 -155 350 0 350 0 0 -1405 0 -1405 160 0 160 0 0
                        1405 0 1405 350 0 350 0 0 155 0 155 -860 0 -860 0 0 -155z"/>
                        <path d="M7915 10611 c-256 -42 -459 -186 -560 -396 -60 -125 -79 -218 -73
                        -364 12 -276 133 -463 469 -727 69 -54 197 -155 284 -224 275 -216 447 -406
                        506 -557 31 -80 37 -219 14 -299 -66 -230 -267 -385 -520 -401 -110 -7 -183 7
                        -273 52 -132 67 -253 190 -363 370 -29 47 -56 85 -62 85 -9 0 -217 -122 -245
                        -143 -10 -8 -6 -20 14 -56 101 -173 253 -354 370 -437 85 -61 214 -119 320
                        -146 125 -31 343 -31 459 1 166 45 299 125 426 258 247 258 296 600 133 923
                        -107 213 -264 369 -705 701 -266 200 -349 272 -414 364 -72 101 -89 153 -89
                        280 -1 99 2 116 26 167 52 112 162 199 287 228 73 17 210 8 286 -19 112 -40
                        231 -138 351 -291 l46 -59 119 90 c65 50 122 95 125 100 3 5 -20 42 -52 82
                        -181 225 -328 333 -531 392 -96 28 -260 40 -348 26z"/>
                        <path d="M26600 10610 c-195 -25 -353 -71 -526 -155 -401 -194 -693 -532 -834
                        -963 -62 -192 -75 -284 -75 -537 1 -190 4 -234 24 -325 66 -308 194 -547 415
                        -778 144 -149 286 -255 451 -337 204 -101 369 -146 608 -167 160 -14 358 -2
                        514 32 598 127 1093 616 1231 1215 75 326 47 712 -74 1014 -155 388 -509 738
                        -899 890 -193 76 -371 110 -600 116 -88 2 -194 0 -235 -5z m480 -319 c401 -93
                        731 -347 910 -701 100 -199 135 -356 135 -610 0 -198 -11 -271 -62 -434 -104
                        -331 -357 -623 -670 -772 -178 -84 -331 -122 -529 -131 -306 -13 -561 56 -800
                        218 -99 67 -258 220 -335 322 -318 428 -334 1074 -36 1529 209 320 545 538
                        922 598 97 15 367 4 465 -19z"/>
                        <path d="M10430 8990 c-404 -853 -736 -1556 -738 -1561 -2 -5 67 -9 170 -9
                        l173 1 240 509 240 509 681 1 681 0 244 -510 244 -510 167 0 167 0 -69 148
                        c-38 81 -366 782 -729 1557 l-660 1410 -38 3 -38 3 -735 -1551z m1039 327
                        c143 -304 261 -556 261 -560 0 -4 -239 -7 -531 -7 -502 0 -531 1 -525 18 19
                        50 522 1102 527 1102 3 0 124 -249 268 -553z"/>
                        <path d="M13570 8980 l0 -1560 760 0 760 0 0 155 0 155 -605 0 -605 0 0 1405
                        0 1405 -155 0 -155 0 0 -1560z"/>
                        <path d="M15750 10533 c0 -5 301 -705 668 -1558 l667 -1550 35 0 35 0 677
                        1550 c373 853 678 1553 678 1558 0 4 -75 7 -167 7 l-168 -1 -525 -1199 c-288
                        -660 -527 -1200 -530 -1200 -3 0 -238 539 -521 1198 l-515 1197 -167 3 c-92 1
                        -167 -1 -167 -5z"/>
                        <path d="M19900 8990 c-404 -853 -736 -1556 -738 -1561 -2 -5 67 -9 170 -9
                        l173 1 240 509 240 509 681 1 681 0 244 -510 244 -510 167 0 167 0 -69 148
                        c-38 81 -366 782 -729 1557 l-660 1410 -38 3 -38 3 -735 -1551z m1039 327
                        c143 -304 261 -556 261 -560 0 -4 -239 -7 -531 -7 -502 0 -531 1 -525 18 19
                        50 522 1102 527 1102 3 0 124 -249 268 -553z"/>
                        <path d="M22730 10385 l0 -155 350 0 350 0 0 -1405 0 -1405 160 0 160 0 0
                        1405 0 1405 350 0 350 0 0 155 0 155 -860 0 -860 0 0 -155z"/>
                        <path d="M29480 8980 l0 -1560 155 0 155 0 0 720 0 721 92 -3 91 -3 561 -717
                        560 -718 195 0 c184 0 193 1 179 18 -9 9 -262 332 -563 717 l-547 700 93 7
                        c260 20 405 49 534 107 181 82 326 237 397 423 73 192 66 477 -16 663 -55 123
                        -181 264 -305 339 -197 120 -400 145 -1168 146 l-413 0 0 -1560z m1220 1226
                        c107 -24 193 -69 259 -135 199 -200 203 -519 9 -726 -144 -155 -306 -187 -890
                        -177 l-288 5 0 529 0 530 418 -5 c341 -4 431 -7 492 -21z"/>
                        <path d="M32500 8980 l0 -1560 890 0 890 0 0 155 0 155 -735 0 -735 0 0 610 0
                        610 735 0 735 0 0 155 0 155 -735 0 -735 0 0 485 0 485 745 0 745 0 0 155 0
                        155 -900 0 -900 0 0 -1560z"/>
                        <path d="M8670 4806 c-215 -33 -348 -74 -525 -162 -165 -81 -291 -171 -425
                        -304 -299 -296 -450 -636 -475 -1070 -21 -356 76 -734 261 -1017 317 -487 800
                        -733 1439 -733 476 0 873 139 1183 414 86 76 203 206 199 221 -4 12 -238 194
                        -251 194 -4 1 -57 -46 -117 -103 -255 -245 -521 -367 -865 -396 -339 -29 -685
                        57 -935 232 -96 68 -237 204 -308 299 -108 143 -199 353 -232 539 -20 110 -18
                        402 4 512 76 379 293 683 628 879 394 230 924 246 1334 41 168 -84 315 -200
                        436 -344 l47 -57 131 100 c72 55 131 104 131 109 0 19 -155 192 -228 256 -217
                        186 -465 306 -765 370 -106 23 -152 26 -352 29 -157 3 -257 0 -315 -9z"/>
                        <path d="M12565 4728 c-3 -7 -4 -713 -3 -1568 l3 -1555 168 -3 167 -2 0 1570
                        0 1570 -165 0 c-123 0 -167 -3 -170 -12z"/>
                        <path d="M15747 3188 c-404 -854 -737 -1560 -739 -1568 -3 -13 24 -15 182 -18
                        l185 -2 241 507 241 508 666 3 666 2 15 -22 c7 -13 118 -242 246 -510 l233
                        -488 178 0 c137 0 179 3 179 13 -1 6 -328 712 -729 1567 l-728 1555 -50 3 -50
                        3 -736 -1553z m1042 304 c138 -292 251 -534 251 -537 0 -3 -229 -5 -510 -5
                        -280 0 -510 2 -510 4 0 5 483 1025 502 1059 5 10 11 17 13 15 1 -1 116 -243
                        254 -536z"/>
                        <path d="M20190 3170 l0 -1570 175 0 175 0 0 1161 c0 786 3 1158 10 1154 6 -4
                        465 -526 1021 -1161 l1011 -1155 47 3 46 3 0 1565 0 1565 -167 3 -168 2 0
                        -1177 0 -1176 -22 21 c-13 12 -475 541 -1028 1176 l-1005 1155 -47 0 -48 1 0
                        -1570z"/>
                        <path d="M24790 4575 l0 -165 348 -2 347 -3 3 -1402 2 -1403 170 0 170 0 2
                        1403 3 1402 348 3 347 2 0 165 0 165 -870 0 -870 0 0 -165z"/>
                        <path d="M28595 4728 c-3 -7 -4 -713 -3 -1568 l3 -1555 168 -3 167 -2 0 1570
                        0 1570 -165 0 c-123 0 -167 -3 -170 -12z"/>
                        <path d="M31777 3188 c-404 -854 -737 -1560 -739 -1568 -3 -13 24 -15 182 -18
                        l185 -2 241 507 241 508 666 3 666 2 15 -22 c7 -13 118 -242 246 -510 l233
                        -488 178 0 c137 0 179 3 179 13 -1 6 -328 712 -729 1567 l-728 1555 -50 3 -50
                        3 -736 -1553z m1042 305 c138 -293 251 -535 251 -538 0 -3 -229 -5 -510 -5
                        -280 0 -510 2 -510 4 0 5 483 1025 502 1059 5 10 11 17 13 15 1 -1 116 -243
                        254 -535z"/>
                    </g>
              </svg>
            </Box> */}
        </Container>
    )
}

export default Home;