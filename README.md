<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/adamgrharvey/armory-frontend">
    <img src="./src/images/Project/Armory.jpg" alt="Logo" width="300" height="180">
  </a>

<h3 align="center">Classic Armory</h3>

  <p align="center">
    An Unofficial Armory forged for WoW Classic.
    <br />
  </p>
</div>
</details>


# About The Project

Classic Armory is a database for Characters that play World of Warcraft: Classic. It is a work in progress, and is currently in the beta stage of development.

My goal is to create a place where people can upload their characters and view that characters data and statistics, as well as everyone elses characters!

Armory is split into 3 core components:

- **Frontend** | Display data in a cohesive and interesting way. Search for, and view, character profiles. Send and receive data to and from Backend. Sends and receieves data from Blizzard and WarcraftLogs APIs.
- **Backend** | Store and provide all character data, as well as thousands of achievement datapoints. RESTful API processes and imports thousands of datapoints at a time, and supplies data to frontend upon request.
- **In-Game Data Collection App** | Parse all character data and export as an encoded string. User copies this string and pastes it into the import page.

### Built With

- [![React][React.js]][React-url]
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
- ![SQLite3](https://img.shields.io/badge/sqlite3-%230F80CC.svg?style=for-the-badge&logo=sqlite&logoColor=white)
- ![Axios](https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=5A29E4&logo=Axios&logoColor=FFFFFF&label=)

## Try it out
Check out the <a href="https://armory-frontend-nine.vercel.app/">app demo</a> hosted on Vercel!

## Examples

!['Character-view'](https://github.com/adamgrharvey/armory-frontend/blob/master/src/images/Project/Armory_example.png)

https://user-images.githubusercontent.com/104089024/219136427-19c2c505-a9d3-4468-b928-c69d3316cd0d.mp4

# Run project locally

You have two options for running this locally; one simple, and one in depth.

## Simple (recommended)
This set of instructions is for running the frontend-only demo.

### Installation

1. Clone the `demo` branch of the frontend repo
   ```sh
   git clone -b demo https://github.com/adamgrharvey/armory-frontend
   ```

2. Navigate to the `armory-frontend` and install packages.
   ```sh
   cd armory-frontend
   npm install
   ```
   
3. Change `.env.example` to `.env`, and get your own Blizzard and WarcraftLogs API keys and fill them in the `.env` file.
   
4. Run the app.
   ```sh
   npm start
   ```
5. Open https://localhost:3001 in your browser.

## In Depth
This set of instructions is for initializing and running the frontend, backend, and in-game addon to gather character data.

To get a local copy up and running follow these steps.

### Installation

1. Clone the frontend repo
   ```sh
   git clone https://github.com/adamgrharvey/armory-frontend
   ```
2. Install NPM packages in the root directory
   ```sh
   npm install
   npm run start
   ```
3. Change `.env.example` to `.env`, and get your own Blizzard and WarcraftLogs API keys and fill them in the `.env` file.

4. In a separate directory, Clone the backend repo
   ```sh
   git clone https://github.com/adamgrharvey/Armory-backend
   ```
5. Change into `Armory` directory and install Gems. This requires Ruby 3.11.
   ```sh
    cd Armory
    bundle install
   ```
6. Create database and start server. This includes seed data for statistics/achievements, but not any characters.
   ```sh
     rails db:setup
     rails server
   ```
7. Open `localhost:3001` in your browser

8. Install the ClassicArmory WoW Addon [https://github.com/adamgrharvey/ClassicArmory] to export your character data. When in-game on Classic Wow: WotLK, type `/armory`. Copy the string on screen, and paste it on the submission page on the app.

The app should scan, upload, and redirect to the character page!

If you have any issues, please let me know! I'd love to help you get this working!

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
