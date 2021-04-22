import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import {Button} from '@material-ui/core';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays | 30 April to 6 of June | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds Flexibility</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Abuja"
        title="Tranquil Open-plan 2BR duplex w/pool+smart lock"
        description="1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$50 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Abuja"
        title="Stay at this spacious House"
        description="1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$50 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3b97c42d-2bda-40bb-a8e7-70198cbbcb61.jpg?im_w=720"
        title="Minimalist 2BDR within a Safe Estate"
        location="Stay at this spacious House"
        description="4 guest | 2 bedroom | 2 bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$95 / night"
        total="$300 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Abuja"
        title="Stay at this spacious House"
        description="1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$50 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ef149339-7494-4fca-811a-f09fdb5b7a21.jpg?im_w=720"
        location="Private room in center of Abuja"
        title="Stay at this spacious House"
        description="1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$50 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3b97c42d-2bda-40bb-a8e7-70198cbbcb61.jpg?im_w=720"
        location="Minimalist 2BDR apt w/great WiFi in a Safe Estate"
        title="Stay at this spacious House"
        description="4 guest | 2 bedroom | 2 bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$95 / night"
        total="$300 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ef149339-7494-4fca-811a-f09fdb5b7a21.jpg?im_w=720"
        location="Private room in center of Abuja"
        title="Stay at this spacious House"
        description="1 guest | 1 bedroom | 1.5 shared bathrooms | WiFi | Kitchen | Free parking | Washing machine"
        star={4.54}
        price="$50 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
