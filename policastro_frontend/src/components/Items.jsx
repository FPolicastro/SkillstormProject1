

export default function Items(){

    const url = 'http://localhost:8080/items';

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setItems(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    return(
        <>

        </>
    )
}