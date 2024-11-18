export const API_KEY='AIzaSyDWba-G3pWNI7zICFY7y7EknjqgITW2EiM';

 export const value_convertor = (value)=> {
    if (value>=1000000) {
        return Math.floor(value/1000000)+'M';
    } else if (value>=1000) {
        return Math.floor(value/10000)+'K'
    } else {
        return value;
    }
}
