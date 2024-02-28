import React, {useEffect, useState} from 'react';

interface MyDataInterface {
    key: string;
}


const LocalDataSave: React.FC = () => {
    // State to hold your data
    const [myData, setMyData] = useState<MyDataInterface>({key: 'value'});
    // State to hold input field value
    const [inputValue, setInputValue] = useState('');

    console.log(myData);

    // Function to save data to local storage
    const saveDataToLocalStorage = (data: MyDataInterface) => {
        localStorage.setItem('myData', JSON.stringify(data));
    };

    // Function to load data from local storage
    const loadDataFromLocalStorage = () => {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            setMyData(JSON.parse(storedData));
        }
    };

    // useEffect to load data from local storage when the component mounts
    useEffect(() => {
        loadDataFromLocalStorage();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // Function to update data and save to local storage
    const updateData = () => {
        const newData = {key: inputValue};
        setMyData(newData);
        saveDataToLocalStorage(newData);
    };

    return (
        <div>
            <input type={"text"} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <p>Data from local storage:{inputValue}</p>
            <button onClick={updateData}>Update Data</button>
        </div>
    );
};

export default LocalDataSave;
