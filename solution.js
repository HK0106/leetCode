const findNameDays = (day, month, year) => {
    const n = Math.floor((day + 2 * month + (3 * (month + 1)) / 5) + year + Math.floor(year / 4)) % 7;
    console.log(n)
    switch (n) {
        case 0 :
            return 'Chu nhat'
        case 1 :
            return 'Thu hai'
        case 2 :
            return 'thu ba'
        case 3 :
            return 'thu tu'
        case 4 :
            return 'thu nam'
        case 5 :
            return 'thu sau'
        case 6 :
            return 'thu bay'
    }

}

console.log(findNameDays(11,8,2023))