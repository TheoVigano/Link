import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

type LinkProps = {
	name: string
	url: string
	onDetails: () => void
}

export function Link({ name, url, onDetails }: LinkProps) {
	return (
		<View>
			<View>
				<Text numberOfLines={1}>{name}</Text>
				<Text numberOfLines={1}>{url}</Text>
			</View>

			<TouchableOpacity onPress={onDetails}>
				<MaterialIcons name="more-horiz" size={18} color={colors.gray[400]} />
			</TouchableOpacity>
		</View>
	)
}
