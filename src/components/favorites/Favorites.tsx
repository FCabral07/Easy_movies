import React, { useState } from "react";
import {
    Vibration,
} from "react-native";

import FirebaseService from "../../../backend/services/firebaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let favoritesMovies = [];

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

export const FavoritesLogin = async () => {
    try {
        const userEmail = (await AsyncStorage.getItem('userEmail')).replace(/['"]+/g, '').trim();

        if (userEmail) {
            const favoritesMovie = await FirebaseService.getFavoritesMovies(userEmail);

            favoritesMovies = favoritesMovie;

            console.log('Filmes favoritos carregados:', favoritesMovies);
        } else {
            console.log('Email não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar filmes favoritos.', error)
    }
}

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
};

export const resetFavoritesMovies = () => {
    // Zera a lista de favoritos
    favoritesMovies = [];
    console.log('Lista favoritos zerada', favoritesMovies);
};

export const VerifyFavorites = ({ movie }) => {
    if (favoritesMovies.includes(movie.id)) {
        return true;
    } else {
        return false;
    }
}