const courseModel = {
    courses: [
      {
            id: 1, // Unique identifier for the course
            name: ' React Native',
            instructor: 'John Doe', // Name of the course instructor
            description: 'Learn the basics of React Native development and build your first mobile app.',
            enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
            thumbnail: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAQEA8VFRUPDxAQEBUQEBUXFxAQFREYFxUZFRUYHCgsGB0lHRUVITIhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy8mICUtLS0tLy0tLS0vLSstLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBQYHBAj/xABGEAABAwIDBgQCBgcFBwUAAAABAAIDBBEFEjEGEyFBUWEHInGBMqEUQlJikbEVI3KCksHhM6KywtFTY3SDw9LwJDQ1Q3P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMhEAAgIBAgQDBwQBBQAAAAAAAAECAxEEIRIxQVEFE2EicYGhsdHwMpHB4RQjM2Ky8f/aAAwDAQACEQMRAD8A1pERfTHyIREQBERAEREAREQFQpBQCmFJUqFUIFUKSrJBSCiFIIZskFMKjVNqsjNklcCthXAhmyYUwohTapMmSCmFBquBSZskFdCthXAhmyQUwoBTCkzZcCmFAKYQzZUKYUQphGijKhVVAqoVCIiEBRMjRqUnflaT0BWtCcyea/M2VHLfBvTQ7MvoYhERZn0gREQBERAEREAREQFQpBRCmFJVgKQVApBSUZUK4FAKQQzZMK4FbCuBWM2SCuBWwroUmbJBXAoKbUM2SCuNUQpBSZMmFMKAV0IZsqFcCgFcCkzZIKYUAphDNlQphRCkEKMqFVAiFQiIgMVtJU5ISBq/yj1KxcLMrWt6ABTxuXeVDGco/wBYfbT5lFjHeTfwPWqjw1RXff7GHREUHqhEVmsnDGF3QI3glJt4R76Chlnfu4Y3SO1swXsOp6e6ydRsfiEbczqR9tfKWu+TSVuzZRgeEMcyNrqmoyk5vrTObmOa31WDhbt3Wn0/ili0T80scMzebQwsPs4E29wVwf5Vsvarj7PxPS/w6YYjZP2voa85pBIIIINiCLEHuFRdOw/HcJx4bqRm5qbcGuIEgP8Au36SDsfwWnbU7Lz0D/P5onGzJGjgezh9UrenVRsfC9n2+3c579HOpcS3j3+5gldpad8rwyNjnuOjWNJP4BbLshsVLW2mlJip9Q63mmH3AdB94+11sWI7Y0OGNNNhtO2V7eDy02YHD7cnEyH0/EKtmqSfBWuJ/QtVo248dr4V8zVG7GYllzfRH2tf42X/AIc1/ksLNC6NxY9pa5ps5rhYg9wsxUeKGLxvEhEBYHXMYiIBb0zXuPVbdtnDDiGGwYnC2zskbj1yO4Frupa4/mqQ1NimoWxSz+ItZpKpVudMm8dzm4UgohTC7zy2yQUgohTapMmSCuKAUwpM2TCuBQCmFJmyYUgohTahmyYUwoBXApM2TCmFEKQUmTJNVwKAVwIZsqFcCiFIKUUZIKoQKoUGZVERCAozPytJ6BSWL2jqckJtq/gPUqs5cKbNKoOc1FdTCUr87pJD9eQgfss/rdelW4I8rWt6AD35q4qQWIpHryeXt+dDDoiKp6AXlqGh0sDDo+eJrr8wZACvUsdi8hZkkGsb2vHq03H5LO7/AG2bafHmxydZ8Y3m9G3laZ3v5AubELp3i0wSU9HUN0LnC/aRgcP8JXMbrLRb0Rx6/Vmuv21Es+n0PFWUIPnacrmnMC02II0II0K7N4a1lXX4c5uIwtfHfJFJJa9TGNS5tuRFs3P2udG2N2XfiFTlka5tPFZ0ziCN50Y09+ZGg9ls3iXPVzRGgoYJWwsAbK6KNwElhwjaQPhHC9tdPXk1SjOfBDn1Z3aPjrr455w+SPT4pV9XExkMbclM9uVz4zxe6x8ht8IsNOfyXMWtA0XUdhayorqSSgxSllD42WbLLE4CWMcGnMRwkabeuvVaHj+By0U74ntJDTdjwOD2H4Tfl6LbQzjjy+TXzMPEYSyrM5T+Xp8TDVbLscOy6P4fuz7M1DXaR/S2t9B5x8yuc1LvI70XSdlI9xsu9x1nbM713kpa35WTWr2oe9fUeHP2Zv0/g5+FIKIUwvQPG6EgptUAphSZsm1TCiFJqkzZMK4FbCuhSZskFMKDVcapM2SCmFEK4EM2TCkFAK4FJkyYUwoBTCGbJBSCoFUIUZMKoQIEKFUREIC1rG5d5UMZyZ+sPtp87LY5X5Wk9AtTpn53ySH6z8o/ZZ/W6ym8tR/Nju0Ud5T7L5v+snoREVjrMOiLIbO4PJX1LaeI24Z5XkXEUY59ydAFjOaguKXI9WEJTkox5nlo6WSZ4jhjc950awXP9B3W40XhVNOy9ZMIW6lsdnvt3do35rOYrjlHgsf0WjiEk5AL7nnydK/UnjcNHyC5zjuN1ldf6TUOLTpGw5Ix+6Nfe5XFx3Xr2FiPrzZ3qujTv23xS7Lkjs8sFEMPDZCKiCiYMxuJDeFtjfLq4DktSpfESgE8VPQ4a975XiOO0ccQJPO/E25nhoFh/BDEmtkrMNktlkbvogefDLKPwyH2Kz+xmyww+atrargITJHASP8A6RxMg7uFgPQ9VwcMYqUZN5XJdz01JycZRSw+b7YM1t1tf+jWRiOISzSm4YXWDWDVxIHXgP6LSX+LNfyooR6veVrmPYtJWVT5nAl0rw2Ng4kNvZjB/wCakrfsE8MmGMOrJHZ3AEsjIAZ2LiDmK6np6KorzXv6HGtTqL5vyf0+pgXeL9c0EuoYT6SPH+q3/Zraptfhxq4Ys0jGuEkAeLiZouWBxHPkTrcLTtrPDvcRPmpnue1rS6Rj7Zg0DiWka26WWoeH20BwzEWh7rU9WWxS8eDHE+ST2PA9iVlbTXKHHV8Taq+2NnBds+hurfEDBqtwiq6F7HSPDLSU7H3e45QLsJOp6LccYwekfTR4fvBC0hu5Y1zQcsZFg1rtQCQtcr9hw/HKeqawbjzVUmlhUMIyj3c4O/dctS8U5m1lcQHeWlbumWOjwbvI734fuqtdbnNeU+Sz7ibbVXW3alu8bdUZTGfD2rhBdCRM0fZFnAfsnX2K1NzC0lrgQQbEEWIPcK5ge2OJ4cQBKZ4RrFOS6zfuv1b8x2XRKaeg2gp3Pj/V1EbRmDgM8RtwDrfGy/P8tF2x1VlT4blt3R509FVcuKh79n/D/PgcxqKgRi5XUYfDeFzWu+kO8zQf7NvMLlG11I+DeRSCzmOLXDv27c13nHqWabDnx07nCV8LAwxvyOB4aPuLc+ajV3zjOKhLGR4fpapwlKyOWunuya+/w2jtwqXX7xg/zWq7RbOy0T2h5D2Ovkc0WBI1BHIq/gWy2PR11NI6pnETJmOm31aZGuhDgXtyF7rki404XW1eKNVGylY1xGYyh7RzytaQT8wqUai1XKEpcSZfU6OiWmlZGDi0ts5Xww+5zgKYW47JbLwvpRWVhsx7N61pdla2G1w57h1HHXRZGHA8Mr4XPoZG3aS3NG9xAeOT2u0+S6nr6lLG/vxsedHwfUShxbZ7Z3+xoAUwvdguFOnr/objkMed0p5taw2IbfUkkfmt0losGhnZRyGMTSWyMfK/O6+nG/Am3AcFe3W11y4d37tzCjwq++PEsJf8sr+GaAFcath2zwSOkDZYyQxxIcHG9iBcWJ1B469F6tldnYpKYVVVwY9pkYC7KGxfae7uOOuil6ypVqzPP9zJeF6iVzpSWVzedsfnpk1cK9TROke2ONpc53wtbqba+i3SgoMKrmPNI9rt2crnROcSxx0u13W3TisPsRRwR4hUR1D2iqpnlkLN7YvidHdzmx38wsQb24XWMvEYcDcVv2Z0w8Bu81Rsa4X1T+W65nmxfCXUu7EjgXPBcRyHG1r814At+2ogpnMJlc3eNicYgX2Pawvx4rQAt9He7a8vn1/o4PFtEtLdwx/S91vl9Ofx/OhIL3bMwR1dRJAXlpjj3nAX+sB/NeIK94Yf/LVf/Cf9VqjW2yrqzHmR4Ppq9RqVGxZXY9+0lCykc0ZyQWXJdYdllMH2YMkbZJnFucBzWW8wHLMTp6LBeMMzmPhcBcBrS4faAcSR7rd6yKPEaIbmoc1k7GuY+FxBtrY2OnIj2XBbq7VXBJ4yt2e3p/CNNK+6TjlReFHO3Jev123PHNsiwjySFp5XaP5LVaqmdE90bhZwNj/qOy9WB7PYnhUsroXCqhkbbdOmc0tcDfM0OB42vwB437KOMV753hz4t24Wa5tzrx1uO/yW+ittlJqT4l3/ADc4fGtJpaqoyhBwnnlh4a/65XpzNd2hqckLrau4D1KxFPHlY1vQC/rzV3HJc9RHFyZ+sd7afOyou1byb+B59MeCqK77/YIiK5cwzjwW/wDgY9rmYja293kQ4/7PI7J7Zs60BUwLGpsKrBVRDMwjJNHewkjPLsRqD1C4NbBzr2PoPD7Iwt3PTWCTeyb6+8zu3ubXPfzX91YXU67CKHHIfpdFM0S2Adfk63wys1a7v+YXPcYwOpo3ETwuaOTtWO9HDgtKNRCxYWz7fYy1GlnU8vdd/ueHZuOZuL0Lqb+0M7RbkY7HeXtyyZl17xVM30Ebv4N63fW1y/V9s1r+y1Twbw4Pnqq+T4YG7mInkSM0p9hlHuVl9iNr24pLiFDU/XfK+nB50p8uUfebwP73ZedbYlf5iW0Wsnq01t6fy295JnP9jZW/prDxJ8Jmda+mfdPyf3svvZfRK+bNrMClpal0dyHwPDo3jgSAbsePkfVb1s74ugRtjr6aTeNFjJThpbJbmWkjKT2uE1lcpT447pkaG2Ea+CWzXM6s+1jfSxvfpbivmXHoWO3hbbKHvy/s3NvkugbTeIrqmJ0NLE6NjwWvfJbO5h1DWgnLfrdYDYnAjiFcxjh+pp8ss/R1j5WfvEfgCtaIOmqU59THU2K+6EK+nX9vsdV2MNX+iKbfW3/0byZr/ZO6z97Zb+64zNmzuz3zZnZ7657+a/e910XEdvN3jtPRtcPo9jTSHhY1LyMp9GkNb+85YPxIwwQVrngWbUN3g6Z72cPxsf3k0EuGbi+qyvgR4pHjrU4v9Lw/j1/c1W19V6dh6eZmNUhpr8XHfW0+j2/WZu2nvZZPBdk6yqIyRljDrJIC1tvujV3t+K3S9DgULmsIlqpW8b2zv6ZvsRgjT8yttXbGS8uO8voc2honCXmz9mK79TTvG7L9K8tr7lme32vNr7ZV1DaHEJabDZJ4A0yRQMcwSAlpPAcQCL69VwvaiaWpzyPOZ8ji5x7np0HJdFxDbulq6KSnZFM1zo2sBkY0C4t0cei57tPLihDGcYTOrT6uHBbblLLbWfkZnw522/SUcjJWtjqIP7RjL5XsOj2AkkC/AjjY+q0bxYw+enc575HyNkBLHvNy0DVva3bqtbgmmoayKspvijd5m8pIz8bD2I/keS6BtFtdQYnRyU7opmuIzRucxvklA4Hg7TkexURqnTa1FZT2Er6tTQpSkk087v8AP/cG51k1MMND5256cU0TnBjS68eVvJuo0KweyeMYWBM7DqWYAlglMVNKRfjlv8/xWqbD7fmigbRV0L3xxDJDJG0OIi5Me0niBoCOVhbmtnZt3QxRltDAbuJIAhETA483aE+w5LnVFmeDhefkdb1VSXmcaSx8fqYZuBQYpjNS452xwiJ8gILXFxY0Btjxbchx9u6zktfhNFiENIyjL6l8kUYeI85jLgC0ulkN+DSDwubLQ8F2lnoMQmqpGOlZVC1QG2zXvcOZfhwueHQrdMQ8QMOH/qYaR8tQG5WkwhjmjoZHaD0utLYWcXDh4SxsYaa2ng41JZbbecdXyXYueM7yMPbb/af5Ss3WRCXCA2PiHUkJbbm3K0n5XWqbV7Q02J0bomMlY8EObvGgcdDexPIlYvYjbp+HxNo6yF7447iGSIAuYy98rmki4HIjQcLJ5VkYRk48ny+IeppnbZWp4yksp+jX7otbL7OyyPmNHK5nBm+DJC0O1yh3X62vdXtmcPdT7QwxyCzxFNm8wN7w3HH0W2x7d0QYRTRPJNzYxbtubq5x/kCtAqcTmhxSHEXMMhY55ka3gXNfGWENvpYO4egXRLzLITfBhdO+Tgh5FF1UXa5SXPf2Uvd35dehvm37BvoD9xw/vLV3OAFzyW1u2zoamJwY1+dzC0byLKW5hb4ifyK1OaPM0t6rs0MpeSotYx8zxvG4QWqc4zT4t3jpsl36me2dwNtbAJ2TBrS57bZLkFpsb8Qsf4ZxuGLVtwfJThjuHwuMosD38p/BYnY7aWTC3ywTQvfTyPztMds0TyLEgH4gbDhflzW9R7d0jheKOVzncjEWcfvOP9V59877G62s77ctvz1Pc0dGhoUL4TSwvay+fLu9sb7JbmO2/wBy+qghlcGiUMjuRexcSBw914arZOswuIyYfWyG77yRlgMdiDxyG/O1z3WG2vp31uZ54PJuLfVtoB6LNbO+JDo42w4hBIXsGXfRNDhIBze24IPpe/ZX1FdkFBNZSSyZaHU6e+ds4y4ZSbw2+W2E8Zx0z8j2bD7ZVtVVGkqadhyxueZoQ4BtrWztJI49iPRe3bpoY5j+bmuv3tayus28oyP1UcrieW6LBfuXW/mtQ2yxp8kbnv4FwysaOXDgB11UaSuSsdvDiKyPFtRXLTLTOanOTXLph5b69Nub5mr07s75ZT9aTdj0b/X8l6Vbp48rGt6Dj68/mri9aCxFJnizazsERFYqYdRewEWKkizPSPNSiellE9JM6J45sNrjo4aOHYrecK8XZGM3eJUgkFrOfAB5h96N5sfYj0WnrxYpGXhsY1kc1g9XGw/Ncd+lracjv02rtUlHJ9AZ8PZQA5mUtPWNuLlsPGZt+fBriFq1N4b0zaiKroMRc2SJ4ew/q5GnqDlIuCCRbuo+MLGimo6a3lDnOA//ADYGt/xFcqbhzW8WEtP3SR+S5KdNZOvMXszuv1VVdvDKO66neNtNlBXtjc1zWSx8A4g2cw6tNu/Ee/Vac7wtquU8J/j/AO1atsNtfNhlZlqJXvpp7Nk3j3O3J5Pbc8Lcx09FuXiRh1bHeuo6+oEEgDpGx1D8sdxwewA8GHhpp7qK7Lqn5Sa+Isr09sfOab74POfC2qI/9xEP4z/lW67NbM/QaE08UgEsgc6SbLe8rhbMBccBoB2WvbA0tTTU0mI4lWTuDoyY4ppnuayLXMWE8Xu4WHIeq0LaXFZa6pfO+R7Wu8scbXuDWRj4RYGxPHie6nF2peG1hftkhy0+kjlJpv13/o3aq2BwqFzZauvILHB93TxxecG4NzxvfutrxjGaRlGzEN39IYwNMLo2tcfM4DM0utYXtcrgdTQsyONuNtSunbDP3+zMsZ47j6SwX+4d4PwBH4KL6ZRlF2SzloaW+E4SVUcYW3vMdi/iJW1F2wNbTsPC480hH7WjfYe61fiSXOJc5xu5ziSXHqSdVAKYXq1UQqWIo8G/VWXbzZOyq0IFNb4ORlQFca0dFEK1PMRZreLj8u5RvHMok28I9OQHUBXGADReeNlha9+p6lSRFJRPRYHWyk0N7LyopKuB7muaOYUiWHUhY9EyV8r1MmyRg+sPxCqZYzq4fisWiZI8hdzLMmjGjgpCrj+2Fh0TJV6ddzMmqhOrh81VtXCNHD8D/osKiZH+NHuzN/pCL7X5qLqyE6/4VhkTJH+LDuzMtr4Rp8mrE4xJvnxW+FpzG/O2nD1UEVZLOzNa6o1y4lzCIik0CIiAw6IizPSC8lQ8Nmp3HRtRC436CQEr1rwYxDmjKzuWYM2oeLIt9zq/jGw5qN3K0zffyFc3XUaRzMewiIse0VEGUPDj8EzW5XB3MBw4g+nRa9T+HFe51nZGC/FzpL/gGg3XJpb64VKMnho7NZprJ3OUI5Tx9MfwaPWwNe0g+y634XUtXSYe/wDSD2sgHmgbPwdFF9beFxs1p4WadOPoqU2CYZg4E9XKJZxxYHAE3/3cXL9o6dQtI202mnxO7DeOAG7IgfitoZD9Y9tB81nbnVP/AE1sur/g2qxpF/qPd9F0N28UqSrkZHJGc1PGA5zY73D/ALb+rbaHlxXMgsvsT4gT4bamqw6al0adXwA9L/Ez7vLl0W7VeytBiTDU4dOxpfxIabszdHNHGM9vkrUXqleXYsev3M9TpnqH5tTz6fb7fM5fP8J9F0Lw1bu9nqxzuAkfWFvcGMM4e7SsVUeHOIOO7AYA42L94MoHW1r/ACWw7VyRYdhkOGwuu8sa13XIDd73Dlmd+Z6KdRON04Rg87kaSEtPXOdixsc6CkFEK41emeEyoVwKIVJZQ0XPt3KlvBTdvYrPNlHDiTwA6lVp4ctyeLnfEf5DsoUsJvnf8R0H2B09V6VVLO7Ik8LC/P6CIisZhERAEREAREQBERAEREAREQBERAEREAREQGHREWZ6QRwuLFEQFih39LLvqSofC48CY3WDh0c3Rw7ELOy7X4tI3K+ucBz3bWMP8TRceyxKLF6etvLR0LVXJYUgblxc5xc46ue4ucfUnVVCoqhbJYOdtvdlHxBwsQrNNTywP3lNPJC7rE8tJ9bajsV6gqhVnXGfNCFs4P2WZeDbDF8uV1aSLWvu48345Vj5ZXvcXyPc9zjdznuJLj3JVoKYSumFf6URdqLLf1vJUKYUAp3txWpysk54aLnkoU8Zcd47/lg8h1PdQhZvDmPwA+UfbPX0XuVV7W/QiT4duvX7fcIiK5iEREAREQBERAEREAREQBERAEREAREQBERAEREBh0RFmekEREAREQBVCoFMKSGVCqFQKQUlGVCuBQCkEM5EgrbWmV1vqNPmP2j0CibyOyN4Af2h6DoO6yEbA0AAWA0Ufq931KyfB7yoFuA5aKqIrnOEREAREQBERAEREAREQBERAEREAREQBERAEREAREQGHREWZ6QREQBERAVCkFRFJUkFIIikqyQUJHEkMbq/ry6lEVZciq6v0PfBCGNyj3PMnqVcRFpjGxyNt7sIiIQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=', //Link to the course thumbnail
            duration: '8 weeks', // Duration of the course
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
            ],
            students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
            // Additional enrolled students...
            ],
    },
    {
        id: 2,
        name: ' Redux',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYkTcjm3VWNa2Hcb0Awko3QHCb6ITuRsdcA&usqp=CAU', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ],
      },

      {
        id: 3,
        name: 'Java Script',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYkTcjm3VWNa2Hcb0Awko3QHCb6ITuRsdcA&usqp=CAU', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ],
      },
      {
        id: 4,
        name: ' Next js',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYkTcjm3VWNa2Hcb0Awko3QHCb6ITuRsdcA&usqp=CAU', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ],
      },
      
    ], 
  };
  
  export default courseModel;
  




