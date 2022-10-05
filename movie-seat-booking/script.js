const moviesArray = (Array.from(document.querySelectorAll('option')).map( element => element.textContent));
let selectTag = document.body.childNodes[1].childNodes[3];

const getCurrentPriceMovie = () =>
{
    let selectValue = selectTag.value;
    return Number(moviesArray[selectValue].slice(moviesArray[selectValue].indexOf('$') + 1,moviesArray[selectValue].indexOf(')')));
}
let count = 0;
const colorSelected = window.getComputedStyle(document.getElementById('color-selected')).backgroundColor,
    colorNa = window.getComputedStyle(document.getElementById('color-na')).backgroundColor,
    seats = Array.from(document.querySelectorAll('.seating-cinema ul > li')),
    seatClicked = e =>
    {
        if( e.target.style.backgroundColor == colorSelected)
        {
            e.target.style.backgroundColor = colorNa;
            count--;
            document.getElementById('seats-reserved').textContent = count;
            document.getElementById('price-movie').textContent = getCurrentPriceMovie() * count;
            return;
        }
        e.target.style.backgroundColor = colorSelected;
        count++;
        document.getElementById('seats-reserved').textContent = count;
        document.getElementById('price-movie').textContent = '$' + getCurrentPriceMovie() * count;
        return;
        
    };


for (let seat of seats)
{
    seat.addEventListener('click', seatClicked);
}






























/* document.body.childNodes[1].childNodes[3].addEventListener('blur', () =>
{
    let pastValue = tagSelectValue;

    if(tagSelectValue != pastValue)
    {
        console.log(tagSelectValue);
        console.log(pastValue);
        tagSelectValue = tagSelectValue;
        console.log(tagSelectValue);
        console.log(pastValue);
    }


}); */

