import { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20
  return (
    <View className="flex-1 bg-gray-100 px-4 " style={{ paddingTop }}>
      {children}
    </View>
  )
}
