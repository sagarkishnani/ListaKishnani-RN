import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container} styles={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Type here"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#000"
          value={text}
          onChangeText={handleOnChangeInput}
          style={styles.textInput}
        />
        <Pressable onPress={() => addItem()}>
          <Text style={styles.textButton}>Add</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <View style={styles.itemList}>
                <Text style={styles.textList}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Modal
        style={styles.modal}
        animationType="slide"
        visible={modalVisible}
        transparent={true}>
        <View style={styles.modalContainerContent}>
          <View>
            <Text style={styles.modalTitle}>Description</Text>
          </View>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Do you want to delete this item?
            </Text>
            <Text style={styles}>{selectedItem.value}</Text>
          </View>
          <View>
            <Pressable onPress={() => handleDeleteItem(selectedItem.id)}>
              <Text style={styles.modalButton}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
