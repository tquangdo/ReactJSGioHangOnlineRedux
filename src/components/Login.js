import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../containers/ContaReduxFValidate'
import { REDUXF_LOGIN } from '../redux/constants/ConfigConst'
import { compose } from 'redux'
import { reduxFTextField } from './ReduxF'
import { connect } from 'react-redux'

class Login extends React.Component {
    onSubmitForm = val => {
        const { txtUsername, txtPW } = val
        if (txtUsername === 'admin' && txtPW === 'admin') {
            this.props.propsOnAuthen()
        } else {
            alert('Sai thông tin đăng nhập!!!')
        }
    }
    render() {
        const { invalid, submitting, handleSubmit, } = this.props
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <form onSubmit={handleSubmit(this.onSubmitForm)}>
                        <Field label='Username:'
                            fullWidth margin='normal'
                            name="txtUsername"
                            component={reduxFTextField}
                        />
                        <Field label='Password:' type='password'
                            fullWidth margin='normal'
                            name="txtPW"
                            component={reduxFTextField}
                        />
                        <button
                            disabled={invalid || submitting}
                            type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapState2Props = () => {
    return {
        initialValues: {
            txtUsername: 'admin',
        }
    }
}
const withReduxForm = reduxForm({
    form: REDUXF_LOGIN,
    validate,
})
export default compose(
    connect(mapState2Props, null),
    withReduxForm)(Login)