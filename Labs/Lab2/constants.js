const weekday = [ // For tests
    "Sunday",       // 0
    "Monday",       // 1
    "Tuesday",      // 2
    "Wednesday",    // 3
    "Thursday",     // 4
    "Friday",       // 5
    "Saturday"      // 6
];

const weekdays2 = [ // For lab-three.js
    "Saturday",     // 0
    "Sunday",       // 1
    "Monday",       // 2
    "Tuesday",      // 3
    "Wednesday",    // 4
    "Thursday",     // 5
    "Friday"        // 6   
];

const weekdayToInt = {
    "Sunday"     : 0, 
    "Monday"     : 1, 
    "Tuesday"    : 2, 
    "Wednesday"  : 3, 
    "Thursday"   : 4, 
    "Friday"     : 5, 
    "Saturday"   : 6
};


const numberToMonthLong = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

/*
Number of days in each month for common year 
Add one day to FEB for leap years, otherwise the same.
*/
const daysInMonth = [
    31, // Jan
    28, // Feb
    31, // Mar
    30, // Apr
    31, // May
    30, // Jun
    31, // Jul
    31, // Aug
    30, // Sep
    31, // Oct
    30, // Nov
    31 // Dec
];

const monthCodes = [
    1, // Jan
    4, // Feb
    4, // Mar
    0, // Apr
    2, // May
    5, // Jun
    0, // Jul
    3, // Aug
    6, // Sep
    1, // Oct
    4, // Nov
    6  // Dec
];

const commonYears = [1585, 1589, 1597, 1601, 1605, 1609, 1613, 1617, 1621, 1625, 1629, 1700, 2029, 2033, 2037, 2041, 2045, 2049, 2053, 2057, 2061, 2065, 2069, 2073,  3069, 3073, 3077, 3081, 3085, 3089, 3093, 3097, 3105, 3109, 3113, 3117];

const leapYears = [1584, 1588, 1592, 1596, 1600, 1604, 1608, 1612, 1616, 1620, 1624, 1628, 1632, 1636, 1640, 1644, 1648, 1652, 1656, 1660, 1664, 1668, 1672, 1676, 1680, 1684, 1688, 1692, 1696, 1704, 1708, 1712, 1716, 1720, 1724, 1728, 
                   1732, 1736, 1740, 1744, 1748, 1752, 1756, 1760, 1764, 1768, 1772, 1776, 1780, 1784, 1788, 1792, 1796, 1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 
                   1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 
                   2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 
                   2176, 2180, 2184, 2188, 2192, 2196, 2204, 2208, 2212, 2216, 2220, 2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268, 2272, 2276, 2280, 2284, 2288, 2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 
                   2328, 2332, 2336, 2340, 2344, 2348, 2352, 2356, 2360, 2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400, 2404, 2408, 2412, 2416, 2420, 2424, 2428, 2432, 2436, 2440, 2444, 2448, 2452, 2456, 2460, 2464, 2468, 
                   2472, 2476, 2480, 2484, 2488, 2492, 2496, 2504, 2508, 2512, 2516, 2520, 2524, 2528, 2532, 2536, 2540, 2544, 2548, 2552, 2556, 2560, 2564, 2568, 2572, 2576, 2580, 2584, 2588, 2592, 2596, 2604, 2608, 2612, 2616, 2620, 
                   2624, 2628, 2632, 2636, 2640, 2644, 2648, 2652, 2656, 2660, 2664, 2668, 2672, 2676, 2680, 2684, 2688, 2692, 2696, 2704, 2708, 2712, 2716, 2720, 2724, 2728, 2732, 2736, 2740, 2744, 2748, 2752, 2756, 2760, 2764, 2768, 
                   2772, 2776, 2780, 2784, 2788, 2792, 2796, 2800, 2804, 2808, 2812, 2816, 2820, 2824, 2828, 2832, 2836, 2840, 2844, 2848, 2852, 2856, 2860, 2864, 2868, 2872, 2876, 2880, 2884, 2888, 2892, 2896, 2904, 2908, 2912, 2916, 
                   2920, 2924, 2928, 2932, 2936, 2940, 2944, 2948, 2952, 2956, 2960, 2964, 2968, 2972, 2976, 2980, 2984, 2988, 2992, 2996, 3004, 3008, 3012, 3016, 3020, 3024, 3028, 3032, 3036, 3040, 3044, 3048, 3052, 3056, 3060, 3064, 
                   3068, 3072, 3076, 3080, 3084, 3088, 3092, 3096, 3104, 3108, 3112, 3116, 3120, 3124, 3128, 3132, 3136, 3140, 3144, 3148, 3152, 3156, 3160, 3164, 3168, 3172, 3176, 3180, 3184, 3188, 3192, 3196, 3200, 3204, 3208, 3212, 
                   3216, 3220, 3224, 3228, 3232, 3236, 3240, 3244, 3248, 3252, 3256, 3260, 3264, 3268, 3272, 3276, 3280, 3284, 3288, 3292, 3296, 3304, 3308, 3312, 3316, 3320, 3324, 3328, 3332, 3336, 3340, 3344, 3348, 3352, 3356, 3360, 
                   3364, 3368, 3372, 3376, 3380, 3384, 3388, 3392, 3396, 3404, 3408, 3412, 3416, 3420, 3424, 3428, 3432, 3436, 3440, 3444, 3448, 3452, 3456, 3460, 3464, 3468, 3472, 3476, 3480, 3484, 3488, 3492, 3496, 3504, 3508, 3512, 
                   3516, 3520, 3524, 3528, 3532, 3536, 3540, 3544, 3548, 3552, 3556, 3560, 3564, 3568, 3572, 3576, 3580, 3584, 3588, 3592, 3596, 3600, 3604, 3608, 3612, 3616, 3620, 3624, 3628, 3632, 3636, 3640, 3644, 3648, 3652, 3656, 
                   3660, 3664, 3668, 3672, 3676, 3680, 3684, 3688, 3692, 3696, 3704, 3708, 3712, 3716, 3720, 3724, 3728, 3732, 3736, 3740, 3744, 3748, 3752, 3756, 3760, 3764, 3768, 3772, 3776, 3780, 3784, 3788, 3792, 3796, 3804, 3808, 
                   3812, 3816, 3820, 3824, 3828, 3832, 3836, 3840, 3844, 3848, 3852, 3856, 3860, 3864, 3868, 3872, 3876, 3880, 3884, 3888, 3892, 3896, 3904, 3908, 3912, 3916, 3920, 3924, 3928, 3932, 3936, 3940, 3944, 3948, 3952, 3956];


module.exports = {weekday, weekdays2, numberToMonthLong, weekdayToInt, daysInMonth,  monthCodes, leapYears, commonYears};