const moviesArray = (Array.from(document.querySelectorAll('option')).map( element => element.textContent));
let selectTag = document.body.childNodes[1].childNodes[3], 
    count = 0;
const getCurrentPriceMovie = () =>
{
    let selectValue = selectTag.value;
    return Number(moviesArray[selectValue].slice(moviesArray[selectValue].indexOf('$') + 1,moviesArray[selectValue].indexOf(')')));
}

selectTag.addEventListener('click', updatePriceAndNumOfSeats);

const seats = Array.from(document.querySelectorAll('.seating-cinema ul > li')),
seatClicked = e =>
{
    if (e.target && e.target.tagName === 'LI')
    {
        if(e.target.classList.contains('color-occupied')) return;
        e.target.classList.toggle('color-selected');
        e.target.classList.contains('color-selected') ? count++ : count--;
        updatePriceAndNumOfSeats()
        return;
    }
}
function updatePriceAndNumOfSeats()
{
    document.getElementById('seats-reserved').textContent = count;
    document.getElementById('price-movie').textContent = '$' + getCurrentPriceMovie() * count;
}
function getNumRandom(min, max) 
{
    let result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
for (let i = 0; i <= 4; i++)
{
    let occupied = seats[getNumRandom(0, seats.length)];
    occupied.classList.add("color-occupied");
}


Array.from(document.querySelectorAll('.seating-cinema ul')).forEach(container =>
    {
        container.addEventListener('click', seatClicked);
    });






























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

