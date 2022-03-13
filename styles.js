/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInput: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '70%',
    height: 40,
    fontSize: 14,
    color: '#212121',
    borderRadius: 20,
    paddingLeft: 12,
  },
  textButton: {
    color: '#E4812C',
    fontSize: 20,
  },
  containerList: {
    paddingHorizontal: 25,
  },
  title: {
    color: '#E4812C',
    fontSize: 22,
    paddingLeft: 24,
  },
  itemList: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#BCBCBC',
    borderStyle: 'dotted',
  },
  textList: {
    fontSize: 18,
    color: '#000000',
    paddingLeft: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#E4812C',
    borderRadius: 2,
  },
  modalContainerContent: {
    width: '80%',
    height: '30%',
    elevation: 4,
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 40,
    marginTop: 200,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  modalTitle: {
    fontSize: 18,
    color: '#E4812C',
    padding: 25,
  },
  modalText: {
    fontSize: 14,
    color: '#000',
  },
  modalContent: {
    paddingHorizontal: 25,
  },
  modalContentText: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalButton: {
    color: '#E4812C',
    borderColor: '#E4812C',
    borderWidth: 1,
    paddingHorizontal: 20,
    margin: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    borderStyle: 'dashed',
  },
});
