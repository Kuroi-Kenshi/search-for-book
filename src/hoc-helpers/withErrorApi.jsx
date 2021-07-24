import { useSelector } from 'react-redux'
import ErrorMessage from '@components/ErrorMessage'

export const withErrorApi = View => {
    return props => {
        const errorApiStatus = useSelector(state => state.errorApiStatusReducer)

        return (
            <>
                {errorApiStatus.status
                    ? <ErrorMessage error={errorApiStatus.type.message} />
                    : <View {...props} />
                }
            </>
        )
    }
}