import React, { useState } from "react";
import {
    Vibration,
} from "react-native";

import FirebaseService from "../../../backend/services/firebaseService";

export const favoritesMovies = [];

export const FavoritesAdd = ({ movie }) => {
    try {
        favoritesMovies.push(movie.id);
        FirebaseService.saveMovie(favoritesMovies);
        console.log("Filme adicionado à lista de Favoritos");
    } catch {
        console.log('Error to add movie')
    }

    Vibration.vibrate();
    console.log("Lista Atual:");
    console.log(favoritesMovies);
};

export const FavoritesRemove = ({ movie }) => {
    FirebaseService.removeMovie(movie.id);
    const indice = favoritesMovies.indexOf(movie.id);
    if (indice !== -1) {
        favoritesMovies.splice(indice, 1); // Remove um elemento a partir do índice encontrado
        console.log(`Valor ${movie.id} removido do array.\nLista atual: ${favoritesMovies}`);
    } else {
        console.log(`Valor ${movie.id} não encontrado no array.`);
    }
    Vibration.vibrate();
    console.log("Filme removido da lista de Favoritos");
    console.log("Lista Atual:");
    console.log(favoritesMovies);
}

export const VerifyFavorites = ({ movie }) => {
    if(favoritesMovies.includes(movie.id)){
        return true;
    }else{
        return false;
    }
}