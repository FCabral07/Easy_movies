import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import ComponentUpBar from "../../components/componentUpBar/ComponentUpBar";
import PopularCards from "../../components/popularCards/PopularCards";
import Top10Views from "../../components/top10Cards/Top10Cards";
import Styles from "./Styles";
import MovieDetails from "../details/MovieDetails";

// Criando a página home
const Home = (): JSX.Element => {
  const movies = [
    { title: 'Oppenheimer', image: 'https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg' },
    { title: 'Até o fim', image: 'https://br.web.img3.acsta.net/pictures/20/05/12/18/10/5886228.jpg' },
    { title: 'O ano rubro negro', image: 'https://mundorubronegro.com/wp-content/uploads/2021/05/51cqrRqElBL.jpg' },
    { title: 'Flamengo hexa', image: 'https://mundorubronegro.com/wp-content/uploads/2021/05/D_NQ_NP_803437-MLB25847302024_082017-W.jpg' },
  ];

  const navigation = useNavigation();  

  return (
    // Criando o container
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
        <View style={Styles.focus}>
          <ImageBackground
            source={{
              uri: "https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg",
            }}
            style={Styles.imageFocus}
          >
            <LinearGradient
              colors={["rgba(6, 13, 23, 0)", "rgba(6, 13, 23, 1)"]}
              style={Styles.linearGradient}
            >
              <View style={Styles.buttonsContainer}>
                <TouchableOpacity style={Styles.buttonFavorite}>
                  <Text style={Styles.buttonText}>+ Favorito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonDetails}>
                  <Text style={Styles.buttonText}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Popular</Text>
          </View>
          <PopularCards
            movies={[
              {
                image:
                  "https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg",
              },
              {
                image:
                  "https://br.web.img3.acsta.net/pictures/20/05/12/18/10/5886228.jpg",
              },
              {
                image:
                  "https://mundorubronegro.com/wp-content/uploads/2021/05/51cqrRqElBL.jpg",
              },
              {
                image:
                  "https://mundorubronegro.com/wp-content/uploads/2021/05/D_NQ_NP_803437-MLB25847302024_082017-W.jpg",
              },
            ]}
          />
        </View>

        <View style={Styles.top10}>
          <View style={Styles.top10text}>
            <Text style={Styles.text}>TOP 10</Text>
          </View>
          <View style={Styles.rowMovies}>
            <Top10Views data={movies}/>
          </View>
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Comédia</Text>
          </View>
          <PopularCards
            movies={[
              {
                image:
                  "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100145_ate-que-a-sorte-nos-separe-dvd-filme-comedia-ms_m1_637383480830896029.jpg",
              },
              {
                image:
                  "https://2.bp.blogspot.com/-tEU9VVTs1ks/VRSTUn9AgRI/AAAAAAAALWY/iyPX_XhGc4A/s1600/6582a8345ca09a178f6989b624c8c62f_jpg_290x478_upscale_q90.jpg",
              },
              {
                image:
                  "https://i.pinimg.com/originals/54/cb/f7/54cbf73b4b6c98305e7341120697d59f.jpg",
              },
              {
                image:
                  "https://cinema10.com.br/upload/filmes/filmes_10626_images.jpg?default=poster",
              },
            ]}
          />
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Terror</Text>
          </View>
          <PopularCards
            movies={[
              {
                image:
                  "data:image/jpeg;base64,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",
              },
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQwEd-mLPsOXJB8ynsFUJlWPogv6KnWinYw&usqp=CAU",
              },
              {
                image:
                  "https://down-br.img.susercontent.com/file/55c0a5e8ed6a121064b98974cfe14a57",
              },
              {
                image:
                  "https://oregional.com.br/media/blog/2bf59dc56babcae454499402a9e170c2.jpg",
              },
            ]}
          />
        </View>
      </ScrollView>
      <ComponentBar />
    </View>
  );
};

export default Home;
