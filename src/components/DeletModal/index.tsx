import { useEffect, useState } from 'react'
import { ButtonRoot } from '@components/Button/ButtonRoot'
import { ButtonTitle } from '@components/Button/ButtonTitle'
import { Modal, View, Text } from 'react-native'
interface ModalProps {
  setModalIsVisible: () => void
  isOpen: boolean
  handleDeletSnack: () => void
}
export function DeletModal({
  setModalIsVisible,
  isOpen,
  handleDeletSnack,
}: ModalProps) {
  const [modalVisible, setModalVisible] = useState(isOpen)

  useEffect(() => {
    if (modalVisible !== isOpen) {
      setModalVisible(isOpen)
    }
  }, [isOpen, modalVisible])
  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={setModalIsVisible}
    >
      <View className="flex-1 items-center justify-center bg-gray-600 px-3 opacity-90">
        <View className="z-10 h-56 w-full items-center justify-center rounded-3xl bg-white px-5 ">
          <View className="items-center justify-center">
            <Text className="text-center font-heading text-xl">
              Deseja Realmente excluir o registro da refeição?
            </Text>
          </View>
          <View className="w-full flex-row justify-between">
            <ButtonRoot
              background="secundary"
              className="mt-4 w-36"
              onPress={setModalIsVisible}
            >
              <ButtonTitle background="secundary" title="Cancelar" />
            </ButtonRoot>
            <ButtonRoot className="mt-4 w-36" onPress={handleDeletSnack}>
              <ButtonTitle title="Sim, Excluir" />
            </ButtonRoot>
          </View>
        </View>
      </View>
    </Modal>
  )
}
