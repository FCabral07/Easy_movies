import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_API_KEY } from "../../../env";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Vibration,
} from "react-native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import ComponentUpBar from "../../components/componentUpBar/ComponentUpBar";
import PopularCards from "../../components/popularCards/PopularCards";
import Top10Views from "../../components/top10Cards/Top10Cards";
import Styles from "./Styles";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/AntDesign";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import FirebaseService from "../../../backend/services/firebaseService";
import { useNavigation } from "@react-navigation/native";

// Criando a página home
const Home = (): JSX.Element => {
  const [popularData, setPopularData] = useState([]);
  const [topTenMovies, setTopTenMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [bgImage, setBgImage] = useState({
    image: `https://image.tmdb.org/t/p/w500/872585.jpg`,
    title: "Título Padrão",
    description: "Descrição Padrão",
    id: "0",
  });

  const navigation = useNavigation();

  // Requisição a API
  const fetchMovies = async (listType, genreID = null) => {
    try {
      // Link de requisição a api
      let url = `https://api.themoviedb.org/3/movie/${listType}?api_key=${TMDB_API_KEY}&language=pt-BR`;

      if (genreID) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=pt-BR&with_genres=${genreID}`;
      }

      const response = await axios.get(url);

      // Transformando o JSON retornado da API para conseguir manipular os dados
      const fetchedMovies = response.data.results.map((movie) => {
        let description = movie.overview;
        if (!description) {
          description = "Sem descrição até o momento";
        }

        // Formtando a data para o padrão local e adicionando um dia, pois ele perde um dia na conversão
        const releaseDateUTC = new Date(movie.release_date + "T24:00:00Z");
        const timezone = "America/Recife";
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          timeZone: timezone,
        };

        // Retornando a data
        const formattedDate = releaseDateUTC.toLocaleDateString(
          "pt-BR",
          options
        );

        // Formatando o rating para até 2 casas pós vírgula
        const rating = parseFloat(movie.vote_average).toFixed(2);

        // Retornando esses valores para usar nos cards
        return {
          id: movie.id,
          image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          title: movie.title,
          description: description,
          release_date: formattedDate,
          genres: movie.genre_ids,
          rating: rating,
        };
      });

      return fetchedMovies; // Retorna os filmes buscados
    } catch (error) {
      console.error("Erro ao buscar filmes: ", error);
      throw error; // Propaga o erro para quem chamar a função
    }
  };

  useEffect(() => {
    // Lógica para buscar os dados dos filmes
    const fetchPopularMovies = async () => {
      try {
        const data = await fetchMovies("popular");
        // console.log('RESPOSTA DO POPULAR: ', data);
        setPopularData(data);
        setBgImage({
          id: data[0].id,
          image: `https://image.tmdb.org/t/p/w500/${data[0].image}`,
          title: data[0].title,
          description: data[0].description,
        });
      } catch (error) {
        console.error("ERRO DO POPULAR MOVIES: ", error);
      }
    };

    const fetchTopTenMovies = async () => {
      try {
        const data = await fetchMovies("top_rated");
        // console.log('RESPOSTA DO TOP 10: ', data);
        setTopTenMovies(data);
      } catch (error) {
        console.error("ERRO DO TOP 10 MOVIES: ", error);
      }
    };

    const fetchComedyMovies = async () => {
      try {
        const data = await fetchMovies("top_rated", 35);
        console.log("RESPOSTA DO FILME DE COMEDIA: ", data);
        setComedyMovies(data);
      } catch (error) {
        console.error("ERRO DO FILME DE COMEDIA: ", error);
      }
    };

    const fetchHorrorMovies = async () => {
      try {
        const data = await fetchMovies("top_rated", 27);
        console.log("RESPOSTA DO FILME DE TERROR: ", data);
        setHorrorMovies(data);
      } catch (error) {
        console.error("ERRO DO FILME DE TERROR: ", error);
      }
    };

    fetchPopularMovies();
    fetchTopTenMovies();
    fetchComedyMovies();
    fetchHorrorMovies();
  }, []);

  // Estado para controlar a exibição do pop-up
  const [isModalVisible, setModalVisible] = useState(false);

  const favoritesMovie = [];
  // Estado para armazenar os detalhes do filme selecionado
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(
    favoritesMovie.includes(bgImage.id)
  );

  // Função para exibir o pop-up com os detalhes do filme
  const toggleModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={Styles.container}>
      {/* <View style={Styles.Navbar}>

      </View> */}
      <ComponentUpBar />
      {/* Permitindo scrollar */}
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        {/* Criando card principal, onde fica a imagem de destaque */}
        <View style={Styles.focus}>
          <ImageBackground
            source={{
              uri: bgImage.image,
            }}
            style={Styles.imageFocus}
          >
            <LinearGradient
              colors={["rgba(6, 13, 23, 0)", "rgba(6, 13, 23, 1)"]}
              style={Styles.linearGradient}
            >
              <View style={Styles.buttonsContainer}>
                <TouchableOpacity style={Styles.buttonFavorite}>
                  <Text style={Styles.buttonText}>+Favorito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.buttonDetails}
                  onPress={() => toggleModal(bgImage)}
                >
                  <Text style={Styles.buttonText}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Cards populares */}
        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Popular</Text>
          </View>
          <PopularCards movies={popularData} />
        </View>

        {/* Card TOP10, usando o carousel */}
        <View style={Styles.top10}>
          <View style={Styles.top10text}>
            <Text style={Styles.text}>TOP 10</Text>
          </View>
          <View style={Styles.rowMovies}>
            <Top10Views data={topTenMovies} onPressMovie={toggleModal} />
          </View>
        </View>

        {/* Criando o modal, onde eu clico na imagem e ele detalha as informações */}
        <Modal isVisible={isModalVisible}>
          <View style={Styles.containerModal}>
            <Image
              source={{ uri: selectedMovie?.image }}
              style={Styles.imageModal}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={Styles.iconModal}
            >
              <Icon name="close" color="#fff" size={30}></Icon>
            </TouchableOpacity>
            <View style={Styles.textTitleContainer}>
              <Text style={Styles.textTitleModal}>{selectedMovie?.title}</Text>
            </View>
            <View>
              <Text style={Styles.textDescriptionContainer}>Descrição</Text>
              <Text style={Styles.textDescriptionModel}>
                {selectedMovie?.description}
              </Text>
            </View>
            <View style={Styles.generalContainer}>
              <View style={Styles.ratingContainer}>
                <Text style={Styles.textContainer}>Nota crítica</Text>
                <View style={Styles.averageScore}>
                  <IconAwesome
                    name="imdb"
                    color="#d5d5d5"
                    size={20}
                  ></IconAwesome>
                  <Text style={Styles.numberRatingContainer}>
                    {selectedMovie?.rating}
                  </Text>
                </View>
              </View>
              <View style={Styles.releaseDateContainer}>
                <Text style={Styles.textContainer}>Data de lançamento</Text>
                <View style={Styles.dateContainer}>
                  <IconAwesome
                    name="calendar-o"
                    color="#d5d5d5"
                    size={20}
                  ></IconAwesome>
                  <Text style={Styles.date}>{selectedMovie?.release_date}</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Cards dos gêneros */}
        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Comédia</Text>
          </View>
          <PopularCards movies={comedyMovies} />
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Terror</Text>
          </View>
          <PopularCards movies={horrorMovies} />
        </View>
      </ScrollView>
      <ComponentBar />
      <TouchableOpacity
        style={Styles.floatingButton}
        onPress={() => navigation.navigate("Comments")}
      >
        <Icon name="message1" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
