# AOI Tile Finder Console
This project is a web application that allows users to draw an AOI (Area of Interest) on a map. The console then displays all intersecting satellite image tiles for the selected AOI. This guide will help you set up and run the project.

## Project Structure
- **Frontend**: React app to draw an AOI on a map and view intersecting tiles.
- **Backend**: Node.js/Express API server handling tile intersection requests.
- **Database**: MongoDB database storing tile data.

## Requirements
- Docker and Docker Compose installed on your system.

## Technologies Used
- **Frontend**: React, Leaflet (for mapping functionality)
- **Backend**: Node.js, Express, Turf.js (for spatial intersection calculation)
- **Database**: MongoDB

## Dataset
We use the [karnataka.geojson](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a1e461b-4293-428d-88da-5089a8cc8cf3/karnataka.geojson) file as our tile dataset. This file includes metadata for 100 tiles covering Karnataka, India.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/codemaniac-sahil/galaxeye-aoi.git
cd galaxeye-aoi
```

### 2. Load Data into MongoDB
1. Download the `karnataka.geojson` file.
2. Convert the data into a MongoDB-compatible format if necessary, or use `mongoimport` to import it directly:
   ```bash
   mongoimport --host mongodb --db aoi_db --collection tiles --file path/to/karnataka.geojson --jsonArray
   ```
3. Ensure MongoDB is running if using local MongoDB setup.

### 3. Run with Docker Compose
From the project root, start the application:
```bash
docker-compose up --build
```
Docker Compose will set up:
- **React Frontend** (available at http://localhost:3000)
- **Node Backend** (available at http://localhost:5000)
- **MongoDB** database

## Application Flow

1. **Frontend**: The user selects an AOI by drawing on the map.
2. **Backend**: Upon AOI submission, the backend API finds and returns tiles intersecting the AOI.
3. **Database**: MongoDB stores tile data; an intersection query fetches relevant tiles.

## Endpoints

### POST /api/tiles
- **Description**: Find tiles that intersect the specified AOI.
- **Request Parameters**: AOI as GeoJSON.
- **Response**: List of intersecting tiles in JSON format.


