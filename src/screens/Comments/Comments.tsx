import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FirebaseService from "../../../backend/services/firebaseService";

const COMMENTS = [
  {
    id: "asdasd",
    username: "Caio Melo",
    comment: "Eu acho essa plataforma muito boa",
  },
  {
    id: "asdqwdad",
    username: "Weslley Oliveira",
    comment: "Os filmes da Marvel estão uma merca ultimamente",
  },
];

const Comments = (): JSX.Element => {
  const [userDetails, setUserDetails] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(COMMENTS);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    fetchUserDetails();
    fetchComments();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Obtendo o email do AsyncStorage
      const userEmail = (await AsyncStorage.getItem("userEmail"))
        .replace(/['"]+/g, "")
        .trim();

      if (userEmail) {
        // Busca os detalhes do usuário com base no email
        const user = await FirebaseService.findUser(userEmail);

        // Verifica se o usuário retornado não é nulo antes de acessar as propriedades
        if (user) {
          // Define os detalhes do usuário no useState acima
          setUserDetails(user);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchComments = async () => {
    try {
      setIsLoading(true);

      // Fetching all comments
      const allComments = await FirebaseService.getAllComments();

      if (allComments) {
        // Updating the state with the fetched comments
        setComments(allComments);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error retrieving comments:", error);
    } finally {
      // Regardless of success or failure, set isLoading to false
      setIsLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      try {
        setIsSaving(true);
        // Adding a new comment
        const newCommentId = await FirebaseService.createComment(
          userDetails?.user || "New User",
          newComment.trim()
        );

        if (newCommentId) {
          // If the comment is added successfully, update the state
          setComments([
            ...comments,
            {
              id: newCommentId,
              username: userDetails?.user || "New User",
              comment: newComment.trim(),
            },
          ]);

          // Resetting the input
          setNewComment("");
        }
        setIsSaving(false);
      } catch (error) {
        setIsSaving(false);

        console.error("Error creating comment:", error);
      }
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={Styles.keyboardingAvoidingView}
      >
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={Styles.backButton}
          >
            <Icon name="chevron-left" size={24} color={"#FBC500"} />
          </TouchableOpacity>
          <Text style={Styles.title}>Comments</Text>
        </View>

        {isLoading ? (
          <View style={Styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FBC500" />
          </View>
        ) : (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={Styles.commentContainer}>
                <Text style={Styles.username}>{item.username}</Text>
                <Text style={Styles.commentText}>{item.comment}</Text>
              </View>
            )}
          />
        )}

        {/* Input field for adding new comments */}
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
          />
          <TouchableOpacity
            style={Styles.addButton}
            onPress={handleAddComment}
            disabled={isSaving}
          >
            <Text style={Styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Comments;
