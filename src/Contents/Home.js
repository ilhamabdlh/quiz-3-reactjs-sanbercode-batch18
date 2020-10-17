import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
    };
  }

  componentDidMount() {
    const url = "http://backendexample.sanbercloud.com/api/movies";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          dataFilm: res.data.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <>
        <h1>Daftar Film Terbaik</h1>
        <div id="film-list">
          {this.state.dataFilm.map((film) => {
            return (
              <div key={film.id}>
                <h3>{film.title}</h3>
                <br />
                <img id="image" src='../' width='500px'></img>
                <p>
                  <b> Rating {film.rating}</b>
                </p>
                <p>
                  <b>Durasi: {parseFloat(film.duration / 60).toFixed(2)} jam</b>
                </p>
                <p>
                  <b>Genre: {film.genre}</b>
                </p>
                <br />
                <p>
                  <b>Deskripsi: </b>
                  {film.description}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
