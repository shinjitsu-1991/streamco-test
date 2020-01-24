export default class DataService {
    getData = async () => {
        const data = await fetch('./data.json')
        .then((data) => {console.log(data.json())})
    }
}