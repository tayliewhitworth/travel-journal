import React from 'react'

export default function Main(props) {
    return (
        <div className='card'>
            <img src={props.item.imageUrl} className='card-image'/>
            <div className='card-content'>
                <div className='card-location-section'>
                    <p className='card-location'>📍{props.item.location}</p>
                    <a className='card-link' href={props.item.googleMapsUrl}>
                        View on Google Maps &rarr;
                    </a>
                </div>
                <h2 className='card-title' >{props.item.title}</h2>
                <p className='card-date' >{props.item.startDate} - {props.item.endDate}</p>
                <p className='card-description' >{props.item.description}</p>
            </div>
        </div>
    )
}

/* function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} alt={props.title} />
      <div className="card--content">
        <div className="card--location_section">
          <img src={marker} alt="Marker" />
          <p className="card--location">{props.location}</p>
          <a className="card--link" href={props.googleMapsUrl}>
            View on Google Maps &rarr;
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
 */




/* title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas" */
        
/* Photos from Unsplash
(can use these URLs as your img src)

Japan
https://source.unsplash.com/WLxQvbMyfas

Australia
https://source.unsplash.com/JmuyB_LibRo

Norway
https://source.unsplash.com/3PeSjpLVtLg */