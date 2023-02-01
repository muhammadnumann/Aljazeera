import { FieldsForm } from 'components/FieldsForm/User'
import withLayout from 'utils/withLayout'

export default withLayout(FieldsForm, ['administrator', 'group.read'])
