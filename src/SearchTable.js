import React, { useState } from 'react'; 
import './SearchTable.css';
const data = [
    { selected: false, address: "Lahore", numRooms: 4 , postcode: 22303, area: 200 ,  type: "flat" },
    { selected: false, address: "ISL", numRooms: 3 , postcode: 20095, area: 350, type: "flat" },
    { selected: false,address: "FSD", numRooms: 1, postcode: 22299, area: 160, type: "flat"},
    { selected: false,address: "Lahore", numRooms: 2, postcode: 22303, area: 250 , type: "Terraced House"},
    { selected: false,address: "ISL", numRooms: 5, postcode: 20095, area: 130, type: "Terraced House"},
    { selected: false,address: "FSD", numRooms: 2, postcode: 22299, area: 110, type: "flat"},
    { selected: false,address: "Lahore", numRooms: 3, postcode: 22303, area: 350 , type: "semi-detached"},
    { selected: false,address: "Karachi", numRooms: 2, postcode: 21107, area: 300, type: "flat"},
    { selected: false,address: "Karachi", numRooms: 4, postcode: 21107, area: 150, type: "Terraced House"},
    { selected: false,address: "ISL", numRooms: 3, postcode: 20095, area: 165 , type: "semi-detached"},
    { selected: false,address: "FSD", numRooms: 2, postcode: 22299, area: 140 , type: "semi-detached"},
    { selected: false,address: "Karachi", numRooms: 1, postcode: 21107, area: 150 , type: "semi-detached"},
  ]

export default function Test(props) {
    const [searchedDataArray , setSearchedDataArray ] = useState(data);
    let searchedData = '' ;
    const [selectedData , setSelectedData] = useState([]); 
    let showData;
    const [selectedType , setSelectedType] = useState('all');
    console.log('search result' + searchedDataArray);
    return(
        <div>
            <div className='main'>
            <div className=''>
                <img src="./assets/images/immoLogo.jpg" alt="" className='logo'  />
            </div>
            <div className='headingDiv'>
                <h4>Property Search Tool</h4>
            </div>
            </div>
            <div className='mainBody'> 
                <div className='leftSide'>
                    <div className='types'>
                    <h5>
                        Property Types
                    </h5>
                        <h4 className={selectedType === 'all' ? 'active' : 'typeHeading' } onClick={()=>{
                            setSelectedType('all');
                        }}>All</h4>
                        <h4  className={selectedType === 'flat' ? 'active' : 'typeHeading' } onClick={()=>{
                            setSelectedType('flat');
                        }}>Flat</h4>
                        <h4 className={selectedType === 'semi-detached' ? 'active' : 'typeHeading' } onClick={()=>{
                            setSelectedType('semi-detached');
                        }}>Semi-Detached</h4>
                        <h4 className={selectedType === 'Terraced House' ? 'active' : 'typeHeading' } onClick={()=>{
                            setSelectedType('Terraced House');
                        }}>Terraced House</h4>
                    </div>
                   
                </div>
                <div className='rightSide'>
                    <div className='searchDiv'>
                        <h5>Search</h5>
                        <label>
                        <input type="text" placeholder='Address' className='address-input' onChange={(e) => {
                                searchedData = e.target.value;
                                
                                showData = data.filter(item => 
                                    item.address.toLowerCase().startsWith(searchedData.toLowerCase()));
                                    console.log(showData);
                                    setSearchedDataArray(showData);
                                }} />
                        <button>
                            Search
                        </button>
                        </label>
                    </div>
                    <div className='Selected'>
                    <h5>Selected Properties</h5>
                    <table>
                        <thead>
                        <tr>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Number of rooms</th>
                        <th>Floor area(m2)</th>
                        </tr>

                        </thead>
                        <tbody>
                        {selectedData
                            .map((val, key) => {
                                return (
                                    <tr key={key}>
                                    <td>{val.address}</td>
                                    <td>{val.postcode}</td>
                                    <td>{val.numRooms}</td>
                                    <td>{val.area}</td>
                                    </tr>
                        )
                        })
                        }

                        </tbody>
                        
                    </table>
                    <div className='searchDiv'>
                    <h5>Searched Properties</h5>
                    <table>
                        <thead>
                        <tr>
                        <th>check</th>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Property type</th>
                        <th>Number of rooms</th>
                        <th>Floor area(m2)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {searchedDataArray.filter(value=>value.type  === selectedType || selectedType=== 'all' ).map((val, key) => {
                        return (
                            <tr key={key}>
                                <td> <input type="checkbox"  onChange={(e) => {
                                if(e.target.checked){
                                    val.selected=true;
                                }
                                else{
                                    val.selected=false;
                                }
                                
                                setSelectedData(searchedDataArray.filter((value)=>value.selected));
                                console.log(val)}}/></td>
                            <td>{val.address}</td>
                            <td>{val.postcode}</td>
                            <td>{val.type}</td>
                            <td>{val.numRooms}</td>
                            <td>{val.area}</td>
                            
                            </tr>
                        )
                        })}
                        </tbody>
                        
                    </table>
                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
        
    )
};