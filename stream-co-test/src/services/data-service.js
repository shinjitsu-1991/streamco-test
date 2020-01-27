export default class DataService {
    getData = async () => {
        const response = await fetch(process.env.PUBLIC_URL+'/assets/data/data.json');
        return await response.json();
    };

    sortData = async (dataType) => {
        return await this.getData()
            .then(body => body.entries)
            .then((entries) => {
                return entries.filter((item) => {
                    return (item["programType"] === dataType && item["releaseYear"] >= 2010);
                })
            })
            .then((items) =>{return items.slice(0,21)})
    };
}