import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import LottieView from 'lottie-react-native';

export default function App() {

  const [value, setvalue] = useState("")
  const [todo, setTodo] = useState([])

  function deneme() {
    setTodo([...todo, value])
    console.log(todo)
  }

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo); // State'i güncelleyin.
  };

  return (

    <View className="flex-1 bg-white">
      <View className="items-center">
        <View className="w-[90%] h-[60] bg-white rounded-xl flex-row items-center px-2 shadow-2xl shadow-red-950 mt-9">
          <Ionicons name="add-circle" size={34} color="black" />
          <TextInput placeholder='Ara' className="p-4 text-black" placeholderTextColor={'black'} autoCapitalize='none' onEndEditing={deneme} onChangeText={(text) => setvalue(text)} value={value}></TextInput>
        </View>
        <Pressable className="mt-2 p-5 w-auto bg-zinc-800 rounded-xl shadow-lg" onPress={deneme}>
          <Text className="text-white font-bold">
            Ekle
          </Text>
        </Pressable>
      </View>

      {
        todo.length === 0 ? <LottieView
          style={{ width: '50%', height: '60%', alignSelf: 'center', justifyContent: 'center' }}
          source={require('./assets/animation/animation.json')}
          autoPlay
          loop
        /> : <ScrollView showsVerticalScrollIndicator = {false}>
          <View className="px-2 flex-row flex-wrap justify-center">
            {
              todo.filter((item) => {
                return item.trim() !== ""
              }).map((item, index) => {
                console.log(index)
                return (
                  <View className="rounded-md bg-slate-400 w-[30%] p-5  my-5 shadow-lg items-center justify-center mx-1">
                    <Pressable onPress={() => handleDelete(index)}>
                      <Text className="text-center text-2xl text-white font-thin-bold ">
                        {item}
                      </Text>
                    </Pressable>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      }

    </View>
  );
}

