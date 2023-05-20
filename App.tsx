
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

type BlogPost = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    if (title && content) {
      const newPost: BlogPost = {
        id: Date.now(),
        title,
        content,
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter content"
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <TouchableOpacity style={styles.button} onPress={addPost}>
          <Text style={styles.buttonText}>Add Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
   
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  inputContainer: {
    width: '100%',
    marginBottom: 16,
    
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },

  button: {
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  postsContainer: {
    width: '100%',
  },

  post: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 16,
  },

  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  postContent: {
    fontSize: 16,
  },
});

export default App;
